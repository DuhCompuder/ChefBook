import RecipeCard from "./RecipeCard"

function Recipes() {
    return (
        <div className="justify-items-center">
            <div className="relative">
                {/* extract into a component later for Food type bio */}
                <div className="absolute bottom-0 left-0 m-6 bg-gray-100 opacity-40 rounded-2xl max-h-44">
                    <h1 className="m-4">Chef Angel</h1>
                    <p className="m-4 overflow-ellipsis overflow-hidden">Lorem ipsum dolor sit amet. Quo impedit eveniet sed amet totam 
                            ea possimus dignissimos 33 reiciendis dolorum quo quidem neque 
                            aut corporis delectus? In voluptatem rerum et unde sapiente et 
                            enim consequuntur ea omnis illo est dolorem fugit aut tempore 
                            pariatur et optio Quis. Vel quia officia non laboriosam quia 
                            quo cumque aperiam sit voluptas facere et suscipit alias et earum 
                            obcaecati qui dicta temporibus.</p>
                </div>
                <div className="flex-none w-full bg-gray-600">
                    <img
                        className="flex-none w-full object-cover min-w-full"
                        src="https://cdn.pixabay.com/photo/2020/01/31/07/26/chef-4807317_960_720.jpg"
                        alt="Food"

                    />
                </div>
            </div>
            

            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
        </div>
    )
}

export default Recipes
