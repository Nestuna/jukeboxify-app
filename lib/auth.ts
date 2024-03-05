import { authConfig } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"

const [spotifyID, spotifySecret] = [
  process.env.SPOTIFY_ID,
  process.env.SPOTIFY_SECRET,
] as string[];


export const getAuthSession = async () => {
  return await getServerSession(authConfig)
}

export const getToken = async () => {
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: spotifyID,
      client_secret: spotifySecret
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
  const json = await res.json()
  return json.access_token
}

export const getRequiredAuthSession = async () => {
  const session = await getAuthSession()
  if (!session) {
    throw new Error('No session found')
  }

  return session
}
