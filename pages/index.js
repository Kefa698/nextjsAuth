import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function Home() {
	const { data: session } = useSession();
	if (session) {
		return (
			<>
				Signed in as {session.user.name} <br />
				<button onClick={() => signOut()}>Sign out</button>
			</>
		);
		<Link href="/about">
			<a>about</a>
		</Link>;
	}
	return (
		<>
			Not signed in <br />
			<button onClick={() => signIn()}>SignIn</button>
		</>
	);
}
