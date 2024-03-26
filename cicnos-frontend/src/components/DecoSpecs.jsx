const features = [
  {
    name: "Cuadros",
    description:
      "15 cm x 15 cm 40 cm x 30 cm 50 cm x 50 cm 80 cm x 70 cm 1 m x 1 m 1.50 m c 1 m y 2 m x 1 m",
  },
  {
    name: "Almohadas",
    description: "30 cm x 20 cm 40 cm x 30 cm 50ncm x 50 cm y fundas para cama",
  },
  { name: "Mantas decorativas", description: "Tamaño estandar, 1.40 m x 1 m" },
  {
    name: "Sobrecamas",
    description: "para camas single, queen y king size Caminos de cama",
  },
  {
    name: "Tapiz para muebles",
    description: "Bancos, sillones, sillas de oficina y mucho más",
  },
  {
    name: "Manteles y cortinas",
    description: "Divertidos manteles oara fiestas y originales cortinas",
  },
  {
    name: "Bodas",
    description: "Camino de mesa, servilleta, cubresilla, recuerdos de boda",
  },
];

export default function DecoSpecs() {
  return (
    <div className="bg-white bg-opacity-75 relative z-20 rounded-xl">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Decoración
          </h2>
          <p className="mt-4 text-gray-500"></p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}
