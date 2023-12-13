'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <nav className="flex gap-4 items-center h-12 justify-center">
        <Link
          className={`hover:text-blue-300 ${
            pathname === "/" ? "text-blue-300" : ""
          } `}
          href={"/"}
        >
          Home
        </Link>
        |
        <Link
          className={`hover:text-blue-300 ${
            pathname === "/examples/server" ? "text-blue-300" : ""
          } `}
          href={"/examples/server"}
        >
          Server
        </Link>
        |{" "}
        <Link
          className={`hover:text-blue-300 ${
            pathname === "/examples/server-client" ? "text-blue-300" : ""
          } `}
          href={"/examples/server-client"}
        >
          Server Client
        </Link>
        |{" "}
        <Link
          className={`hover:text-blue-300 ${
            pathname === "/examples/server-action" ? "text-blue-300" : ""
          } `}
          href={"/examples/server-action"}
        >
          Server Action
        </Link>
        |
        <Link
          className={`hover:text-blue-300 ${
            pathname === "/about" ? "text-blue-300" : ""
          } `}
          href={"/about"}
        >
          About
        </Link>
      </nav>
    </header>
  );
}

export default Header