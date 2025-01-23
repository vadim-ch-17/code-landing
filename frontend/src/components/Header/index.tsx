import React from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import client from "@/lib/graphQL/apolloClient";
import { GET_HEADER } from "@/lib/graphQL/queries";

interface HeaderNavItem {
  __typename: string;
  path: string;
  title: string;
  type: string;
  order: number;
}
const Header = async () => {
  const { data } = await client.query({
    query: GET_HEADER,
    variables: { navigationIdOrSlug: "header-navigation" },
  });

  return (
    <header className="bg-silver">
      <nav className="flex max-w-[1184px] mx-auto px-4 py-7 sticky top-0 z-50">
        <Link href="/" className="brand-logo">
          <Image
            src="/images/logo_black.svg"
            alt="logo"
            width={155}
            height={24}
          />
        </Link>
        <ul
          id="nav-mobile"
          className="flex flex-col md:flex-row gap-[min(3.125rem,4vw)] mx-auto absolute md:relative">
          {data.renderNavigation.map((item: HeaderNavItem) => (
            <li key={item.path}>
              <Link href={item.path} className="text-darkPrimary hover-green">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <button className="burger block md:hidden">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
