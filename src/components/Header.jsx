import React from 'react'
import { Sun, Moon, MapPin, Phone, Palette } from 'lucide-react';
import "../App.css"
import { themeClasses } from '../data/initialData';
const Header = ({ siteInfo, darkMode, setDarkMode, themeColor, setThemeColor }) => {
  return (
  <>



 
    <header className={`p-4 border-b flex items-center justify-between ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
      <div className="flex items-center gap-3">
        <span className="text-3xl">{siteInfo.logo}</span>
        <div>
          <h1 className="font-bold text-xl leading-none">{siteInfo.name}</h1>
          <p className="text-xs text-slate-400 mt-1 flex items-center gap-2">
            <span><MapPin className="inline w-3 h-3" /> {siteInfo.location}</span> | 
            <span><Phone className="inline w-3 h-3" /> {siteInfo.phone}</span>
          </p>
        </div>
      </div>

      {/* Theme Controls */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <Palette className="w-4 h-4 text-slate-400" />
          {Object.keys(themeClasses).map((color) => (
            <button
              key={color}
              onClick={() => setThemeColor(color)}
              className={`w-5 h-5 rounded-full capitalize transition-transform ${
                color === 'indigo' ? 'bg-indigo-600' : 
                color === 'emerald' ? 'bg-emerald-600' : 
                color === 'rose' ? 'bg-rose-600' : 'bg-blue-600'
              } ${themeColor === color ? 'ring-2 ring-offset-2 ring-slate-400 scale-110' : 'opacity-70 hover:opacity-100'}`}
            />
          ))}
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-lg border transition ${darkMode ? 'bg-slate-700 border-slate-600 text-yellow-400' : 'bg-slate-100 border-slate-200 text-slate-600'}`}
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </header>
  


  </>
  )
}

export default Header
