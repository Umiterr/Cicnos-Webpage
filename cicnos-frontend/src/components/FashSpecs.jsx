const features = [
  {
    name: "Impresión de imagen",
    description: "Imprimimos el diseño en tu tela preferida",
  },
  {
    name: "Impresión por patrón",
    description: "Tu diseño en tu patrón",
  },
  {
    name: "Mascadas",
    description: "30 cm x 1 m 50 cm x 50 cm y 80 cm x 80 cm",
  },
  {
    name: "Playeras",
    description: "Impresión de 45 cm x 30 cm",
  },
  {
    name: "Mandiles",
    description: "Impresion de logotipo o full print",
  },
  {
    name: "Detalles para camisas",
    description: "Impresion para bolsa, cuello, puños y/o area de botones",
  },
];

export default function FashSpecs() {
  return (
    <div className="bg-white bg-opacity-75 z-20 rounded-lg relative">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div>
            <div className="border-b border-gray-200 pb-10">
              <h2 className="font-medium text-gray-500"></h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Diseña tu moda
              </p>
            </div>

            <dl className="mt-10 space-y-10">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt className="text-sm font-medium text-gray-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-3 text-sm text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-feature-09-main-detail.jpg"
                alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-09-detail-01.jpg"
                  alt="Detail of temperature setting button on kettle bass with digital degree readout."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-09-detail-02.jpg"
                  alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
