import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-gray-100 px-10 py-12 mt-20">
      
      {/* Top Section */}
      <div className="grid md:grid-cols-4 gap-10">
        
        {/* Logo + Address */}
        <div>
          <Link to="/" className="text-xl font-bold mb-4 block hover:text-[#B88E2F] transition-colors">Furniro.</Link>
          <p className="text-gray-500 text-sm leading-6">
            400 University Drive Suite 200 Coral <br />
            Gables, <br />
            FL 33134 USA
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-gray-400 mb-4">Links</h2>
          <ul className="space-y-3 text-gray-700">
            <li><Link to="/" className="hover:text-[#B88E2F] transition-colors">Home</Link></li>
            <li><Link to="/shop" className="hover:text-[#B88E2F] transition-colors">Shop</Link></li>
            <li><Link to="/about" className="hover:text-[#B88E2F] transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-[#B88E2F] transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h2 className="text-gray-400 mb-4">Help</h2>
          <ul className="space-y-3 text-gray-700">
            <li><a href="#" className="hover:text-[#B88E2F] transition-colors">Payment Options</a></li>
            <li><a href="#" className="hover:text-[#B88E2F] transition-colors">Returns</a></li>
            <li><a href="#" className="hover:text-[#B88E2F] transition-colors">Privacy Policies</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-gray-400 mb-4">Newsletter</h2>

          <div className="flex items-center border-b border-gray-400">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="bg-transparent outline-none py-2 text-sm w-full"
            />
            <button className="text-sm font-semibold hover:text-[#B88E2F] transition-colors">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t mt-10 pt-6 text-sm text-gray-500">
        2026 Furniro. All rights reserved
      </div>
    </div>
  );
}