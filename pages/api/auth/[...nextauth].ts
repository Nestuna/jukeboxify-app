import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/app/src/lib/prisma"
import { Adapter, AdapterUser } from "next-auth/adapters"


export const authConfig = {
  providers: [

  ],
  adapter: PrismaAdapter(prisma) as Adapter,
} satisfies NextAuthOptions

export default NextAuth(authConfig)
