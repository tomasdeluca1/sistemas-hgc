import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-base-100 py-6 px-4 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm">© 2024 Sistemas H G C. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link className="hover:text-secondary" href="#">
            Sobre Nosotros
          </Link>
          <Link className="hover:text-secondary" href="#">
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
