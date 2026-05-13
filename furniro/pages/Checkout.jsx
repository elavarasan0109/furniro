import React from "react";

const CheckoutPage = () => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#B88E2F]">Furniro</h1>

          <nav className="hidden md:flex gap-10 text-sm font-medium">
            <a href="/" className="hover:text-[#B88E2F]">
              Home
            </a>
            <a href="/" className="hover:text-[#B88E2F]">
              Shop
            </a>
            <a href="/" className="hover:text-[#B88E2F]">
              About
            </a>
            <a href="/" className="hover:text-[#B88E2F]">
              Contact
            </a>
          </nav>

          <div className="flex gap-5 text-lg">
            <span>👤</span>
            <span>🔍</span>
            <span>❤️</span>
            <span>🛒</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#F5F5F5] py-14 text-center">
        <h2 className="text-4xl font-bold mb-2">Checkout</h2>
        <p className="text-gray-500">Home &gt; Checkout</p>
      </section>

      {/* Checkout Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Billing Details */}
        <div>
          <h3 className="text-3xl font-semibold mb-10">
            Billing details
          </h3>

          <form className="space-y-6">
            {/* First & Last Name */}
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block mb-2 font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#B88E2F]"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#B88E2F]"
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label className="block mb-2 font-medium">
                Company Name (Optional)
              </label>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#B88E2F]"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block mb-2 font-medium">
                Country / Region
              </label>

              <select className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#B88E2F]">
                <option>Sri Lanka</option>
                <option>India</option>
                <option>USA</option>
              </select>
            </div>

            {/* Address */}
            <div>
              <label className="block mb-2 font-medium">
                Street address
              </label>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#B88E2F]"
              />
            </div>

            {/* Town */}
            <div>
              <label className="block mb-2 font-medium">
                Town / City
              </label>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#B88E2F]"
              />
            </div>

            {/* Province */}
            <div>
              <label className="block mb-2 font-medium">
                Province
              </label>

              <select className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#B88E2F]">
                <option>Western Province</option>
                <option>Central Province</option>
              </select>
            </div>

            {/* ZIP */}
            <div>
              <label className="block mb-2 font-medium">
                ZIP code
              </label>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#B88E2F]"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 font-medium">
                Phone
              </label>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#B88E2F]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium">
                Email address
              </label>
              <input
                type="email"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#B88E2F]"
              />
            </div>

            {/* Additional Info */}
            <div>
              <textarea
                placeholder="Additional information"
                rows="4"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#B88E2F]"
              />
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex justify-between border-b pb-4 mb-4">
              <h4 className="font-semibold text-lg">Product</h4>
              <h4 className="font-semibold text-lg">Subtotal</h4>
            </div>

            <div className="flex justify-between mb-3 text-gray-600">
              <p>Asgaard sofa × 1</p>
              <p>Rs. 250,000.00</p>
            </div>

            <div className="flex justify-between mb-3">
              <p>Subtotal</p>
              <p>Rs. 250,000.00</p>
            </div>

            <div className="flex justify-between border-b pb-5 mb-5">
              <p className="font-semibold">Total</p>
              <p className="text-[#B88E2F] text-2xl font-bold">
                Rs. 250,000.00
              </p>
            </div>

            {/* Payment Options */}
            <div className="space-y-4">
              <label className="flex items-start gap-3">
                <input type="radio" name="payment" defaultChecked />
                <div>
                  <p className="font-medium">Direct Bank Transfer</p>
                  <p className="text-sm text-gray-500">
                    Make your payment directly into our bank account.
                  </p>
                </div>
              </label>

              <label className="flex items-center gap-3">
                <input type="radio" name="payment" />
                <p>Cash On Delivery</p>
              </label>
            </div>

            <p className="text-sm text-gray-500 mt-6 leading-6">
              Your personal data will be used to support your
              experience throughout this website.
            </p>

            <button className="mt-8 w-full border border-black py-4 rounded-xl hover:bg-black hover:text-white transition">
              Place order
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#F9F1E7] py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h4 className="font-bold">High Quality</h4>
            <p className="text-sm text-gray-600">
              crafted from top materials
            </p>
          </div>

          <div>
            <h4 className="font-bold">Warranty Protection</h4>
            <p className="text-sm text-gray-600">
              Over 2 years
            </p>
          </div>

          <div>
            <h4 className="font-bold">Free Shipping</h4>
            <p className="text-sm text-gray-600">
              Order over 150 $
            </p>
          </div>

          <div>
            <h4 className="font-bold">24 / 7 Support</h4>
            <p className="text-sm text-gray-600">
              Dedicated support
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-10 border-t">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">Furniro.</h2>
            <p className="text-gray-500 text-sm">
              400 University Drive Suite 200 Coral Gables,
              FL 33134 USA
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-3 text-gray-500">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Help</h4>
            <ul className="space-y-3 text-gray-500">
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>

            <div className="flex border-b">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 outline-none py-2"
              />

              <button className="font-semibold text-sm">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 mt-10">
          2023 Furniro. All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default CheckoutPage;