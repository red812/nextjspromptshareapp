import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";
import { connectToDB } from "@utils/database";
import User from "@models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {
    try {
    } catch (error) {}
  },
  async signIn({ profile }) {
    try {
      await connectToDB();
      // check first if a user already exists
      const userExists = await User.findOne({
        email: profile.email,
      });
      // if the user doesn't exist, create a new user
      if (!userExists) {
        await User.create({
          email: profile.email,
          username: profile.name.replace(" ", "").toLowerCase(),
          image: profile.picture,
        });
      }
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },
});

export { handler as GET, handler as POST };
