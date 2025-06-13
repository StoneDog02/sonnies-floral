import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
  useLocation,
} from "@remix-run/react";
import styles from "./tailwind.css";
import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import QuoteRequestModal from "./components/QuoteRequestModal";
import { ClientOnly } from "remix-utils";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

interface QuoteRequestContextType {
  openQuoteModal: () => void;
  closeQuoteModal: () => void;
  isQuoteModalOpen: boolean;
}

export const QuoteRequestContext = createContext<QuoteRequestContextType>({
  openQuoteModal: () => {},
  closeQuoteModal: () => {},
  isQuoteModalOpen: false,
});

export function useQuoteRequest() {
  return useContext(QuoteRequestContext);
}

function ClientModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    console.log("Client modal opening...");
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    console.log("Client modal closing...");
    setIsOpen(false);
  }, []);

  useEffect(() => {
    console.log("Client modal state:", isOpen);
  }, [isOpen]);

  return (
    <QuoteRequestContext.Provider
      value={{
        openQuoteModal: openModal,
        closeQuoteModal: closeModal,
        isQuoteModalOpen: isOpen,
      }}
    >
      <Outlet />
      <QuoteRequestModal isOpen={isOpen} onClose={closeModal} />
    </QuoteRequestContext.Provider>
  );
}

export default function App() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <html lang="en" className="h-full bg-white">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-white">
        <div className="min-h-screen bg-white">
          <header className="bg-white shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <Link
                      to="/"
                      className="text-2xl font-bold text-rose-600 hover:text-rose-700 transition-colors"
                    >
                      Sonnie&apos;s Floral
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <Link
                      to="/"
                      className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                        isActive("/")
                          ? "border-b-2 border-rose-500 text-gray-900"
                          : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      }`}
                    >
                      Home
                    </Link>
                    <Link
                      to="/services"
                      className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                        location.pathname.startsWith("/services")
                          ? "border-b-2 border-rose-500 text-gray-900"
                          : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      }`}
                    >
                      Services
                    </Link>
                    <Link
                      to="/gallery"
                      className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                        isActive("/gallery")
                          ? "border-b-2 border-rose-500 text-gray-900"
                          : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      }`}
                    >
                      Gallery
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <ClientOnly fallback={<div>Loading...</div>}>
            {() => <ClientModal />}
          </ClientOnly>
          <footer className="bg-white mt-auto">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-gray-500">
                © 2024 Sonnie&apos;s Floral. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
