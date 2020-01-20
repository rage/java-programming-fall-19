const courseSettings = {
  language: "en",
  name: "Java Programming Fall 2019",
  subtitle: "Learn how to program",
  slug: "java-programming-fall-19",
  // tmcCourse: "introduction-to-programming-fall-19",
  tmcCourse: "acp-fall-19",
  tmcOrganization: "hy",
  bannerPath: "banner.svg",
  sidebarEntries: [
    {
      title: "About Course",
      path: "/",
    },
    // {
    //   title: "Learning Objectives",
    //   path: "/learning-objectives",
    // },
    // {
    //   title: "Grading and exams",
    //   path: "/grading-and-exams",
    // },
    { title: "Support and Assistance", path: "/support-and-assistance" },
    {
      title: "Frequently asked questions",
      path: "/faq",
    },
    { separator: true, title: "Introduction to programming" },
  ],
  sidebarFuturePages: [
    { title: "Part 2", tba: "TBA"},
    { title: "Part 3", tba: "TBA"},
    { title: "Part 4", tba: "TBA"},
    { title: "Part 5", tba: "TBA"},
    { title: "Part 6", tba: "TBA"},
    { title: "Part 7", tba: "TBA"},
    { separator: true, title: "Advanced course in programming" },
    { title: "Part 8", tba: "TBA"},
    { title: "Part 9", tba: "TBA"},
    { title: "Part 10", tba: "TBA"},
    { title: "Part 11", tba: "TBA"},
    { title: "Part 12", tba: "TBA"},
    { title: "Part 13", tba: "TBA"},
    { title: "Part 14", tba: "TBA"},
  ],
  splitCourses: true,
}

module.exports = {
  default: courseSettings,
}
