const features = [
  {
    name: "Banderas",
    description:
      "Banderas tipo vela, de 2.5 mts y 3 mts Banderas tipo banner y estandartes",
  },
  {
    name: "Pared gráfica",
    description:
      "Pared gráfica de 2.5 mts x 2.5 mts Pared gráfica de 2.5 mts x 3 mts",
  },
  {
    name: "Artículos corporativos",
    description:
      "Manteles con logotipo, caminos de mesa con logotipo Bandas de decán y cintas de inaguración",
  },
  {
    name: "Artículos promocionales",
    description:
      "Mouse pads, cintas para gafetes, portavasos, tazas y almohadas",
  },
  {
    name: "Decoración para oficinas",
    description:
      "Cuadros decorativos o institucionales Tapiz para muebles con imagen corporativa",
  },
];

export default function AdSpecs() {
  return (
    <div className="relative z-20 py-32 bg-gradient-to-t to-white from-transparent rounded-[1.5rem] mt-20">
      <div aria-hidden="true" className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-white" />
      </div>

      <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Artículos publicitarios
          </h2>
          <p className="mt-4 text-gray-500"></p>
        </div>

        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
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
    </div>
  );
}
