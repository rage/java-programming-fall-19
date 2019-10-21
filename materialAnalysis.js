const fs = require('fs')
const path = require('path')

const RE = {
  headerRe: /^(---\n[\S\s]+\n---)$/gm,
  textBoxRe: /<text-box.*>(.|\n)*?<\/text-box>/gm,
  quizRe: /<quiz.*>(.|\n)*?<\/quiz>/gm,
  javaExRe: /```java(.|\n)*?```/gm,
  programmingExRe: /<programming-exercise .*>(.|\n)*?<\/programming-exercise>/gm,
  codeStateRe: /<code-states-visualizer .*>(.|\n)*?<\/code-states-visualizer>/gm,
  finnishTextTranslated: /<!--(.|\n)*?-->/gm,
}

const anyUniquePart = new RegExp(Object.entries(RE).map(([key, re], index, arr) => {
  return index !== arr.length - 1 ? '(' + re.source + ')|' : '(' + re.source + ')'
}).join(''), 'gm')

/** Retrieve file paths from a given folder and its subfolders. */
const getFilePaths = (folderPath) => {
  const entryPaths = fs.readdirSync(folderPath).map(entry => path.join(folderPath, entry))
  const filePaths = entryPaths.filter(entryPath => fs.statSync(entryPath).isFile())
  const dirPaths = entryPaths.filter(entryPath => !filePaths.includes(entryPath))
  const dirFiles = dirPaths.reduce((prev, curr) => prev.concat(getFilePaths(curr)), [])
  return [...filePaths, ...dirFiles]
}

const getPart = (fileName) => {
  const partId = fileName.match(/\/(part-\d+)\/|\/(osa-\d+)\//g)
  if (partId.length && partId.length > 0) {
    return partId[0].replace(/^\/|\/$/g, '')
  }
  return 'unknown'
}

const getSubpart = (fileName) => {
  // const test = '/Users/peje/dev/java-programming-fall-19/data/osa-10/3-poikkeukset.md'
  const subpartName = fileName.match(/\/[-\w]*\.md/g)
  if (subpartName && subpartName.length > 0) {
    return subpartName[0].replace('.md', '').replace(/^\/|\/$/g, '')
  }
  return 'unknown'
}

const cleanBodyChars = (str) => {
  return (str.replace(/[^\wåäö]*/gm, '') || '')
}

const cleanBodyWords = (str) => {
  return (
    (str.replace(/[^\wåäö ]*/gm, '') || '')
      .split(' ')
      .filter(w => w.length > 2) || []
  ).join(' ')
}

const countWords = (str) => {
  return (
    (str.replace(/[^\wåäö ]*/gm, '') || '')
      .split(' ')
      .filter(w => w.length > 2) || []
  ).length
}

const countChars = (str) => {
  return (str.replace(/[^\wåäö]*/gm, '') || '').length
}

const extractContentFromSubpart = async (file, type) => {
  let content = await fs.readFileSync(file, 'utf8')
  content = content.replace(RE.finnishTextTranslated, '')
  let data = {
    file,
    body: content.replace(anyUniquePart, '')
  }
  if (type === 'a') {
    data = {
      ...data,
      header: content.match(RE.headerRe),
      textBoxes: content.match(RE.textBoxRe),
      quizzes: content.match(RE.quizRe),
      javaExamples: content.match(RE.javaExRe),
      programmingExercises: content.match(RE.programmingExRe),
      codeStatesViz: content.match(RE.codeStateRe)
    }
  }
  return data
}

function parseMaterial(type) {
  return new Promise(async (resolve, reject) => {
    try {
      let parts = await Promise.all(getFilePaths(path.join(__dirname, '/data'))
        .flatMap(paths => paths)
        .filter(path => {
          return (path.includes('part-') || path.includes('osa-')) && path.includes('.md')
        })
        .sort()
        .map(file => {
          return extractContentFromSubpart(file, type)
        }))

      parts = parts
       .map(part => ({ ...part, part: getPart(part.file), subPart: getSubpart(part.file)}))
       .map(part => {
         return {
           ...part,
           charactersInBody: countChars(part.body),
           wordsInBody: countWords(part.body),
          //  cleanBodyChars: cleanBodyChars(part.body),
          //  cleanBodyWords: cleanBodyWords(part.body)
          }
        })
        .map(p => {
          delete p.part
          return p
        })
        .reduce((acc, curr) => {
          const key = curr.part
          const data = { ...curr}
          delete data.part
          return {...acc, [key]: acc[key] ? acc[key].concat(data) : [data] }
        }, {})
      resolve(parts)
    } catch (e) {
      reject(e)
    }
  })
}

const args = process.argv.slice(2)
const flags = ['-f', '-c', '-a']

async function analyse() {
  try {
    if (args.includes(flags[0]) && args.includes(flags[2])) {
      // Create file with everything
      const result = await parseMaterial('a')
      fs.writeFileSync('material-analysis-full.json', JSON.stringify(result))
      console.log('Full file created in current directory')
    } else if (args.includes(flags[0])) {
      // Create lean file
      const result = await parseMaterial('l')
      const lean = Object.fromEntries(Object.entries(result).map(([key, subParts]) => {
        return [key, subParts.map(part => {
          delete part.body
          return part
        })]
      }))
      fs.writeFileSync('material-analysis-lean.json', JSON.stringify(lean))
      console.log('Lean file created in current directory')
    } else if (args.includes(flags[1])) {
      // Print lean output
      const result = await parseMaterial('l')
      const lean = Object.fromEntries(Object.entries(result).map(([key, subParts]) => {
        return [key, subParts.map(part => {
          delete part.body
          return part
        })]
      }))
      console.log(lean)
    } else {
      console.log('Please provide arguments')
      console.log('Available arguments:\n  -f  generate file (lean output)\n  -a  (optional) include all data fields in file\n  -c  print analysis to console (lean output )')
    }
  } catch (e) {
    console.log(e)
  }
}

analyse()
