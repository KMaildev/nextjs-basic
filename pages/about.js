import Head from 'next/head';
import Link from 'next/link';

export default function About() {
    return (
        <div>
            <Head>
                <title>About Page</title>
            </Head>
            <h1>About Us</h1>
            <p>This is the about page.</p>

            <Link href="/">
                Home
            </Link>
        </div>
    );
}
