import axios from "axios"
import { accessToken } from "./moocfi"

export async function fetchQuizzesProgress() {
  const response = await axios.get(
    "https://quizzes.mooc.fi/api/v1/courses/fff65315-db1a-46f7-abc6-74de39e22a72/users/current/progress",
    { headers: { Authorization: `Bearer ${accessToken()}` } },
  )
  return response.data?.points_by_group
}

export async function fetchQuizNames() {
  const response = await axios.get(
    "https://quizzes.mooc.fi/api/v1/quizzes/fff65315-db1a-46f7-abc6-74de39e22a72/titles/en_US",
  )
  return response.data
}
