import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-base-100 py-6 px-4 md:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-3 lg:space-y-0">
        <p className="text-sm">© 2024 Sistemas H G C. Derechos reservados.</p>
        <p className="text-sm">
          {" "}
          Ricardo Balbin (Ruta 8) 5323, San Martín Buenos Aires - Argentina
        </p>

        <div className="flex items-center gap-4">
          <Link className="hover:text-secondary" href="/sobre-nosotros">
            Sobre Nosotros
          </Link>
          <Link className="hover:text-secondary" href="/contacto">
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
