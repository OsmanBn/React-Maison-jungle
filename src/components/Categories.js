import { plantList } from "../datas/plantList"
import '../styles/ShoppingList.css'


function Categories({displayedPlant, updateDisplayedPlant}){
    const categories = plantList.reduce(
        (acc,plant) => (acc.includes(plant.category))? acc : acc.concat(plant.category),
        []
    )

    
    function selectCategory(cat){
        // Met 
        const filteredPlant = plantList.filter(
            (plant) => plant.category===cat
        )

        updateDisplayedPlant(filteredPlant)
        console.log("cat")
        return console.log(filteredPlant)
    }

    return (
        <div class='lmj-categories-select'>
            <p>Pick a plant category : </p><br/>
            <select onChange={(e)=> selectCategory(e.target.value)}>
                {categories.map((cat) => (
                    <option key={cat} >{cat}</option>
                ))}
            </select>
        </div>
    )
}

export default Categories