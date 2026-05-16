export default function Footer() {
  return (
    <div className="bg-gray-100 px-10 py-12 mt-20">
      
      {/* Top Section */}
      <div className="grid md:grid-cols-4 gap-10">
        
        {/* Logo + Address */}
        <div>
          <h1 className="text-xl font-bold mb-4" style={{ color: "#B88E2F" }}>
            Furniro
          </h1>
          <p className="text-gray-500 text-sm leading-6">
            46 Giri Road, Sathyamurthy Nagar<br />
            Tnagar, Chennai<br />
            TN 600017, India
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Links</h2>
          <ul className="space-y-3 text-gray-700">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h2 className="text-xl font-bold mb-4">Help</h2>
          <ul className="space-y-3 text-gray-700">
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-bold mb-4">News Letter</h2>

          <div className="flex items-center border-b border-gray-400">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="bg-transparent outline-none py-2 text-sm w-full"
            />
            <button className="text-sm font-semibold">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t mt-10 pt-6 text-sm text-gray-500">
        2026 furniro. All rights reserved
      </div>
    </div>
  );
}