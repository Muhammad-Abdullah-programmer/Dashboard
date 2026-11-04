import React, { useState } from 'react';
import "./App.css"
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProductTable from './components/ProductTable';
import { initialProducts, initialSiteInfo, themeClasses } from './data/initialData';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [themeColor, setThemeColor] = useState('indigo');
  const [siteInfo, setSiteInfo] = useState(initialSiteInfo);
  const [products, setProducts] = useState(initialProducts);

  const [productForm, setProductForm] = useState({ id: null, name: '', price: '', category: '' });
  const [isEditing, setIsEditing] = useState(false);

  const currentTheme = themeClasses[themeColor];

  // Handlers
  const handleSaveProduct = (e) => {
    e.preventDefault();
    if (!productForm.name || !productForm.price) return;

    if (isEditing) {
      setProducts(products.map((p) => (p.id === productForm.id ? productForm : p)));
      setIsEditing(false);
    } else {
      setProducts([...products, { ...productForm, id: Date.now() }]);
    }
    setProductForm({ id: null, name: '', price: '', category: '' });
  };

  const handleEditProduct = (product) => {
    setProductForm(product);
    setIsEditing(true);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setProductForm({ id: null, name: '', price: '', category: '' });
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-800'} transition-colors duration-200`}>
      <Header
        siteInfo={siteInfo}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        themeColor={themeColor}
        setThemeColor={setThemeColor}
      />

      <main className="p-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Sidebar
          siteInfo={siteInfo}
          setSiteInfo={setSiteInfo}
          productForm={productForm}
          setProductForm={setProductForm}
          isEditing={isEditing}
          handleSaveProduct={handleSaveProduct}
          handleCancelEdit={handleCancelEdit}
          currentTheme={currentTheme}
          darkMode={darkMode}
        />

        <div className="lg:col-span-2">
          <ProductTable
            products={products}
            handleEditProduct={handleEditProduct}
            handleDeleteProduct={handleDeleteProduct}
            currentTheme={currentTheme}
            darkMode={darkMode}
          />
        </div>
      </main>
    </div>
  );
}