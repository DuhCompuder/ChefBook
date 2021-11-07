import Link from 'next/link'
function Nav() {
    return (
        <div className="flex-1 flex justify-center my-4 border-b-2 border-gray-200 border-t-2 w-3/4">
            <nav>
                <div className="flex flex-1 my-1 space-x-12 content-center">
                <Link href="/Italian"><a className="font-bold cursor-pointer 
                    transition duration-100 transform hover:scale-125 
                    hover:text-yellow-400 active:text-red-500">Italian</a></Link>
                <Link href="/Asian"><a className="font-bold cursor-pointer 
                    transition duration-100 transform hover:scale-125 
                    hover:text-yellow-400 active:text-red-500">Asian</a></Link>
                <Link href="/Mexican"><a className="font-bold cursor-pointer 
                    transition duration-100 transform hover:scale-125 
                    hover:text-yellow-400 active:text-red-500">Mexican</a></Link>
                </div>
            </nav>
        </div>
    )
}

export default Nav
