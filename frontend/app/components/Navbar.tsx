export default function () {
    return <div className="text-black p-4 flex justify-between items-center">
        <span className="font-bold text-2xl">Linkoid</span>
        <div className="flex gap-12">
            <span><a className="flex items-center gap-1" href="#"><span>Product</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3 text-black">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </a></span>
            <span><a className="flex items-center gap-1" href="#">Solutions
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3 text-black">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </a></span>
            <span><a className="flex items-center gap-1" href="#">Resources
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3 text-black">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </a></span>
            <span><a href="#">Enterprise</a></span>
            <span><a href="#">Customers</a></span>
            <span><a href="#">Pricing</a></span>
        </div>
        <div className="flex gap-4">
            <span className="bg-white px-4 py-2 border rounded border-black">
                Log in
            </span>
            <span className="bg-black px-4 py-2 text-white rounded">
                Sign up
            </span>
        </div>
    </div>
}
