/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export function SobreNosotros() {
  return (
    <div className="bg-base-100 text-base-content">
      <header className="relative py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0">
          <img
            src="../../images/sobre-hgc.png" // Reemplaza con la ruta correcta de tu imagen
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-5xl font-bold tracking-tight text-base-100 sm:text-6xl md:text-7xl">
              Sistemas H G C
            </h1>
            <p className="mt-8 text-xl leading-8 text-base-100">
              Expertos en fabricación y comercialización de piezas automotrices
              con más de 25 años de experiencia.
            </p>
          </div>
        </div>
      </header>

      <section className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
                Nuestra Historia
              </h2>
              <p className="mt-8 text-lg leading-8 text-gray-600">
                Sistemas H G C fue fundada en 2010 con el objetivo de
                proporcionar soluciones innovadoras y de alta calidad para la
                industria automotriz. Desde entonces, hemos crecido
                constantemente, convirtiéndonos en un proveedor confiable y
                respetado en el mercado.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
                Misión y Valores
              </h2>
              <p className="mt-8 text-lg leading-8 text-gray-600">
                Nuestra misión es ser líderes en la fabricación y
                comercialización de piezas automotrices, ofreciendo productos de
                alta calidad y un servicio excepcional a nuestros clientes.
                Nuestros valores de integridad, innovación y excelencia
                operativa guían todas nuestras acciones.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 lg:py-32 bg-neutral dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-base-100 sm:text-5xl md:text-6xl text-center">
            Nuestra Experiencia
          </h2>
          <p className="mt-8 text-lg leading-8 text-base-200 text-center max-w-2xl mx-auto">
            Sistemas H G C es una empresa líder en la fabricación y
            comercialización de piezas automotrices. Con más de dos décadas de
            experiencia en el sector, hemos desarrollado un profundo
            conocimiento de las necesidades de nuestros clientes y una capacidad
            probada para entregar soluciones a la medida.
          </p>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 lg:gap-20">
            <div className="flex justify-center">
              <img
                alt="Fiat"
                className="h-14 w-auto"
                height={60}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "120/60",
                  objectFit: "cover",
                }}
                width={120}
              />
            </div>
            <div className="flex justify-center">
              <img
                alt="Renault"
                className="h-14 w-auto"
                height={60}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "120/60",
                  objectFit: "cover",
                }}
                width={120}
              />
            </div>
            <div className="flex justify-center">
              <img
                alt="Logo"
                className="h-14 w-auto"
                height={60}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "120/60",
                  objectFit: "cover",
                }}
                width={120}
              />
            </div>
            <div className="flex justify-center">
              <img
                alt="Logo"
                className="h-14 w-auto"
                height={60}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "120/60",
                  objectFit: "cover",
                }}
                width={120}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl text-center">
            Nuestro Equipo
          </h2>
          <p className="mt-8 text-lg leading-8 text-gray-600 text-center max-w-2xl mx-auto">
            Nuestro equipo está compuesto por expertos en la industria
            automotriz, comprometidos con brindar soluciones innovadoras y un
            servicio excepcional a nuestros clientes.
          </p>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-20">
            <div className="flex flex-col items-center">
              <img
                alt="John Doe"
                className="rounded-full w-40 h-40 object-cover"
                height={160}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "160/160",
                  objectFit: "cover",
                }}
                width={160}
              />
              <h3 className="mt-6 text-2xl font-bold text-primary">John Doe</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                CEO y Fundador
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                alt="Jane Smith"
                className="rounded-full w-40 h-40 object-cover"
                height={160}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "160/160",
                  objectFit: "cover",
                }}
                width={160}
              />
              <h3 className="mt-6 text-2xl font-bold text-primary">
                Jane Smith
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Gerente de Producción
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                alt="Bob Johnson"
                className="rounded-full w-40 h-40 object-cover"
                height={160}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "160/160",
                  objectFit: "cover",
                }}
                width={160}
              />
              <h3 className="mt-6 text-2xl font-bold text-primary">
                Bob Johnson
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Director de Ventas
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                alt="Sarah Lee"
                className="rounded-full w-40 h-40 object-cover"
                height={160}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "160/160",
                  objectFit: "cover",
                }}
                width={160}
              />
              <h3 className="mt-6 text-2xl font-bold text-primary">
                Sarah Lee
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Gerente de Calidad
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
