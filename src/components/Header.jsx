import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-primary text-base-100 py-4 px-6 md:px-12 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <div>
          <h1 className="text-2xl font-bold">Sistemas H.G.C.</h1>
          <p className="text-sm">Automotive Parts Excellence</p>
        </div>
      </Link>
      <nav className="hidden md:flex items-center gap-4">
        <Link className="hover:text-secondary" href="sobre-nosotros">
          Sobre Nosotros
        </Link>
        <Link className="hover:text-secondary" href="contacto">
          Contacto
        </Link>
      </nav>
    </header>
  );
};

export default Header;
