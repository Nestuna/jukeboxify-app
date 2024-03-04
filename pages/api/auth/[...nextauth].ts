import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/src/lib/prisma";
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
    })
  ],
  adapter: PrismaAdapter(prisma) as Adapter

} satisfies NextAuthOptions;

export default NextAuth(authConfig);
