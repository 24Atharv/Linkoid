export default function Hero() {
    return <div className="flex flex-col items-center mt-10 text-black">
        <span className="text-black flex gap-1 px-6 py-1 rounded-2xl border border-gray-300 w-fit items-center">
            How Framer manages affilates with Dub
            <button>Read more</button>
            <svg width="18" height="18" className="text-gray-700 bg-gray-200 rounded-3xl" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </span>
        <span className="mt-10 text-5xl font-medium font-sans text-[#171717]">Turn clicks into revenue</span>
        <span className="w-160 text-2xl text-center text-gray-600 mt-9">Dub is the modern link attribution platform for short links, conversion tracking, and affiliate programs.</span>
        <div className="flex gap-3 mt-12">
            <button className="bg-black text-white px-6 py-2 text-sm rounded">Start for free</button>
            <button className="bg-white px-5 py-2 rounded text-sm text-gray-800 border border-gray-300">Get a demo</button>
        </div>
        <div>
        </div>
    </div>
}
