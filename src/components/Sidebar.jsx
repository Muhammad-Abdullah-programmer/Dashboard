import React from 'react'
import WebsiteSettings from './WebsiteSettings';
import ProductForm from './ProductForm';
import "../App.css"
const Sidebar = ({
  siteInfo,
  setSiteInfo,
  productForm,
  setProductForm,
  isEditing,
  handleSaveProduct,
  handleCancelEdit,
  currentTheme,
  darkMode,
}) => {
  return (
 <>




    <div className="space-y-6">
      <WebsiteSettings
        siteInfo={siteInfo}
        setSiteInfo={setSiteInfo}
        currentTheme={currentTheme}
        darkMode={darkMode}
      />
      <ProductForm
        productForm={productForm}
        setProductForm={setProductForm}
        isEditing={isEditing}
        handleSaveProduct={handleSaveProduct}
        handleCancelEdit={handleCancelEdit}
        currentTheme={currentTheme}
        darkMode={darkMode}
      />
    </div>
 

 </>
  )
}

export default Sidebar
