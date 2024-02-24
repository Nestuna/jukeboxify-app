import { authConfig } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"

export const getAuthSession = async () => {
  return await getServerSession(authConfig)

}

export const getRequiredAuthSession = async () => {
  const session = await getAuthSession()
  if (!session) {
    throw new Error('No session found')
  }

  return session
}
