import { Form, useSearchParams } from "@remix-run/react";

const categories = [
  { id: "all", name: "All" },
  { id: "weddings", name: "Weddings" },
  { id: "corporate", name: "Corporate" },
  { id: "special-events", name: "Special Events" },
  { id: "custom", name: "Custom" },
];

const galleryItems = [
  {
    id: 1,
    category: "weddings",
    imageUrl:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800&auto=format",
    title: "Wedding Centerpiece",
  },
  {
    id: 2,
    category: "weddings",
    imageUrl:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format",
    title: "Bridal Bouquet",
  },
  {
    id: 3,
    category: "corporate",
    imageUrl:
      "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&auto=format",
    title: "Corporate Event Display",
  },
  {
    id: 4,
    category: "special-events",
    imageUrl:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=800&auto=format",
    title: "Birthday Celebration",
  },
  {
    id: 5,
    category: "custom",
    imageUrl:
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&auto=format",
    title: "Custom Arrangement",
  },
  {
    id: 6,
    category: "weddings",
    imageUrl:
      "https://images.unsplash.com/photo-1509985903762-cf53047b2c67?w=800&auto=format",
    title: "Wedding Arch",
  },
  {
    id: 7,
    category: "corporate",
    imageUrl:
      "https://images.unsplash.com/photo-1558732455-141461689637?w=800&auto=format",
    title: "Office Display",
  },
  {
    id: 8,
    category: "special-events",
    imageUrl:
      "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&auto=format",
    title: "Anniversary Setup",
  },
  {
    id: 9,
    category: "custom",
    imageUrl:
      "https://images.unsplash.com/photo-1533616688419-b7a585564566?w=800&auto=format",
    title: "Seasonal Display",
  },
];

export default function Gallery() {
  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";
  console.log("Active category:", activeCategory);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);
  console.log("Filtered items:", filteredItems);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h1>
          <p className="text-xl text-gray-600">
            Browse through our portfolio of floral arrangements
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Form key={category.id} method="get" className="contents">
              <input type="hidden" name="category" value={category.id} />
              <button
                type="submit"
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer
                  ${
                    activeCategory === category.id
                      ? "bg-rose-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {category.name}
              </button>
            </Form>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-medium">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
