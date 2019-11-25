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
      title: "NetBeans installation guide",
      path: "/netbeans-installation-guide"
    },
    {
      title: "Frequently asked questions",
      path: "/faq",
    },
    { separator: true, title: "Introduction to programming" },
  ],
  sidebarFuturePages: [
    //{ separator: true, title: "Advanced course in programming" },
    { title: "Part 13", tba: "TBA" },
    { title: "Part 14", tba: "TBA" }
  ],
  splitCourses: true,
}

module.exports = {
  default: courseSettings,
}
