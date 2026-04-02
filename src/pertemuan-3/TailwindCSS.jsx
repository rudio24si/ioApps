import React from 'react'

export default function TailwindCSS() {
  return (
    // Wrapper utama dengan background abu-abu muda agar shadow lebih terlihat
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className='text-4xl font-extrabold text-gray-800 mb-4 border-b-4 border-blue-500 inline-block pb-2'>
            Belajar Tailwind CSS
          </h1>
          <div className="flex justify-center mt-4">
            <button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95'>
              Main Action Click Me
            </button>
          </div>
        </header>

        {/* Dashboard Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <Section wrapper="Spacing & Layout">
            <Spacing />
          </Section>

          <Section wrapper="Typography Style">
            <Typography />
          </Section>

          <Section wrapper="Borders & Buttons">
            <BorderRadius />
          </Section>

          <Section wrapper="Gradients & Backgrounds">
            <BackgroundColors />
          </Section>

          <Section wrapper="Navigation & Flexbox" fullWidth>
            <FlexboxGrid />
          </Section>

          <Section wrapper="Interactive Shadows">
            <ShadowEffects />
          </Section>

        </div>
      </div>
    </div>
  )
}

// Komponen pembungkus kecil agar tampilan konsisten
function Section({ children, wrapper, fullWidth = false }) {
  return (
    <div className={`flex flex-col space-y-4 ${fullWidth ? 'md:col-span-2 lg:col-span-3' : ''}`}>
      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{wrapper}</span>
      <div className="h-full">{children}</div>
    </div>
  )
}

// --- Komponen Asli (Hanya sedikit perapihan margin internal) ---

function Spacing() {
  return (
    <div className="bg-white shadow-md p-6 rounded-xl border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-800">Card Title</h2>
      <p className="mt-2 text-gray-600">Ini adalah contoh penggunaan padding dan margin di Tailwind.</p>
    </div>
  )
}

function Typography() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-black text-blue-600 leading-tight">Tailwind Typography</h1>
      <p className="text-gray-500 text-lg mt-2 italic">Belajar Tailwind sangat menyenangkan dan cepat!</p>
    </div>
  )
}

function BorderRadius() {
  return (
    <div className="flex items-center justify-center h-full">
      <button className="border-2 border-dashed border-blue-500 text-blue-600 font-bold px-6 py-3 rounded-2xl hover:bg-blue-50 transition">
        Klik Saya
      </button>
    </div>
  )
}

function BackgroundColors() {
  return (
    <div className="bg-gradient-to-br from-green-400 to-blue-600 text-white p-6 rounded-2xl shadow-xl">
      <h3 className="text-xl font-bold">Tailwind Colors</h3>
      <p className="mt-2 opacity-90 text-sm leading-relaxed">Belajar Tailwind itu seru dan fleksibel!</p>
    </div>
  )
}

function FlexboxGrid() {
  return (
    <nav className="flex flex-wrap justify-between items-center bg-gray-900 p-5 text-white rounded-xl shadow-2xl">
      <h1 className="text-xl font-black tracking-tighter uppercase text-blue-400">MyWebsite</h1>
      <ul className="flex space-x-6 font-medium">
        <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
        <li><a href="#" className="hover:text-blue-400 transition">About</a></li>
        <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
      </ul>
    </nav>
  )
}

function ShadowEffects() {
  return (
    <div className="bg-white shadow-sm p-8 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-50">
      <h3 className="text-xl font-bold text-gray-700 text-center">Hover me!</h3>
      <p className="text-gray-400 mt-2 text-center text-sm">Lihat efek bayangan dan gerakan saat hover.</p>
    </div>
  )
}