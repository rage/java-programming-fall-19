import axios from "axios"
import { accessToken } from "./moocfi"

export async function fetchQuizzesProgress() {
  const response = await axios.get(
    "https://quizzes.mooc.fi/api/v1/courses/d4dbe426-33dd-41df-b934-0a4eaa5658fb/users/current/progress",
    { headers: { Authorization: `Bearer ${accessToken()}` } },
  )
  return response.data?.points_by_group
}

export async function fetchQuizNames() {
  const response = await axios.get(
    "https://quizzes.mooc.fi/api/v1/quizzes/d4dbe426-33dd-41df-b934-0a4eaa5658fb/titles/en_US",
  )
  return response.data
}
