function RecipeCard({name, link}) {
    return (

        <div className="ml-16">
            <div className="bg-white my-8 mx-8 max-w-3xl rounded-xl shadow-xl">
                <div className="flex">
                    <div className="flex-none w-48 relative">
                        <img 
                        src={link}
                        alt="" 
                        className="rounded-l-xl absolute inset-0 w-full h-full object-cover" />
                    </div>
                    <form className="flex-auto p-6">
                        <div className="flex flex-wrap">
                        <h1 className="flex-auto text-xl font-semibold">
                            {name}
                        </h1>

                        </div>
                        <div className="flex items-baseline mt-4 mb-6">
                            <p className="text-sm text-gray-500 overflow-ellipsis overflow-hidden">
                                Lorem ipsum dolor sit amet. Quo impedit eveniet sed amet totam 
                                ea possimus dignissimos 33 reiciendis dolorum quo quidem neque 
                                aut corporis delectus? In voluptatem rerum et unde sapiente et 
                                enim consequuntur ea omnis illo est dolorem fugit aut tempore 
                                pariatur et optio Quis. Vel quia officia non laboriosam quia 
                                quo cumque aperiam sit voluptas facere et suscipit alias et earum 
                                obcaecati qui dicta temporibus.
                            </p>
                        </div>
        

                    </form>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard
