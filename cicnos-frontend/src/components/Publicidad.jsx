import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Publicidad() {
  return (
    <div className="rounded-[1.5rem] relative z-20">
      <div className="relative isolate overflow-hidden ">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Tu imágen destacará como nunca
                </h1>
                <p className="mt-6 text-2xl leading-8 text-gray-600">
                  Contamos con una amplia gama de recursos publicitarios en tela
                  para tus expos y promociones.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-0 "
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
