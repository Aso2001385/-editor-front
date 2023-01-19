import { Octokit } from '@octokit/core'

const AUTH_TOKEN = process.env.AUTH_TOKEN
const END_POINT = process.env.MARK_DOWN_API_BASE_URL

export default async text => {
  const octokit = new Octokit({ auth: AUTH_TOKEN })
  const response = await octokit.request(END_POINT, { text })
  return response.data
}
