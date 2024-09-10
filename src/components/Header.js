"use client";

import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuNav = [
  {
    id: 1,
    label: "Home",
    slug: "/",
    url: "/",
  },
  {
    id: 2,
    label: "Users List",
    slug: "users",
    url: "/users",
  },
  {
    id: 3,
    label: "Posts",
    slug: "posts",
    url: "/posts",
  },
  {
    id: 4,
    label: "Photos",
    slug: "photos",
    url: "/photos",
  },
  {
    id: 5,
    label: "Todos",
    slug: "todos",
    url: "/todos",
  },
];

function Header() {
  const pathname = usePathname();
  return (
    <>
      <header>
        <div className="mx-auto px-4 xl:container">
          <nav className="flex items-center justify-between py-4">
            <a
              href="#"
              className="logo inline-flex h-12 w-12 items-end justify-end rounded-sm bg-black font-black text-white"
            >
              .JS
            </a>

            <ul className="flex gap-8">
              {menuNav.map((menu) => {
                return (
                  <li key={menu.id}>
                    <Link
                      href={menu.url}
                      className={`link ${pathname === menu.slug ? "text-emerald-500" : ""}`}
                    >
                      {menu.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Button className="px-6 py-2 text-base font-bold">Contact</Button>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
