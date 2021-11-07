import {
    BookOpenIcon    
} from "@heroicons/react/outline";
import Link from "next/link"

function Header() {
    return (
        <div className="flex items-center justify-items-center">
            <BookOpenIcon className="h-24 w-24" />
            <Link href="/"><a className="font-bold text-7xl">Chef Book</a></Link>
        </div>
    )
}

export default Header
