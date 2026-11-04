import React from 'react'
import { Store } from 'lucide-react';
import "../App.css"

const WebsiteSettings = ({ siteInfo, setSiteInfo, currentTheme, darkMode }) => {
     const inputClass = `w-full p-2 rounded-md border text-sm outline-none focus:ring-1 ${
    darkMode ? 'bg-slate-700 border-slate-600 text-slate-100' : 'bg-slate-50 border-slate-300 text-slate-800'
  }`;
  return (
   <>


 



    <section className={`p-5 rounded-xl border shadow-sm ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
      <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
        <Store className={`w-5 h-5 ${currentTheme.text}`} /> Website Details
      </h2>
      <div className="space-y-3 text-sm">
        <div>
          <label className="block text-xs font-medium mb-1 opacity-75">Site Name</label>
          <input
            type="text"
            value={siteInfo.name}
            onChange={(e) => setSiteInfo({ ...siteInfo, name: e.target.value })}
            className={`$inputClass`}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-xs font-medium mb-1 opacity-75">Logo (Emoji/Icon)</label>
            <input
              type="text"
              value={siteInfo.logo}
              onChange={(e) => setSiteInfo({ ...siteInfo, logo: e.target.value })}
              className={`$inputClass`}            />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1 opacity-75">Phone</label>
            <input
              type="text"
              value={siteInfo.phone}
              onChange={(e) => setSiteInfo({ ...siteInfo, phone: e.target.value })}
              className={`$inputClass`}
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium mb-1 opacity-75">Location</label>
          <input
            type="text"
            value={siteInfo.location}
            onChange={(e) => setSiteInfo({ ...siteInfo, location: e.target.value })}
           className={`$inputClass`}
          />
        </div>
      </div>
    </section>


   </>
  )
}

export default WebsiteSettings
