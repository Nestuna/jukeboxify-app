import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/src/lib/prisma";
import { Adapter } from "next-auth/adapters";
import GithubProvider from "next-auth/providers/github";


const [githubID, githubSecret] = [
  process.env.GITHUB_ID,
  process.env.GITHUB_SECRET,
];

const [googleID, googleSecret] = [
  process.env.GOOGLE_ID,
  process.env.GOOGLE_SECRET,
];

if (!githubID || !githubSecret || !googleID || !googleSecret) {
  throw new Error("Missing environnement credentials");
}

export const authConfig = {
  providers: [
    GithubProvider({
      clientId: githubID,
      clientSecret: githubSecret,
    }),
    GoogleProvider({
      clientId: googleID,
      clientSecret: googleSecret,
    }),
  ],
  adapter: PrismaAdapter(prisma) as Adapter,
} satisfies NextAuthOptions;

export default NextAuth(authConfig);
