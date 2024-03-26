import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Nomad Pouch",
    href: "#",
    price: "$50",
    availability: "White and Black",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-07-product-01.jpg",
    imageAlt:
      "White fabric pouch with white zipper, black zipper pull, and black elastic loop.",
  },
  {
    id: 2,
    name: "Zip Tote Basket",
    href: "#",
    price: "$140",
    availability: "Washed Black",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-07-product-02.jpg",
    imageAlt:
      "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
  },
  {
    id: 3,
    name: "Medium Stuff Satchel",
    href: "#",
    price: "$220",
    availability: "Blue",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-07-product-03.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

export default function TrendingProducts() {
  return (
    <div className="bg-white relative z-20 rounded-[1.5rem] my-8">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Productos destacados
          </h2>
          <Link
            to="tienda"
            className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block"
          >
            Visita la tienda
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80 group-hover:scale-105 transition-transform duration-500">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                <a href={product.href}>
                  <span className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              <p className="mt-1 text-sm font-medium text-gray-900">
                {product.price}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm md:hidden">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
