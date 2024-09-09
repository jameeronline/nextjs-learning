"use client";

import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuNav = [
  {
    label: "Home",
    slug: "/",
    url: "/",
  },
  {
    label: "Users List",
    slug: "users",
    url: "/users",
  },
  {
    label: "Posts",
    slug: "posts",
    url: "/posts",
  },
  {
    label: "Photos",
    slug: "photos",
    url: "/photos",
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
                  <li>
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
