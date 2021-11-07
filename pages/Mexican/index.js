import Recipes from "../../components/Recipes"
const info = {
    chef: 'Chef Angelica',
    chefImage: 'https://cdn.pixabay.com/photo/2017/03/27/20/50/cooking-2180250_960_720.jpg',
    foodNames: [
        'Borrito',
        'Taco',
        'Nachos'
    ],
    foodImages: [
        'https://cdn.pixabay.com/photo/2017/11/13/03/56/grilled-pineapple-pork-burrito-2944562_960_720.jpg', //boritto
        'https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg', //taco
        'https://cdn.pixabay.com/photo/2020/11/14/04/33/nachos-5740735_960_720.jpg' //bbq nachos
    ]
}
function index() {
    return (
        <div>
            <Recipes info={info}  />
        </div>
    )
}

export default index
