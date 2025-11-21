"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import TopBanner from "@/components/TopBanner"
import TabsSection from "@/components/TabsSection"
import BrandInfo from "@/components/BrandInfo"
import BestBanner from "@/components/BestBanner"
import ProductGrid from "@/components/ProductGrid"

// =================== HEADER SEPERTI SOCIOLLA ===================
function SociollaHeader() {
  return (
    <div className="border-b border-pink-200">
      {/* 🔝 Bar atas */}
      <div className="bg-pink-50 text-xs md:text-sm text-gray-700 flex flex-wrap justify-between items-center px-4 md:px-6 py-2">
        <div className="flex flex-wrap gap-3 font-medium">
          <a href="#" className="hover:text-pink-600">SOCIOLLA</a>
          <a href="#" className="hover:text-pink-600">LILLA</a>
          <a href="#" className="hover:text-pink-600">BEAUTY JOURNAL</a>
          <a href="#" className="hover:text-pink-600">SOCO</a>
        </div>
        <div className="hidden lg:flex items-center gap-3">
          <p className="text-pink-600 font-semibold">
            🎁 to 10.10 up to 65% OFF + FREE 3 Beauties: Anessa, TIRTIR & more*
          </p>
          <button className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-600 transition">
            Shop now
          </button>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span>📧 cs@sociolla.com</span>
          <span>📞 0811987881</span>
          <a href="#" className="text-pink-600 font-medium">Help Center</a>
          <div className="flex items-center border rounded px-2 py-0.5">
            🇮🇩 <span className="px-1">ID</span> | 🇻🇳 <span>VN</span>
          </div>
        </div>
      </div>

      {/* 🔍 Bagian Tengah */}
      <div className="bg-white flex flex-wrap md:flex-nowrap justify-between items-center px-4 md:px-6 py-3 shadow-sm">
        <h1 className="text-2xl md:text-3xl font-bold italic text-gray-800">
          soci<span className="text-pink-600">olla</span>
        </h1>

        {/* Search bar */}
        <div className="flex-1 mx-4 md:mx-8 mt-3 md:mt-0">
          <input
            type="text"
            placeholder="Search products, brands..."
            className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>

        {/* Login & Cart */}
        <div className="flex items-center gap-4">
          <a href="#" className="text-gray-700 hover:text-pink-600 font-medium text-sm md:text-base">
            LOGIN WITH <span className="text-pink-600 font-semibold">SO•CO</span>
          </a>
          <div className="relative text-lg">
            🛍
            <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full px-1">
              1
            </span>
          </div>
        </div>
      </div>

      {/* 🔘 Menu bawah */}
      <div className="bg-white flex flex-wrap justify-center md:justify-start px-4 md:px-6 py-3 gap-3 md:gap-6 border-t border-pink-100 text-xs md:text-sm font-medium">
        <a href="#" className="flex items-center gap-1 hover:text-pink-600">📂 Categories</a>
        <a href="#" className="flex items-center gap-1 hover:text-pink-600">🏷 Brands</a>
        <a href="#" className="flex items-center gap-1 hover:text-pink-600">🎁 Bestie Deals</a>
        <a href="#" className="flex items-center gap-1 hover:text-pink-600">🆕 New Arrivals</a>
        <a href="#" className="flex items-center gap-1 hover:text-pink-600">👑 Best Seller</a>
        <a href="#" className="flex items-center gap-1 hover:text-pink-600">🎫 E-Gift Card</a>
      </div>
    </div>
  )
}

// =================== CART DRAWER ===================
function CartDrawer({
  cart,
  onClose,
  onRemove,
  onUpdateQty,
}: {
  cart: any[]
  onClose: () => void
  onRemove: (name: string) => void
  onUpdateQty: (name: string, type: "inc" | "dec") => void
}) {
  const parsePrice = (price: string) =>
    Number(price.replace(/[^\d]/g, "")) || 0

  const total = cart.reduce(
    (acc, item) => acc + parsePrice(item.price) * item.qty,
    0
  )

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Keranjang masih kosong!")
      return
    }

    // Simulasi proses pemesanan
    alert(`Terima kasih! Pesanan Anda sebesar Rp ${total.toLocaleString("id-ID")} telah diproses.`)
  }

  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 p-6 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-pink-600">🛒 Keranjang</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-red-500">
          ✖
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="text-gray-500">Keranjang kosong</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 border-b pb-2">
                <img src={item.img} alt={item.name} className="w-12 h-12 rounded" />
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.price}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => onUpdateQty(item.name, "dec")}
                      className="px-2 py-0.5 bg-gray-200 rounded"
                    >
                      ➖
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() => onUpdateQty(item.name, "inc")}
                      className="px-2 py-0.5 bg-gray-200 rounded"
                    >
                      ➕
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(item.name)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  🗑
                </button>
              </li>
            ))}
          </ul>

          {/* Total dan tombol pesan */}
          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between font-semibold text-lg mb-4">
              <span>Total:</span>
              <span className="text-pink-600">
                Rp {total.toLocaleString("id-ID")}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-pink-600 text-white py-2 rounded-full shadow hover:bg-pink-700 transition"
            >
              🛍 Pesan Sekarang
            </button>
          </div>
        </>
      )}
    </div>
  )
}

