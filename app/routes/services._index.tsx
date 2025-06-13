import { useQuoteRequest } from "../root";
import { useEffect } from "react";

export default function ServicesIndex() {
  const { openQuoteModal } = useQuoteRequest();

  useEffect(() => {
    console.log("Services page mounted");
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            We offer a wide range of floral services to meet your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Weddings
            </h2>
            <p className="text-gray-600 mb-4">
              From intimate ceremonies to grand celebrations, we create stunning
              floral designs that perfectly complement your special day.
            </p>
            <ul className="text-gray-600 mb-4 list-disc list-inside">
              <li>Bridal bouquets</li>
              <li>Ceremony decorations</li>
              <li>Reception centerpieces</li>
              <li>Arch and aisle designs</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Corporate Events
            </h2>
            <p className="text-gray-600 mb-4">
              Elevate your corporate events with sophisticated floral
              arrangements that make a lasting impression.
            </p>
            <ul className="text-gray-600 mb-4 list-disc list-inside">
              <li>Conference decorations</li>
              <li>Gala centerpieces</li>
              <li>Office arrangements</li>
              <li>Event staging</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Special Occasions
            </h2>
            <p className="text-gray-600 mb-4">
              Celebrate life&apos;s special moments with beautiful custom floral
              arrangements.
            </p>
            <ul className="text-gray-600 mb-4 list-disc list-inside">
              <li>Birthday celebrations</li>
              <li>Anniversary arrangements</li>
              <li>Holiday decorations</li>
              <li>Sympathy flowers</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => {
              console.log("Button clicked");
              openQuoteModal();
            }}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
          >
            Request a Quote
          </button>
        </div>
      </div>
    </div>
  );
}
