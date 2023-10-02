import { plantList } from "../datas/plantList"

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
        <div>
            <select onChange={(e)=> selectCategory(e.target.value)}>
                {categories.map((cat) => (
                    <option key={cat} >{cat}</option>
                ))}
            </select>
        </div>
    )
}

export default Categories