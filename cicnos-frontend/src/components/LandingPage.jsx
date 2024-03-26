import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Publicidad",
    href: "publicidad",
    description: "",
    imageUrl:
      "https://cdn.pixabay.com/photo/2014/07/05/08/15/shelf-384558_1280.jpg",
    date: "",
    datetime: "",
    author: {
      name: "",
      imageUrl: "",
    },
  },
  {
    id: 2,
    title: "Decoración",
    href: "#",
    description: "",
    imageUrl:
      "https://cdn.pixabay.com/photo/2019/12/19/09/07/deco-4705709_1280.jpg",
    date: "",
    datetime: "",
    author: {
      name: "",
      imageUrl: "",
    },
  },
  {
    id: 3,
    title: "Moda",
    href: "#",
    description: "",
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_1280.jpg",
    date: "",
    datetime: "",
    author: {
      name: "",
      imageUrl: "",
    },
  },
];

export default function LandingPage() {
  return (
    <div className="bg-white  bg-opacity-0 relative z-10 pt-210 pb-30">
      <h2 className="subtitle pb-14 pt-6 z-20">
        Tus diseños impresos en tela pueden estar en...
      </h2>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="items-center justify-center mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex justify-center">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <p className="title">{post.title}</p>
                  </div>

                  <Link
                    to={post.href}
                    className="flip-card-back-link flip-card-back"
                  >
                    <img src={post.imageUrl} alt="${post.title}" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <h2 className="quote pb-8 animate-fade-up">
        Todo lo que una persona puede imaginar, otras pueden hacerlo realidad.
        <br />
        -Julio Verne
      </h2>
    </div>
  );
}
