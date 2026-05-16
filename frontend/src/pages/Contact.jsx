import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaTrophy, FaCheckCircle, FaShippingFast, FaHeadset } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-64 bg-gray-100 flex items-center justify-center">
        {/* We can use a background image if needed, for now a placeholder style or generic bg */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80")' }}
        ></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="text-4xl font-bold mb-2">Contact</div>
          <div className="text-sm">
            <span className="font-semibold">Home</span> &gt; Contact
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Get In Touch With Us</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm">
            For More Information About Our Product & Services. Please Feel Free To Drop Us
            An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info (Left Column) */}
          <div className="flex flex-col gap-8 px-8">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-2xl mt-1" />
              <div>
                <h3 className="font-bold text-xl mb-1">Address</h3>
                <p className="text-gray-600 text-sm">
                  236 5th SE Avenue, New<br />
                  York NY10000, United<br />
                  States
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-2xl mt-1" />
              <div>
                <h3 className="font-bold text-xl mb-1">Phone</h3>
                <p className="text-gray-600 text-sm">
                  Mobile: +(84) 546-6789<br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaClock className="text-2xl mt-1" />
              <div>
                <h3 className="font-bold text-xl mb-1">Working Time</h3>
                <p className="text-gray-600 text-sm">
                  Monday-Friday: 9:00 -<br />
                  22:00<br />
                  Saturday-Sunday: 9:00 -<br />
                  21:00
                </p>
              </div>
            </div>
          </div>

          {/* Form (Right Column) */}
          <div className="px-8">
            <form className="flex flex-col gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Your name</label>
                <input 
                  type="text" 
                  placeholder="Abc" 
                  className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email address</label>
                <input 
                  type="email" 
                  placeholder="Abc@def.com" 
                  className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="This is an optional" 
                  className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea 
                  placeholder="Hi! I'd like to ask about" 
                  rows="4"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-gray-500 resize-none"
                ></textarea>
              </div>

              <div>
                <button 
                  type="button" 
                  className="bg-[#B88E2F] text-white px-12 py-3 rounded-md hover:bg-[#a67c29] transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
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
