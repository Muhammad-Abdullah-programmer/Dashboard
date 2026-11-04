import React from 'react'
import { Edit2, Trash2, LayoutDashboard } from 'lucide-react';
import "../App.css"

const ProductTable = ({ products, handleEditProduct, handleDeleteProduct, currentTheme, darkMode }) => {
  return (
   <>


    <div className={`p-5 rounded-xl border shadow-sm ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
      <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
        <LayoutDashboard className={`w-5 h-5 ${currentTheme.text}`} /> Product Inventory
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className={`border-b ${darkMode ? 'border-slate-700 text-slate-400' : 'border-slate-200 text-slate-500'}`}>
              <th className="py-3 px-2">Name</th>
              <th className="py-3 px-2 ">Category</th>
              <th className="py-3 px-2">Price</th>
              <th className="py-3 px-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {products.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-8 text-slate-400">
                  No products available. Add one above!
                </td>
              </tr>
            ) : (
              products.map((p) => (
                <tr key={p.id} className="hover:bg-slate-500/5 transition">
                  <td className="py-3 px-2 font-medium">{p.name}</td>
                  <td className="py-3 px-2 text-xs opacity-75">{p.category || 'N/A'}</td>
                  <td className="py-3 px-2 font-semibold">${p.price}</td>
                  <td className="py-3 px-2 text-right space-x-2">
                    <button
                      onClick={() => handleEditProduct(p)}
                      className="p-1.5 rounded hover:bg-slate-500/10 text-blue-500 transition"
                      title="Edit"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(p.id)}
                      className="p-1.5 rounded hover:bg-slate-500/10 text-rose-500 transition"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
 

   </>
  )
}

export default ProductTable
