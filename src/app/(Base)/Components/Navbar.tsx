import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "promos", href: "/promos" },
    { name: "packages", href: "/packages" },
  ];

  return (
    <nav className="navbar bg-white px-20 py-4">
      <div className="flex-1">
        <h1 className="text-2xl font-semibold text-darkBlue">
          Fly<span className="text-lightBlue">Travel</span>
        </h1>
      </div>
      <div className="flex justify-around w-2/6 text-darkBlue items-center">
        {links.map(({ name, href }) => (
          <Link
            key={name}
            href={href}
            className="hover:text-orange-500 ease-in-out duration-150 transition-all font-medium"
          >
            {name}
          </Link>
        ))}
        <Link
          href="/Login"
          className="button btn btn-sm w-28 h-10 text-white hover:bg-lightBlue hover:text-white transition-all ease-in-out duration-150 border-none "
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
