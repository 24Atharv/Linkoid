import Bar from "./Bar";

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
        <div className="mt-25 flex gap-3">
            <span className="flex items-center gap-1 px-3 py-1 border border-gray-400 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 16 16">
                    <path fill="#c8e6c9" fill-rule="evenodd" d="M10,2	c3.313,0,6.004,2.688,6.004,6S13.313,14,10,14c-3.313,0-6.004-2.688-6.004-6S6.686,2,10,2z" clip-rule="evenodd"></path><path fill="#212121" fill-rule="evenodd" d="M11.004,12.999	c0-0.321,0.076-0.627,0.212-0.896L9.425,8.999H5.834c0.111-0.312,0.172-0.649,0.172-1c0-0.349-0.061-0.687-0.172-1h3.592L11.214,3.9	c-0.137-0.271-0.213-0.577-0.213-0.901c0-1.104,0.897-2,2.001-2s2.001,0.896,2.001,2s-0.897,2-2.001,2c-0.037,0-0.075,0-0.111-0.003	l-1.733,3.003l1.733,3.004c0.037-0.003,0.075-0.004,0.113-0.004c1.104,0,2.001,0.896,2.001,2s-0.897,2-2.001,2	C11.901,14.999,11.004,14.103,11.004,12.999z M1.004,7.999c0-1.104,0.897-2,2.001-2s2.001,0.896,2.001,2s-0.897,2-2.001,2	S1.004,9.103,1.004,7.999z" clip-rule="evenodd"></path>
                </svg>
                Short Links
            </span>
            <span className="flex items-center gap-1 px-3 py-1 border border-gray-400 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
                Conversion Analytics
            </span>
            <span className="flex items-center gap-1 px-3 py-1 border border-gray-400 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 bg-amber-700 rounded">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                </svg>
                Affilate Programs
            </span>
        </div>
        <Bar />
    </div>
}
