export default function() {
    return <div className="text-black p-4 flex justify-between items-center">
        <span className="font-bold text-2xl">Linkoid</span>
        <div className="flex gap-12">
            <span><a href="#">Product</a></span>
            <span><a href="#">Solutions</a></span>
            <span><a href="#">Resources</a></span>
            <span><a href="#">Enterprise</a></span>
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