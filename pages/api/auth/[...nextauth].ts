import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import { Adapter } from "next-auth/adapters";
import SpotifyProvider from "next-auth/providers/spotify";

const [spotifyID, spotifySecret] = [
  process.env.SPOTIFY_ID,
  process.env.SPOTIFY_SECRET,
];


if (!spotifyID || !spotifySecret) {
  throw new Error("Missing environnement credentials");
}

export const authConfig = {
  providers: [
    SpotifyProvider({
      clientId: spotifyID,
      clientSecret: spotifySecret,
      authorization:
        'https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-private',
    },
    )
  ],
  callbacks: {
    async session({session, user}) {
      console.log('session', session, user)
      session.user = user;
      return session;
    },
  },
  adapter: PrismaAdapter(prisma) as Adapter

} satisfies NextAuthOptions

export default NextAuth(authConfig);
