const sofaImg =
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=120&q=80";

const NAV_LINKS = ["Home", "Shop", "About", "Contact"];

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-sm sticky top-0 z-50" style={{ backgroundColor: "rgba(255,255,255,0.95)" }}>
      <div className="flex items-center gap-2">
        <span className="font-bold text-xl tracking-tight" style={{ fontFamily: "'Georgia', serif", color: "#B99128" }}>
          Furniro
        </span>
      </div>
      <ul className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-yellow-700 transition-colors">
              {link}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-5 text-gray-600">
        <button className="hover:text-yellow-700 transition-colors">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
          </svg>
        </button>
        <button className="hover:text-yellow-700 transition-colors">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/>
          </svg>
        </button>
        <button className="hover:text-yellow-700 transition-colors">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
        <button className="hover:text-yellow-700 transition-colors relative">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          <span className="absolute -top-1.5 -right-1.5 bg-yellow-700 text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-bold">1</span>
        </button>
      </div>
    </nav>
  );
}

function HeroBanner() {
  return (
    <div
      className="relative flex flex-col items-center justify-center bg-cover bg-center"
      style={{ height: 280, backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=95')", backgroundSize: "cover", backgroundPosition: "center center" }}
    >
      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(255,255,255,0.72)" }} />
      <div style={{ position: "relative", textAlign: "center" }}>
        <h1 className="text-4xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>Cart</h1>
        <p className="text-sm text-gray-500 mt-1">
          <span className="text-gray-700 font-medium">Home</span>
          <span className="mx-1">›</span>
          <span>Cart</span>
        </p>
      </div>
    </div>
  );
}

function CartTable({ items, onQuantityChange, onRemove }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="grid grid-cols-4 bg-amber-50 px-6 py-3 text-sm font-semibold text-gray-600">
        <span>Product</span>
        <span className="text-center">Price</span>
        <span className="text-center">Quantity</span>
        <span className="text-right">Subtotal</span>
      </div>
      {items.map((item) => (
        <div key={item.id} className="grid grid-cols-4 items-center px-6 py-5 border-t border-gray-100">
          <div className="flex items-center gap-4">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md bg-amber-50" />
            <span className="text-sm text-gray-500">{item.name}</span>
          </div>
          <div className="text-center text-sm text-gray-500">
            Rs. {item.price.toLocaleString()}.00
          </div>
          <div className="flex justify-center">
            <input
              type="number"
              min={1}
              value={item.qty}
              onChange={(e) => onQuantityChange(item.id, parseInt(e.target.value) || 1)}
              className="w-14 border border-gray-300 rounded text-center text-sm py-1.5 focus:outline-none focus:border-yellow-600"
            />
          </div>
          <div className="flex items-center justify-end gap-4">
            <span className="text-sm font-medium text-gray-700">
              Rs. {(item.price * item.qty).toLocaleString()}.00
            </span>
            <button onClick={() => onRemove(item.id)} className="text-yellow-700 hover:text-red-500 transition-colors">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <polyline points="3 6 5 6 21 6"/>
                <path d="M19 6l-1 14H6L5 6"/>
                <path d="M10 11v6M14 11v6"/>
                <path d="M9 6V4h6v2"/>
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function CartTotals({ subtotal, onCheckout, disabled }) {
  return (
    <div className="bg-amber-50 rounded-lg p-7 h-fit">
      <h2 className="text-xl font-bold text-gray-900 text-center mb-6" style={{ fontFamily: "'Georgia', serif" }}>
        Cart Totals
      </h2>
      <div className="space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 font-medium">Subtotal</span>
          <span className="text-gray-400">Rs. {subtotal.toLocaleString()}.00</span>
        </div>
        <div className="flex justify-between text-sm border-t border-amber-200 pt-4">
          <span className="text-gray-700 font-semibold">Total</span>
          <span className="text-yellow-700 font-bold text-lg">Rs. {subtotal.toLocaleString()}.00</span>
        </div>
      </div>
      <button
        disabled={disabled}
        onClick={onCheckout}
        className="mt-8 w-full border-2 border-yellow-700 text-yellow-700 font-semibold py-3 rounded hover:bg-yellow-700 hover:text-white transition-all duration-200 text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Check Out
      </button>
    </div>
  );
}

const FEATURES = [
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path d="M6 9H4.5a2.5 2.5 0 000 5H6"/><path d="M18 9h1.5a2.5 2.5 0 010 5H18"/>
        <path d="M8 9h8"/><path d="M8 15h8"/><path d="M12 3v2M12 19v2"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: "High Quality",
    sub: "crafted from top materials",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: "Warranty Protection",
    sub: "Over 2 years",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    title: "Free Shipping",
    sub: "Order over ₹150",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
      </svg>
    ),
    title: "24 / 7 Support",
    sub: "Dedicated support",
  },
];

function Features() {
  return (
    <div style={{ backgroundColor: "#B99128" }} className="py-10 px-8">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {FEATURES.map((f) => (
          <div key={f.title} className="flex items-center gap-3">
            <div style={{ color: "#fff" }}>{f.icon}</div>
            <div>
              <p style={{ color: "#fff" }} className="font-bold text-sm">{f.title}</p>
              <p style={{ color: "rgba(255,255,255,0.8)" }} className="text-xs">{f.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default function FurniroCart({ items, subtotal, onQuantityChange, onRemove, onCheckout, successMessage }) {
  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <Navbar />
      <HeroBanner />
      {successMessage && (
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 px-6 py-4 text-sm">
            {successMessage}
          </div>
        </div>
      )}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {items.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg">Your cart is empty.</p>
            <p className="mt-3 text-sm">Add items to see them here and continue to checkout.</p>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 min-w-0">
              <CartTable items={items} onQuantityChange={onQuantityChange} onRemove={onRemove} />
            </div>
            <div className="w-full lg:w-72 shrink-0">
              <CartTotals subtotal={subtotal} onCheckout={onCheckout} disabled={items.length === 0} />
            </div>
          </div>
        )}
      </div>
      <Features />
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 px-10 pt-12 pb-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <p className="font-bold text-xl text-gray-900 mb-3" style={{ fontFamily: "'Georgia', serif", color: "#B88E2F" }}>Funiro.</p>
          <p className="text-xs text-gray-500 font-medium leading-relaxed">
            400 University Drive Suite 200 Coral Gables,<br />FL 33134 USA
          </p>
        </div>
        <div>
          <p className="text-xs font-bold text-gray-900 mb-4 tracking-widest uppercase">Links</p>
          {["Home", "Shop", "About", "Contact"].map((l) => (
            <a key={l} href="#" className="block text-sm text-gray-600 font-medium hover:text-yellow-700 mb-2 transition-colors">{l}</a>
          ))}
        </div>
        <div>
          <p className="text-xs font-bold text-gray-900 mb-4 tracking-widest uppercase">Help</p>
          {["Payment Options", "Returns", "Privacy Policies"].map((l) => (
            <a key={l} href="#" className="block text-sm text-gray-600 font-medium hover:text-yellow-700 mb-2 transition-colors">{l}</a>
          ))}
        </div>
        <div>
          <p className="text-xs font-bold text-gray-900 mb-4 tracking-widest uppercase">Newsletter</p>
          <div className="flex items-center border-b border-gray-400 pb-1 gap-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="text-xs text-gray-600 font-medium flex-1 outline-none bg-transparent placeholder-gray-400"
            />
            <button className="text-xs font-bold text-gray-700 hover:text-yellow-700 transition-colors tracking-wider uppercase">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 pt-4">
        <p className="text-xs text-gray-400">2023 furino. All rights reverved</p>
      </div>
    </footer>
  );
} 