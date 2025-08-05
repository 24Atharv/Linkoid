import GoogleIcon from "../Icons/GoogleIcon";

export default function GoogleAuthButton() {
    return <div className="flex items-center gap-1 px-20 py-2 rounded border border-gray-300">
        <GoogleIcon />
        <span className="text-sm text-gray-800">Continue with Google</span>
    </div>
}