import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'
import Categories from './Categories'

function ShoppingList({cart, updateCart, displayedPlant, updateDisplayedPlant}) {
	//const [displayedPlant, updateDisplayedPlant] = useState([])
	//const active = displayedPlant

	function addToCart(name, price){
		// Parcours le tableau cart pour trouver si un élément respecte une condition
		// et le retourne
		// Ici on cherche si l'élément qu'on essaye d'ajouter est déjà dans le panier
		// si oui on va incrémenter sa quantité
		
		const currentPlantAdded = cart.find((plant)=> plant.name===name)
		if (currentPlantAdded) {
			// filtre un tableau cart
			// cela permet de créer un nouveau tableau avec uniquement les élément respectant un condition
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			// Le spread opérator "..." permet d'incrémenter un tableau <=> tab = tab + newElement
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantAdded.amount + 1}
			])
		} else {
			updateCart([...cart, {name, price, amount:1}])
		}		
	}

	return (
		<div>
			<Categories displayedPlant={displayedPlant} updateDisplayedPlant={updateDisplayedPlant}/>
			<ul className='lmj-plant-list'>
				{displayedPlant.map(({name, id, cover, light, water, price}) => (
				<div key={id}>
					<PlantItem
						name={name}
						cover={cover}
						light={light}
						water={water}
						price={price}
					/>
					<button onClick={()=>addToCart(name, price)}>Ajouter</button>
				</div>		
				))}
			</ul>
		</div>
	)
}

export default ShoppingList
