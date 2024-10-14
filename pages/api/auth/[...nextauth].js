import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUsers } from "../../../lib/dummydata";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const users = getUsers();
        const user = users.find(
          (u) =>
            u.username === credentials.username &&
            u.password === credentials.password
        );

        if (user) {
          return { id: user.id, username: user.username };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.username = token.username;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
