import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLe_SECRET,
		}),
		// ...add more providers here
	],
	debug: process.env.NODE_ENV === 'development',
	secret: process.env.AUTH_SECRET,
	jwt: {
		secret: process.env.JWT_SECRET,
	},
});
