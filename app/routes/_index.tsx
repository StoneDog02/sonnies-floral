import type { MetaFunction } from "@remix-run/node";
import { useQuoteRequest } from "~/root";

export const meta: MetaFunction = () => {
  return [
    { title: "Sonnie's Floral - Beautiful Floral Arrangements" },
    {
      name: "description",
      content: "Create beautiful floral arrangements for all occasions",
    },
  ];
};

export default function Index() {
  const { openQuoteModal } = useQuoteRequest();
  console.log("openQuoteModal function in index:", openQuoteModal);

  const handleClick = () => {
    console.log("Quote button clicked in index");
    openQuoteModal();
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Sonnie&apos;s Floral
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Creating beautiful floral arrangements for all occasions
          </p>
          <button
            onClick={handleClick}
            className="inline-block bg-rose-600 text-white px-6 py-3 rounded-md hover:bg-rose-700 transition-colors"
          >
            Request a Quote
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Weddings
            </h2>
            <p className="text-gray-600">
              Make your special day unforgettable with our stunning wedding
              arrangements.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Events</h2>
            <p className="text-gray-600">
              Transform your event space with our custom floral designs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Custom Orders
            </h2>
            <p className="text-gray-600">
              Let us create a unique arrangement tailored to your vision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
