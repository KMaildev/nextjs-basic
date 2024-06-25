import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
    const [count, setCount] = useState(0)


    const incrementCount = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <Head>
                <title>Home Page</title>
            </Head>

            <h1>Welcome to Next.js</h1>
            <p>This is the home page.</p>

            <p>Count: {count}</p>
            
            <button onClick={incrementCount}>Increment</button>

            <Link href="/about">
                About Us
            </Link>

            <Link href="/items">
                Items
            </Link>
        </div>
    );
}
