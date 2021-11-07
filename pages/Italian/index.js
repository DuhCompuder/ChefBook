import Recipes from "../../components/Recipes"

const info = {
    chef: 'Chef Luca',
    chefImage: 'https://cdn.pixabay.com/photo/2017/07/09/14/25/pizza-2487090_960_720.jpg',
    foodNames: [
        'Pasta',
        'Lasagna',
        'Pizza'
    ],
    foodImages: [
        'https://cdn.pixabay.com/photo/2018/07/18/19/12/pasta-3547078_960_720.jpg', //pasta
        'https://cdn.pixabay.com/photo/2017/02/15/15/17/meal-2069021_960_720.jpg', 
        'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg'
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
