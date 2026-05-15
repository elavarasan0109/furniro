import { useState } from "react";

const CheckoutPage = ({ items = [{ id: 1, name: "Asgaard sofa", qty: 1, price: 250000 }], subtotal = 250000, onBackToCart = () => {}, onPlaceOrder = () => {} }) => {
  const [billing, setBilling] = useState({
    firstName: "", lastName: "", company: "", country: "Sri Lanka",
    address: "", city: "", province: "Western Province",
    zip: "", phone: "", email: "", note: "", payment: "bank",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBilling((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => onPlaceOrder(billing);

  return (
    <div style={{ backgroundColor: "#FAF7F2", minHeight: "100vh", fontFamily: "Georgia, serif" }}>

      {/* Header */}
      <header style={{ backgroundColor: "#fff", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h1 style={{ fontSize: 26, fontWeight: "bold", color: "#B88E2F", margin: 0 }}>Furniro</h1>
          <nav style={{ display: "flex", gap: 36, fontSize: 15, fontWeight: 500 }}>
            {["Home", "Shop", "About", "Contact"].map(item => (
              <a key={item} href="#" style={{ textDecoration: "none", color: "#222" }}
                onMouseEnter={e => e.target.style.color = "#B88E2F"}
                onMouseLeave={e => e.target.style.color = "#222"}>{item}</a>
            ))}
          </nav>
          <div style={{ display: "flex", gap: 20, color: "#222" }}>
            <FiUser size={20} style={{ cursor: "pointer" }} />
            <FiSearch size={20} style={{ cursor: "pointer" }} />
            <FiHeart size={20} style={{ cursor: "pointer" }} />
            <FiShoppingCart size={20} style={{ cursor: "pointer" }} />
          </div>
        </div>
      </header>

      {/* Hero - NO icon, just title + breadcrumb */}
      <section style={{
        position: "relative",
        height: 280,
        backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=95')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(255,255,255,0.72)" }} />
        <div style={{ position: "relative", textAlign: "center" }}>
          <h2 style={{ fontSize: 38, fontWeight: "bold", margin: "0 0 8px", color: "#111" }}>Checkout</h2>
          <p style={{ margin: 0, fontSize: 14, color: "#777" }}>
            <span style={{ color: "#111", fontWeight: 500 }}>Home</span>
            <span style={{ margin: "0 8px" }}>&gt;</span>
            <span>Checkout</span>
          </p>
        </div>
      </section>

      {/* Checkout Body */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>

        {/* Billing */}
        <div>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 36, gap: 16 }}>
            <div>
              <h3 style={{ fontSize: 28, fontWeight: 600, margin: "0 0 6px" }}>Billing details</h3>
              <p style={{ fontSize: 13, color: "#888", margin: 0 }}>Complete your order information below.</p>
            </div>
            <button onClick={onBackToCart} style={{ border: "1px solid #ccc", borderRadius: 999, padding: "8px 18px", fontSize: 13, fontWeight: 500, color: "#444", background: "#fff", cursor: "pointer", whiteSpace: "nowrap" }}>
              Back to cart
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <Field label="First Name"  name="firstName" value={billing.firstName} onChange={handleChange} required />
              <Field label="Last Name"   name="lastName"  value={billing.lastName}  onChange={handleChange} required />
            </div>
            <Field label="Company Name (Optional)" name="company"  value={billing.company}  onChange={handleChange} />
            <SelectField label="Country / Region"  name="country"  value={billing.country}  onChange={handleChange} options={["Sri Lanka","India","USA"]} />
            <Field label="Street address" name="address"  value={billing.address}  onChange={handleChange} required />
            <Field label="Town / City"    name="city"     value={billing.city}     onChange={handleChange} required />
            <SelectField label="Province" name="province" value={billing.province} onChange={handleChange} options={["Western Province","Central Province"]} />
            <Field label="ZIP code"       name="zip"      value={billing.zip}      onChange={handleChange} required />
            <Field label="Phone"          name="phone"    value={billing.phone}    onChange={handleChange} required />
            <Field label="Email address"  name="email"    type="email" value={billing.email} onChange={handleChange} required />
            <textarea
              name="note" value={billing.note} onChange={handleChange}
              placeholder="Additional information" rows={4}
              style={{ width: "100%", border: "1px solid #ddd", borderRadius: 8, padding: "12px 16px", outline: "none", fontSize: 14, fontFamily: "inherit", resize: "vertical", boxSizing: "border-box" }}
            />
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div style={{ backgroundColor: "#fff", padding: 36, borderRadius: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #eee", paddingBottom: 16, marginBottom: 16 }}>
              <h4 style={{ fontWeight: 600, fontSize: 18, margin: 0 }}>Order summary</h4>
              <span style={{ fontSize: 13, color: "#888" }}>{items.length} item(s)</span>
            </div>

            {items.length === 0 ? (
              <p style={{ fontSize: 13, color: "#888" }}>Your cart is empty.</p>
            ) : (
              <>
                {items.map(item => (
                  <div key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, fontSize: 14, color: "#555" }}>
                    <span>{item.name} × {item.qty}</span>
                    <span>Rs. {(item.price * item.qty).toLocaleString()}.00</span>
                  </div>
                ))}

                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, fontSize: 14 }}>
                  <span>Subtotal</span>
                  <span>Rs. {subtotal.toLocaleString()}.00</span>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #eee", paddingBottom: 20, marginBottom: 20 }}>
                  <span style={{ fontWeight: 600 }}>Total</span>
                  <span style={{ color: "#B88E2F", fontSize: 22, fontWeight: "bold" }}>Rs. {subtotal.toLocaleString()}.00</span>
                </div>

                {[
                  { value: "bank", label: "Direct Bank Transfer", desc: "Make your payment directly into our bank account." },
                  { value: "cod",  label: "Cash On Delivery",     desc: "Pay when your order arrives." },
                ].map(opt => (
                  <label key={opt.value} style={{ display: "flex", alignItems: "flex-start", gap: 12, cursor: "pointer", marginBottom: 16 }}>
                    <input type="radio" name="payment" value={opt.value} checked={billing.payment === opt.value} onChange={handleChange} style={{ marginTop: 3, accentColor: "#B88E2F" }} />
                    <div>
                      <p style={{ fontWeight: 500, margin: "0 0 2px", fontSize: 14 }}>{opt.label}</p>
                      <p style={{ fontSize: 12, color: "#888", margin: 0 }}>{opt.desc}</p>
                    </div>
                  </label>
                ))}

                <p style={{ fontSize: 12, color: "#888", marginTop: 16, lineHeight: 1.7 }}>
                  Your personal data will be used to support your experience throughout this website.
                </p>

                <button
                  onClick={handleSubmit}
                  style={{ marginTop: 28, width: "100%", border: "1.5px solid #111", borderRadius: 12, padding: "16px 0", fontSize: 15, fontWeight: 500, background: "#fff", cursor: "pointer", fontFamily: "inherit" }}
                  onMouseEnter={e => { e.target.style.background = "#111"; e.target.style.color = "#fff"; }}
                  onMouseLeave={e => { e.target.style.background = "#fff"; e.target.style.color = "#111"; }}
                >
                  Place order
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#F9F1E7] py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h4 className="font-bold">High Quality</h4>
            <p className="text-sm text-gray-600">crafted from top materials</p>
          </div>
          <div>
            <h4 className="font-bold">Warranty Protection</h4>
            <p className="text-sm text-gray-600">Over 2 years</p>
          </div>
          <div>
            <h4 className="font-bold">Free Shipping</h4>
            <p className="text-sm text-gray-600">Order over ₹150</p>
          </div>
          <div>
            <h4 className="font-bold">24 / 7 Support</h4>
            <p className="text-sm text-gray-600">Dedicated support</p>
          </div>
        </div>
        <div>
          <h4 style={{ fontWeight: "bold", margin: "0 0 4px", fontSize: 15, color: "#fff" }}>{f.title}</h4>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", margin: 0 }}>{f.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#fff", padding: "40px 24px 20px", borderTop: "1px solid #eee" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 40 }}>
          <div>
            <h2 style={{ fontSize: 22, fontWeight: "bold", marginBottom: 16 }}>Furniro.</h2>
            <p style={{ fontSize: 13, color: "#888", lineHeight: 1.7 }}>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
          </div>
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: 16, fontSize: 14 }}>Links</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {["Home","Shop","About","Contact"].map(l => <li key={l} style={{ fontSize: 13, color: "#888", cursor: "pointer" }}>{l}</li>)}
            </ul>
          </div>
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: 16, fontSize: 14 }}>Help</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {["Payment Options","Returns","Privacy Policies"].map(l => <li key={l} style={{ fontSize: 13, color: "#888", cursor: "pointer" }}>{l}</li>)}
            </ul>
          </div>
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: 16, fontSize: 14 }}>Newsletter</h4>
            <div style={{ display: "flex", borderBottom: "1px solid #ccc", paddingBottom: 8 }}>
              <input type="email" placeholder="Enter Your Email Address" style={{ flex: 1, outline: "none", border: "none", fontSize: 13, fontFamily: "inherit" }} />
              <button style={{ fontWeight: 600, fontSize: 12, background: "none", border: "none", cursor: "pointer" }}>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", fontSize: 12, color: "#aaa", marginTop: 36 }}>2023 Furniro. All rights reserved</div>
      </footer>

    </div>
  );
};

// Helpers
const Field = ({ label, name, value, onChange, type = "text", required }) => (
  <div>
    <label style={{ display: "block", marginBottom: 8, fontWeight: 500, fontSize: 14 }}>{label}</label>
    <input
      name={name} value={value} onChange={onChange} type={type} required={required}
      style={{ width: "100%", border: "1px solid #ddd", borderRadius: 8, padding: "12px 16px", outline: "none", fontSize: 14, fontFamily: "inherit", boxSizing: "border-box" }}
      onFocus={e => e.target.style.borderColor = "#B88E2F"}
      onBlur={e => e.target.style.borderColor = "#ddd"}
    />
  </div>
);

const SelectField = ({ label, name, value, onChange, options }) => (
  <div>
    <label style={{ display: "block", marginBottom: 8, fontWeight: 500, fontSize: 14 }}>{label}</label>
    <select
      name={name} value={value} onChange={onChange}
      style={{ width: "100%", border: "1px solid #ddd", borderRadius: 8, padding: "12px 16px", outline: "none", fontSize: 14, fontFamily: "inherit", backgroundColor: "#fff" }}
    >
      {options.map(o => <option key={o}>{o}</option>)}
    </select>
  </div>
);

export default CheckoutPage;