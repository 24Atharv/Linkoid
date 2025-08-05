export default function signup() {
    return <div className="min-h-screen bg-white text-black flex flex-col items-center">
        <span className="mt-8 font-semibold text-3xl font-sans">Linkoid</span>
        <span className="mt-6 font-medium text-lg">Create your Linkoid account</span>
        <div className="flex flex-col p-4 mt-8">
            <span>Email</span>
            <input className="text-black p-2 border w-76 rounded border-b-black" type="text" placeholder="Enter the mail" />
            <button className="bg-black text-white mt-6 rounded p-2">Sign Up</button>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
        <hr className="w-34" />
        <span>OR</span>
        <hr className="w-34" />
        </div>
        <div>
            <span>
                
            </span>
            <span></span>
        </div>
    </div>
}