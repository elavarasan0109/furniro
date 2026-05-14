import React from 'react';
import { FaUser, FaCalendar, FaTag, FaSearch, FaTrophy, FaCheckCircle, FaShippingFast, FaHeadset } from 'react-icons/fa';

export default function Blog() {
  const posts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80",
      admin: "Admin",
      date: "14 Oct 2022",
      category: "Wood",
      title: "Going all-in with millennial design",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=800&q=80",
      admin: "Admin",
      date: "14 Oct 2022",
      category: "Handmade",
      title: "Exploring new ways of decorating",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      admin: "Admin",
      date: "14 Oct 2022",
      category: "Wood",
      title: "Handmade pieces that took time to make",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
    }
  ];

  const categories = [
    { name: "Crafts", count: 2 },
    { name: "Design", count: 8 },
    { name: "Handmade", count: 7 },
    { name: "Interior", count: 1 },
    { name: "Wood", count: 6 },
  ];

  const recentPosts = [
    { id: 1, title: "Going all-in with millennial design", date: "03 Aug 2022", image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=150&q=80" },
    { id: 2, title: "Exploring new ways of decorating", date: "03 Aug 2022", image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=150&q=80" },
    { id: 3, title: "Handmade pieces that took time to make", date: "03 Aug 2022", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=150&q=80" },
    { id: 4, title: "Modern home in Milan", date: "03 Aug 2022", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=150&q=80" },
    { id: 5, title: "Colorful office redesign", date: "03 Aug 2022", image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=150&q=80" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-64 bg-gray-100 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80")' }}
        ></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="text-4xl font-bold mb-2">Blog</div>
          <div className="text-sm">
            <span className="font-semibold">Home</span> &gt; Blog
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 w-full flex flex-col lg:flex-row gap-12 lg:gap-8">
        
        {/* Posts List (Left) */}
        <div className="flex-1 flex flex-col gap-12 lg:pr-8">
          {posts.map((post) => (
            <div key={post.id} className="flex flex-col">
              <div className="mb-4 rounded-lg overflow-hidden h-96 bg-gray-200">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex items-center gap-6 text-gray-400 text-sm mb-4">
                <div className="flex items-center gap-2">
                  <FaUser />
                  <span>{post.admin}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendar />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaTag />
                  <span>{post.category}</span>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-3">{post.title}</h2>
              <p className="text-gray-500 mb-6 text-sm leading-relaxed text-justify">
                {post.excerpt}
              </p>
              
              <div>
                <a href="#" className="inline-block border-b border-black pb-1 text-sm font-medium hover:text-gray-600">
                  Read more
                </a>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex justify-end lg:justify-center gap-4 mt-8">
            <button className="w-12 h-12 flex items-center justify-center rounded-md bg-[#B88E2F] text-white">1</button>
            <button className="w-12 h-12 flex items-center justify-center rounded-md bg-[#F9F1E7] text-black hover:bg-gray-200">2</button>
            <button className="w-12 h-12 flex items-center justify-center rounded-md bg-[#F9F1E7] text-black hover:bg-gray-200">3</button>
            <button className="px-6 h-12 flex items-center justify-center rounded-md bg-[#F9F1E7] text-black hover:bg-gray-200">Next</button>
          </div>
        </div>

        {/* Sidebar (Right) */}
        <div className="w-full lg:w-[350px] flex flex-col gap-12 lg:pl-8">
          
          {/* Search */}
          <div className="relative">
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded-md py-3 px-4 pr-10 outline-none focus:border-gray-500"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
              <FaSearch />
            </button>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-6">Categories</h3>
            <ul className="flex flex-col gap-4 text-gray-500">
              {categories.map((cat, idx) => (
                <li key={idx} className="flex justify-between items-center hover:text-black cursor-pointer">
                  <span>{cat.name}</span>
                  <span>{cat.count}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-xl font-bold mb-6">Recent Posts</h3>
            <div className="flex flex-col gap-6">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex items-center gap-4">
                  <div className="w-20 h-20 shrink-0 bg-gray-200 rounded-md overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm hover:underline cursor-pointer">{post.title}</h4>
                    <p className="text-xs text-gray-400 mt-1">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Features Bar */}
      <div className="bg-[#FAF3EA] py-16 mt-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <FaTrophy className="text-4xl text-gray-800" />
            <div>
              <h4 className="font-bold text-xl text-gray-800">High Quality</h4>
              <p className="text-gray-500 text-sm">crafted from top materials</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <FaCheckCircle className="text-4xl text-gray-800" />
            <div>
              <h4 className="font-bold text-xl text-gray-800">Warranty Protection</h4>
              <p className="text-gray-500 text-sm">Over 2 years</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaShippingFast className="text-4xl text-gray-800" />
            <div>
              <h4 className="font-bold text-xl text-gray-800">Free Shipping</h4>
              <p className="text-gray-500 text-sm">Order over ₹150</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaHeadset className="text-4xl text-gray-800" />
            <div>
              <h4 className="font-bold text-xl text-gray-800">24 / 7 Support</h4>
              <p className="text-gray-500 text-sm">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
