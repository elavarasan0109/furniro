import { useCart } from '../context/CartContext';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { FaTrophy, FaCheckCircle, FaShippingFast, FaHeadset, FaStar, FaStarHalfAlt, FaChevronDown } from 'react-icons/fa';
import { products } from '../data/products';
import { useState, useEffect } from 'react';



export default function Comparison() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('id');

  // Selected Product 1
  const product1 = products.find(p => p.id === parseInt(productId)) || products[0];
  
  // Selected Product 2 State
  const [product2, setProduct2] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Default product 2 to something related on first load
  useEffect(() => {
    const product1Index = products.findIndex(p => p.id === product1.id);
    setProduct2(products[(product1Index + 1) % products.length]);
  }, [product1.id]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleSelectProduct2 = (product) => {
    setProduct2(product);
    setIsDropdownOpen(false);
  };

  if (!product2) return null;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-64 bg-gray-100 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80")' }}
        ></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="text-4xl font-bold mb-2">Product Comparison</div>
          <div className="text-sm">
            <Link to="/" className="hover:text-[#B88E2F]">Home</Link> &gt; Comparison
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 w-full">
        
        {/* Top Header Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Info */}
          <div className="flex flex-col justify-start pt-4">
            <h3 className="text-2xl font-bold mb-4">Go to Product<br/>page for more<br/>Products</h3>
            <Link to="/shop" className="text-gray-500 font-medium border-b border-gray-500 inline-block w-max pb-1 hover:text-black hover:border-black transition-colors">
              View More
            </Link>
          </div>

          {/* Column 2: Product 1 (Selected) */}
          <div className="flex flex-col">
            <div className="bg-[#F9F1E7] rounded-lg p-4 h-48 mb-4 flex items-center justify-center">
              <img src={product1.image} alt={product1.name} className="max-h-full object-contain mix-blend-multiply" />
            </div>
            <h4 className="text-xl font-bold mb-2">{product1.name}</h4>
            <p className="font-medium mb-2">Rs. {product1.price.toLocaleString()}.00</p>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-bold">4.7</span>
              <div className="flex text-yellow-400 text-xs">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
              </div>
              <div className="w-px h-4 bg-gray-300 mx-1"></div>
              <span className="text-gray-400 text-xs">204 Review</span>
            </div>
          </div>

          {/* Column 3: Product 2 (Selected via Dropdown) */}
          <div className="flex flex-col">
            <div className="bg-[#F9F1E7] rounded-lg p-4 h-48 mb-4 flex items-center justify-center">
              <img src={product2.image} alt={product2.name} className="max-h-full object-contain mix-blend-multiply" />
            </div>
            <h4 className="text-xl font-bold mb-2">{product2.name}</h4>
            <p className="font-medium mb-2">Rs. {product2.price.toLocaleString()}.00</p>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-bold">4.2</span>
              <div className="flex text-yellow-400 text-xs">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
              </div>
              <div className="w-px h-4 bg-gray-300 mx-1"></div>
              <span className="text-gray-400 text-xs">145 Review</span>
            </div>
          </div>

          {/* Column 4: Add Product (Dropdown Selection) */}
          <div className="flex flex-col justify-start pt-4 border-l border-gray-200 pl-8 relative">
            <h4 className="text-2xl font-bold mb-4">Add A Product</h4>
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bg-[#B88E2F] text-white flex items-center justify-between px-4 py-3 w-full max-w-[200px] rounded hover:bg-[#a67c29] transition-colors"
              >
                <span className="text-sm font-semibold truncate mr-2">
                  {isDropdownOpen ? 'Select Product' : 'Choose a Product'}
                </span>
                <FaChevronDown className={`text-xs transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-full max-w-[240px] bg-white border border-gray-200 shadow-xl rounded-lg z-50 py-2 max-h-[300px] overflow-y-auto animate-in fade-in slide-in-from-top-1">
                  {products.filter(p => p.id !== product1.id).map((prod) => (
                    <button
                      key={prod.id}
                      onClick={() => handleSelectProduct2(prod)}
                      className="flex items-center gap-3 w-full px-4 py-3 hover:bg-[#F9F1E7] transition-colors text-left"
                    >
                      <img src={prod.image} alt={prod.name} className="w-10 h-10 object-cover rounded bg-gray-100" />
                      <div className="flex flex-col overflow-hidden">
                        <span className="text-sm font-bold truncate">{prod.name}</span>
                        <span className="text-xs text-gray-500">Rs. {prod.price.toLocaleString()}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Specifications Table */}
        <div className="border-t border-gray-200">
          
          {/* Section: General */}
          <div className="py-8">
            <h4 className="text-xl font-bold mb-6">General</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Labels */}
              <div className="flex flex-col gap-6 text-sm">
                <p>Sales Package</p>
                <p>Model Number</p>
                <p>Secondary Material</p>
                <p>Upholstery Material</p>
                <p>Upholstery Color</p>
              </div>
              {/* Product 1 Specs */}
              <div className="flex flex-col gap-6 text-sm text-gray-700">
                <p>1 sectional {product1.name.toLowerCase()}</p>
                <p>TFCB{product1.id}LI{product1.id}RBL</p>
                <div className="flex items-center gap-2">
                  <span>Solid Wood</span>
                  <div className="w-4 h-4 rounded-full bg-[#8B4513]" title="Solid Wood"></div>
                </div>
                <p>L-shaped</p>
                <div className="flex items-center gap-2">
                  <span>Fabric + Cotton</span>
                  <div className="w-4 h-4 rounded-full bg-[#D2B48C]" title="Fabric + Cotton"></div>
                </div>
                <p>Bright Grey & Lion</p>
              </div>
              {/* Product 2 Specs */}
              <div className="flex flex-col gap-6 text-sm text-gray-700 border-l md:border-l-0 border-gray-200 pl-4 md:pl-0">
                <p>1 {product2.name.toLowerCase()}</p>
                <p>DTUB{product2.id}IGRB{product2.id}</p>
                <div className="flex items-center gap-2">
                  <span>Solid Wood</span>
                  <div className="w-4 h-4 rounded-full bg-[#A0522D]" title="Solid Wood"></div>
                </div>
                <p>L-shaped</p>
                <div className="flex items-center gap-2">
                  <span>Fabric + Cotton</span>
                  <div className="w-4 h-4 rounded-full bg-[#F5F5DC]" title="Fabric + Cotton"></div>
                </div>
                <p>Bright Grey & Lion</p>
              </div>
              <div className="hidden md:block border-l border-gray-200"></div>
            </div>
          </div>

          {/* Section: Product */}
          <div className="py-8">
            <h4 className="text-xl font-bold mb-6">Product</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Labels */}
              <div className="flex flex-col gap-6 text-sm">
                <p>Filling Material</p>
                <p>Finish Type</p>
                <p>Adjustable Headrest</p>
                <p>Maximum Load Capacity</p>
                <p>Origin of Manufacture</p>
              </div>
              {/* Product 1 Specs */}
              <div className="flex flex-col gap-6 text-sm text-gray-700">
                <p>Foam</p>
                <p>Bright Grey & Lion</p>
                <p>No</p>
                <p>280 KG</p>
                <p>India</p>
              </div>
              {/* Product 2 Specs */}
              <div className="flex flex-col gap-6 text-sm text-gray-700 border-l md:border-l-0 border-gray-200 pl-4 md:pl-0">
                <p>Matte</p>
                <p>Bright Grey & Lion</p>
                <p>Yes</p>
                <p>300 KG</p>
                <p>India</p>
              </div>
              <div className="hidden md:block border-l border-gray-200"></div>
            </div>
          </div>

          {/* Section: Dimensions */}
          <div className="py-8">
            <h4 className="text-xl font-bold mb-6">Dimensions</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Labels */}
              <div className="flex flex-col gap-6 text-sm">
                <p>Width</p>
                <p>Height</p>
                <p>Depth</p>
                <p>Weight</p>
                <p>Seat Height</p>
                <p>Leg Height</p>
              </div>
              {/* Product 1 Specs */}
              <div className="flex flex-col gap-6 text-sm text-gray-700">
                <p>265.32 cm</p>
                <p>76 cm</p>
                <p>167.76 cm</p>
                <p>45 KG</p>
                <p>41.52 cm</p>
                <p>5.46 cm</p>
              </div>
              {/* Product 2 Specs */}
              <div className="flex flex-col gap-6 text-sm text-gray-700 border-l md:border-l-0 border-gray-200 pl-4 md:pl-0">
                <p>265.32 cm</p>
                <p>76 cm</p>
                <p>167.76 cm</p>
                <p>65 KG</p>
                <p>41.52 cm</p>
                <p>5.46 cm</p>
              </div>
              <div className="hidden md:block border-l border-gray-200"></div>
            </div>
          </div>

          {/* Section: Warranty */}
          <div className="py-8">
            <h4 className="text-xl font-bold mb-6">Warranty</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Labels */}
              <div className="flex flex-col gap-10 md:gap-6 text-sm">
                <p>Warranty Summary</p>
                <p>Warranty Service Type</p>
                <p>Covered in Warranty</p>
                <p>Not Covered in Warranty</p>
                <p className="mt-8 md:mt-2">Domestic Warranty</p>
              </div>
              {/* Product 1 Specs */}
              <div className="flex flex-col gap-6 text-sm text-gray-700">
                <p>1 Year Manufacturing Warranty</p>
                <p>For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</p>
                <p>Warranty Against Manufacturing Defect</p>
                <p>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</p>
                <p>1 Year</p>
                <div className="pt-6">
                  <button 
                    onClick={() => handleAddToCart(product1)}
                    className="bg-[#B88E2F] text-white px-8 py-3 w-max hover:bg-[#a67c29] transition-colors"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              {/* Product 2 Specs */}
              <div className="flex flex-col gap-6 text-sm text-gray-700 border-l md:border-l-0 border-gray-200 pl-4 md:pl-0">
                <p>1.2 Year Manufacturing Warranty</p>
                <p>For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</p>
                <p>Warranty of the product is limited to manufacturing defects only.</p>
                <p>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</p>
                <p>3 Months</p>
                <div className="pt-6">
                  <button 
                    onClick={() => handleAddToCart(product2)}
                    className="bg-[#B88E2F] text-white px-8 py-3 w-max hover:bg-[#a67c29] transition-colors"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className="hidden md:block border-l border-gray-200"></div>
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
