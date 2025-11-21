"use client"
import React from "react"

export default function ProductGrid({
  products,
  onAddToCart,
}: {
  products: any[]
  onAddToCart?: (product: any) => void
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col"
        >
          {/* Gambar produk */}
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-40 object-cover rounded-xl mb-3"
          />

          {/* Nama produk */}
          <h3 className="font-semibold text-gray-800 line-clamp-2">{product.name}</h3>

          {/* Harga + diskon */}
          <div className="mt-2 flex items-center justify-between">
            <span className="text-pink-600 font-bold">{product.price}</span>
            {product.disc && (
              <span className="text-xs bg-pink-100 text-pink-600 px-2 py-0.5 rounded">
                {product.disc}
              </span>
            )}
          </div>

          {/* Tombol Add to Cart */}
          {onAddToCart && (
            <button
              onClick={() => onAddToCart(product)}
              className="mt-4 bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg text-sm font-medium transition"
            >
              + Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  )
}
