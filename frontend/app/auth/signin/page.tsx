import GithubAuthButton from "@/app/Buttons/GithubAuthButton";
import GoogleAuthButton from "@/app/Buttons/GoogleAuthButton";

export default function signup() {
    return <div className="min-h-screen bg-white text-black flex flex-col items-center">
        <span className="mt-8 font-bold text-3xl font-sans">Linkoid</span>
        <span className="mt-6 font-medium text-lg">Log in to your Linkoid account</span>
        <div className="flex flex-col p-4 mt-8">
            <span>Email</span>
            <input className="text-black p-2 border w-76 rounded border-b-black" type="text" placeholder="Enter the mail" />
            <button className="text-sm bg-black text-white mt-6 rounded p-2">Log in with email</button>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
        <hr className="w-34" />
        <span className="text-sm">OR</span>
        <hr className="w-34" />
        </div>
        <div className="gap-3 flex flex-col">
            <GoogleAuthButton />
            <GithubAuthButton />
        </div>
            <span className="mt-5 text-gray-300">Don't have an account?<span className="font-semibold text-gray-800">Sign up</span></span>
            <span className="mt-40 text-gray-600">By continuing, you agree to Dub’s Terms of Service and Privacy Policy</span>
    </div>
}

