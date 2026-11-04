   import React from 'react';
import { Package } from 'lucide-react';
import "../App.css"

const ProductForm = ({ 
  productForm, 
  setProductForm, 
  isEditing, 
  handleSaveProduct, 
  handleCancelEdit, 
  currentTheme, 
  darkMode 
}) => {

      const inputClass = `w-full p-2 rounded-md border text-sm outline-none focus:ring-1 ${
    darkMode ? 'bg-slate-700 border-slate-600 text-slate-100' : 'bg-slate-50 border-slate-300 text-slate-800'
  }`;
  return (
   <>





    <section className={`p-5 rounded-xl border shadow-sm ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
      <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
        <Package className={`w-5 h-5 ${currentTheme.text}`} /> {isEditing ? 'Update Product' : 'Add Product'}
      </h2>
      <form onSubmit={handleSaveProduct} className="space-y-3 text-sm">
        <input
          type="text"
          placeholder="Product Name"
          value={productForm.name}
          onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
          className={`$inputClass w-full`}
          required
        />
        <div className="grid grid-cols-2 gap-2">
          <input
            type="number"
            placeholder="Price ($)"
            value={productForm.price}
            onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
          className={`$inputClass`}
            required
          />
          <input
            type="text"
            placeholder="Category"
            value={productForm.category}
            onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
            className={`$inputClass`}
          />
        </div>
        <div className="flex gap-2 pt-2">
          <button
            type="submit"
            className={`flex-1 py-2 rounded-md font-medium text-white transition ${currentTheme.bg} ${currentTheme.hover}`}
          >
            {isEditing ? 'Update' : 'Add Product'}
          </button>
          {isEditing && (
            <button
              type="button"
              onClick={handleCancelEdit}
              className={`px-4 py-2 rounded-md font-medium border ${darkMode ? 'border-slate-600 hover:bg-slate-700' : 'border-slate-300 hover:bg-slate-100'}`}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </section>
 

   </>
  )
}

export default ProductForm
