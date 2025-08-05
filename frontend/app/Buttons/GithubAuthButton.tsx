import GithubIcon from "../Icons/GithubIcon";

export default function GithubAuthButton() {
    return <div className="flex items-center gap-1 px-20 py-2 rounded border border-gray-300">
        <GithubIcon />
        <span className="text-sm text-gray-800">Continue with github</span>
    </div>
}