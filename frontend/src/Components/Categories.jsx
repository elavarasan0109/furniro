export default function Categories() {
  const items = [
    {
      name: "Dining",
      img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=600&q=80",
    },
    {
      name: "Living",
      img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
    },
    {
      name: "Bedroom",
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
    },
    {
      name: "Kitchen",
      img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    },
    {
      name: "Office",
      img: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=600&q=80",
    },
    {
      name: "Outdoor",
      img: "https://images.unsplash.com/photo-1567016432779-094069958ad5?w=600&q=80",
    },
    {
      name: "Kids",
      img: "https://images.unsplash.com/photo-1537726235470-8504e3bdb285?w=600&q=80",
    },
    {
      name: "Bathroom",
      img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80",
    },
    {
      name: "Entryway",
      img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
    },
    {
      name: "Home Office",
      img: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=600&q=80",
    },
    {
      name: "Bar Stools",
      img: "https://images.unsplash.com/photo-1503602642458-232111445657?w=600&q=80",
    },
    {
      name: "Accent Chairs",
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    },
    {
      name: "Storage",
      img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80",
    },
  ];

  return (
    <div className="py-16 text-center">
      <h2 className="text-2xl font-semibold">Browse The Range</h2>
      <p className="text-gray-500 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-10 px-10">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col">
            <img
              src={item.img}
              alt={item.name}
              className="rounded-lg h-[250px] w-full object-cover hover:opacity-80 transition-opacity"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&q=80";
              }}
            />
            <p className="mt-3 font-medium text-sm">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}