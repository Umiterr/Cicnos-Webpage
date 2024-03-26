const features = [
  {
    name: ".",
    description:
      "Tenemos 10 años de experiencia en el área de sublimación y 30 años en diseño gráfico, por lo cual la calidad de  nuestras impresiones es insuperable.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-01.jpg",
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
  },
  {
    name: "",
    description:
      "Nuestra tecnología japonesa hace que la calidad de nuestros impresos sean de alta definición y resistentes al lavado.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg",
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Features() {
  return (
    <div className="z-20 relative justify-center flex ">
      <div className="max-w-2xl px-4 py-20 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mt-4 text-gray-600 text-3xl">
            Nuestro objetivo es ayudarte a plasmar en tela tus propias ideas
            para lograr personalizar un ambiente cómodo y confortable, ya sea en
            casa, negocio u oficina, podrás imprimir la imagen que tu desees en
            banderas, almohadas, cuadros, manteles, tapicería para muebles etc.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {features.map((feature, featureIdx) => (
            <div
              key={feature.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
            >
              <div
                details
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-1"
                    : "lg:col-start-8 xl:col-start-9",
                  "mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4"
                )}
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-2xl text-gray-500">
                  {feature.description}
                </p>
              </div>
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-6 xl:col-start-5"
                    : "lg:col-start-1",
                  "flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8"
                )}
              >
                <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
