import { Inter } from "next/font/google";
import "../app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-theme="sistemasHGC">
      <body className={inter.className}>
        <div className="flex flex-col min-h-[100dvh]">{children}</div>
      </body>
    </html>
  );
}
