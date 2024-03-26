import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, Switch } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import {
  BellIcon,
  CreditCardIcon,
  CubeIcon,
  FingerPrintIcon,
  UserCircleIcon,
  UsersIcon,
  XMarkIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import api from "../utils/api";

const navigation = [
  { name: "Inicio", to: "/" },
  { name: "Tienda", to: "/tienda" },
  { name: "Clients", to: "#" },
  { name: "Expenses", to: "#" },
];
const secondaryNavigation = [
  { name: "General", href: "#", icon: UserCircleIcon, current: true },
  { name: "Security", href: "#", icon: FingerPrintIcon, current: false },
  { name: "Notifications", href: "#", icon: BellIcon, current: false },
  { name: "Plan", href: "#", icon: CubeIcon, current: false },
  { name: "Billing", href: "#", icon: CreditCardIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Profile({ user }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] =
    useState(true);
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    api.setUserInfo({ name, about });
    console.log(name, about);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAboutChange = (e) => {
    setAbout(e.target.value);
  };

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 flex h-16 border-b border-gray-900/10">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex flex-1 items-center gap-x-6">
            <button
              type="button"
              className="-m-3 p-3 md:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-5 w-5 text-gray-900" aria-hidden="true" />
            </button>
            <Link to="/">
              <img className="h-8 w-auto" src="logo.svg" alt="Cicnos" />{" "}
            </Link>
          </div>
          <nav className="hidden md:flex md:gap-x-11 md:text-sm md:font-semibold md:leading-6 md:text-gray-700">
            {navigation.map((item, itemIdx) => (
              <Link key={itemIdx} to={item.to}>
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex flex-1 items-center justify-end gap-x-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your profile</span>
              <img
                className="h-8 w-8 rounded-full bg-gray-800"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </a>
          </div>
        </div>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-4 pb-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10">
            <div className="-ml-0.5 flex h-16 items-center gap-x-6">
              <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="-ml-0.5">
                <a href="#" className="-m-1.5 block p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="mt-2 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="mx-auto max-w-7xl pt-16 lg:flex lg:gap-x-16 lg:px-8 relative z-20">
        <h1 className="sr-only">General Settings</h1>

        <aside className="flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-20">
          <nav className="flex-none px-4 sm:px-6 lg:px-0">
            <ul
              role="list"
              className="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col"
            >
              {secondaryNavigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className={classNames(
                      item.current
                        ? "bg-gray-50 text-orange-400"
                        : "text-gray-700 hover:text-orange-400 hover:bg-gray-50",
                      "group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-orange-400"
                          : "text-gray-400 group-hover:text-orange-400",
                        "h-6 w-6 shrink-0"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
              <a
                className="text-gray-700 hover:text-red-600 hover:underline hover:bg-gray-50 group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold"
                href="/"
                onClick={() => localStorage.removeItem("jwt")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="text-red-400 group-hover:text-red-600 h-6 w-6 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                  ></path>
                </svg>
                Cerrar sesión
              </a>
            </ul>
          </nav>
        </aside>

        <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
          <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
            <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Profile
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-500">
                This information will be displayed publicly so be careful what
                you share.
              </p>
              <form>
                <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                  <div className="pt-6 sm:flex">
                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                      Nombre
                    </dt>
                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                      <div className="text-gray-900">
                        <input
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                          type="text"
                          id="name"
                          name="name"
                          placeholder={user.data.name}
                          value={name}
                          onChange={handleNameChange}
                        ></input>
                      </div>
                      <button
                        type="button"
                        className="font-semibold text-orange-400 hover:text-orange-500"
                        onClick={handleSubmit}
                      >
                        Guardar
                      </button>
                    </dd>
                  </div>
                  <div className="pt-6 sm:flex">
                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                      Descripión
                    </dt>
                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                      <div className="text-gray-900">
                        <input
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                          type="text"
                          id="about"
                          name="about"
                          placeholder={user.data.about}
                          value={about}
                          onChange={handleAboutChange}
                        ></input>
                      </div>
                    </dd>
                  </div>
                  <div className="pt-6 sm:flex">
                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                      Email
                    </dt>
                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                      <div className="text-gray-900">{user.data.email}</div>
                    </dd>
                  </div>
                </dl>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
