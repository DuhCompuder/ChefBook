
import Recipes from '../components/Recipes'

export default function Home() {
  return (
    <div className="grid grid-cols-1 mx-6 min-w-min justify-items-center place-items-center">
      <div className="relative mb-6">
         
         <div className="absolute bottom-0 left-0 m-6 bg-gray-100 opacity-70 rounded-2xl max-h-44">
             <h1 className="m-4 font-bold">Find A Recipe Made by Our Awesome Chefs</h1>
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
                 src="https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_960_720.jpg"
                 alt="Food"
             />
         </div>
     </div>
      
    </div>
  )
}
