import { fetchProgrammingProgress, getCachedUserDetails } from "./moocfi"
import { fetchCrowdsorcererProgress } from "./crowdsorcerer"
import { zip } from "../util/arrays"
import { fetchQuizProgress } from "./quiznator"
import { fetchQuizzesProgress } from "./quizzes"

export async function fetchProgress() {
  // await fetchQuizzesProgress()
  const serviceIdentifiers = ["Programming exercises", "Quizzes"]
  const progressesCollection = await Promise.all([
    fetchProgrammingProgress(),
    fetchQuizzesProgress(),
  ])
  const userDetails = await getCachedUserDetails()
  const currentCourseVariant = userDetails?.extra_fields?.course_variant
  const progressByGroup = {}

  zip(serviceIdentifiers, progressesCollection).forEach(
    ([identifier, progresses]) => {
      console.log(JSON.stringify(progresses))
      progresses.forEach(progressEntry => {
        if (!progressByGroup[progressEntry.group]) {
          progressByGroup[progressEntry.group] = {}
        }
        progressByGroup[progressEntry.group][
          identifier.replace("osa", "part")
        ] = progressEntry
      })
    },
  )
  const toBeDeleted = []
  Object.entries(progressByGroup).forEach(([group, serviceEntries]) => {
    if (!Object.keys(serviceEntries).find(o => o === "Programming exercises")) {
      toBeDeleted.push(group)
    }
  })

  toBeDeleted.forEach(o => {
    delete progressByGroup[o]
  })
  return progressByGroup
}