// =================== MAIN PAGE ===================
export default function DazzlePage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("Home")
  const [cart, setCart] = useState<any[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/login")
  }

  const addToCart = (product: any) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.name === product.name)
      if (exist) {
        return prev.map((item) =>
          item.name === product.name ? { ...item, qty: item.qty + 1 } : item
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const removeFromCart = (name: string) => {
    setCart((prev) => prev.filter((item) => item.name !== name))
  }

  const updateQty = (name: string, type: "inc" | "dec") => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.name === name
            ? { ...item, qty: type === "inc" ? item.qty + 1 : item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    )
  }

  // =================== DATA PRODUK ===================
  const bestSellers = [
    { img: "/pap.jfif", name: "GET A GRIP Make-up Setting Spray", price: "Rp 40.755", disc: "5%" },
    { img: "/lip.jfif", name: "Lip Stick Nude", price: "Rp 36.005", disc: "5%" },
    { img: "/lip3.jfif", name: "Lip Balm Pink", price: "Rp 36.005", disc: "5%" },
    { img: "/chusion.jfif", name: "Essence Cushion", price: "Rp 68.305", disc: "5%" },
  ]

  

  const allProducts = [
    { img: "/eye.jfif", name: "Eyeshadow Palette Glam", price: "Rp 32.000" },
    { img: "/blush.jfif", name: "Blush On Peach Glow", price: "Rp 25.000" },
    { img: "/hing.png", name: "Highlighter Shimmer", price: "Rp 27.000" },
    { img: "/powder.jfif", name: "Compact Powder Matte", price: "Rp 48.000" },
    { img: "/cream.jfif", name: "Matte Lip Cream Soft Pink", price: "Rp 37.000" },
    { img: "/chusion2.png", name: "Cushion Dewy Finish", price: "Rp 148.000" },
    { img: "/eyesedow.png", name: "Glitter Eyeshadow Mini", price: "Rp 28.000" },
    { img: "/skin.jfif", name: "Skintint", price: "Rp 47.000" },
    { img: "/liptint.png", name: "Ink-Licious Lip Tint", price: "Rp 32.000" },
    { img: "/alis.jfif", name: "Brow Pencil Dark Brown", price: "Rp 16.000" },
    { img: "/liner.jfif", name: "Eyeliner Waterproof", price: "Rp 23.000" },
    { img: "/glos.png", name: "Wonderfullip Serum", price: "Rp 30.000" },
    { img: "/primer.webp", name: "Primer", price: "Rp 49.000" },
    { img: "/lip clay.webp", name: "Lip Clay", price: "Rp 44.000" },
    { img: "/lip matte.webp", name: "Lip Matte", price: "Rp 39.000" },
    { img: "/concealer.webp", name: "Concealer", price: "Rp 37.000" },
  ]

  const promoProducts = [
    { img: "/lipglaze3.webp", name: "Lipglaze", price: "Rp 46.000", disc: "30%" },
    { img: "/eyeliner.png", name: "Eyeliner", price: "Rp 26.000", disc: "20%" },
    { img: "/mascaraa.jfif", name: "Mascara", price: "Rp 32.000", disc: "15%" },
    { img: "/lipclick2.jpg", name: "Lip Click", price: "Rp 45.000", disc: "25%" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50">
      {/* Header */}
      <SociollaHeader />

      <TopBanner />

      <div className="flex justify-end px-6 mt-4">
        <button
          onClick={handleLogout}
          className="bg-pink-600 text-white px-5 py-2 rounded-full shadow hover:bg-pink-700 transition"
        >
          🚪 Logout
        </button>
      </div>

      {/* Cart Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsCartOpen(true)}
          className="bg-pink-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
        >
          🛒 Cart ({cart.reduce((a, b) => a + b.qty, 0)})
        </button>
      </div>

      <div className="border-b border-pink-200 sticky top-0 z-40 bg-white">
        <TabsSection active={activeTab} setActive={setActiveTab} />
      </div>

      <main className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        {activeTab === "Home" && (
          <>
            <img src="/da.png" className="w-full rounded-2xl mb-10 object-cover" alt="Promo" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <BrandInfo />
              <div className="md:col-span-2">
                <BestBanner />
              </div>
            </div>
            <section className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-6">
                🌟 Best Sellers
              </h2>
              <ProductGrid products={bestSellers} onAddToCart={addToCart} />
            </section>
          </>
        )}

        {activeTab === "Products" && (
          <>
            <h2 className="text-3xl font-extrabold text-pink-600 text-center mb-8">
              ✨ All Products
            </h2>
            <ProductGrid products={allProducts} onAddToCart={addToCart} />
          </>
        )}

        {activeTab === "Promo" && (
          <>
            <h2 className="text-3xl font-extrabold text-pink-600 text-center mb-8">
              🎉 Special Promo
            </h2>
            <ProductGrid products={promoProducts} onAddToCart={addToCart} />
          </>
        )}
      </main>

      {isCartOpen && (
        <CartDrawer
          cart={cart}
          onClose={() => setIsCartOpen(false)}
          onRemove={removeFromCart}
          onUpdateQty={updateQty}
        />
      )}
    </div>
  )
}