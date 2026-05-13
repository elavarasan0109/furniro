export default function Categories() {
  const items = [
    {
      name: "Dining",
      img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
    },
    {
      name: "Living",
      img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    },
    {
      name: "Bedroom",
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    {
      name: "Kitchen",
      img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136",
    },
    {
      name: "Office",
      img: "https://images.unsplash.com/photo-1593062096033-9a26b09da705",
    },
    {
      name: "Outdoor",
      img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14",
    },
    {
      name: "Kids",
      img: "https://images.unsplash.com/photo-1580274455191-1c62238fa333",
    },
    {
      name: "Bathroom",
      img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14",
    },
    {
      name: "Entryway",
      img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b",
    },
    {
      name: "Home Office",
      img: "https://images.unsplash.com/photo-1593062096033-9a26b09da705",
    },
    {
      name: "Bar Stools",
      img: "https://images.unsplash.com/photo-1533090161392-a8255ba84d41",
    },
    {
      name: "Accent Chairs",
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
    },
    {
      name: "Storage",
      img: "https://images.unsplash.com/photo-1595231712005-b0d89e3b67b7",
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
            />
            <p className="mt-3 font-medium text-sm">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}