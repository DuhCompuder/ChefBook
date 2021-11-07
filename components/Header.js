import {
    BookOpenIcon    
} from "@heroicons/react/outline";
function Header() {
    return (
        <div className="flex items-center justify-items-center">
            <BookOpenIcon className="h-24 w-24" />
            <h1 className="font-bold text-7xl">Chef Book</h1>
            
        </div>
    )
}

export default Header
