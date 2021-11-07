import Recipes from "../../components/Recipes"

const info = {
    chef: 'Chef Mori',
    chefImage: 'https://cdn.pixabay.com/photo/2020/01/31/07/26/chef-4807317_960_720.jpg',
    foodNames: [
        'Sushi',
        'Teriyaki',
        'Udon'
    ],
    foodImages: [
        'https://cdn.pixabay.com/photo/2017/10/15/11/41/sushi-2853382_960_720.jpg', //sushi
        'https://cdn.pixabay.com/photo/2021/02/09/03/53/thai-food-5997301_960_720.jpg', //terriyai
        'https://cdn.pixabay.com/photo/2021/10/08/13/25/udon-6691341_960_720.jpg' // fishcake udon
    ]
}

function index() {
    return (
        <div>
            <Recipes info={info} />
        </div>
    )
}

export default index
