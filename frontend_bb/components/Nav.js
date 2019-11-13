import Link from 'next/link';

const Nav = () => (
    <div>
        <Link href="/">
            <a>Go back home</a>
        </Link>
        <Link href="/sell">
            <a>Go to Sell page</a>
        </Link>
    </div>
)

export default Nav;