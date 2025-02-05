import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import { client } from './sanity/lib/client';
import { AUTHOR_QUERY_BY_GITHUB_ID } from './sanity/lib/queries';
import { writeClient } from './sanity/lib/write-client';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({ user, profile }: { user: any; profile: any }) {
      if (profile) {
        const { id, login, bio } = profile;
        const { name, email, image } = user;
        const existingUser = await client
          .withConfig({ useCdn: false })
          .fetch(AUTHOR_QUERY_BY_GITHUB_ID, {
            id,
          });
        if (!existingUser) {
          await writeClient.create({
            _type: 'author',
            name,
            email,
            image,
            id,
            username: login,
            bio: bio || null,
          });
        }
      }
      return true;
    },
    async jwt({
      token,
      account,
      profile,
    }: {
      token: any;
      account: any;
      profile: any;
    }) {
      if (account && profile) {
        const user = await client
          .withConfig({ useCdn: false })
          .fetch(AUTHOR_QUERY_BY_GITHUB_ID, {
            id: profile?.id,
          });
        token.id = user?._id;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      Object.assign(session, { id: token.id });
      return session;
    },
  },
});
