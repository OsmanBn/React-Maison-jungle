import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import { useState, useEffect } from 'react'
import '../styles/Body.css'
import { plantList } from '../datas/plantList'

function App() {
	const [cart, updateCart] = useState(()=>{
		const saved = localStorage.getItem("panier")
		const initialValue = JSON.parse(saved)
		return initialValue || []
	})
	const [displayedPlant, updateDisplayedPlant] = useState([])
	//const [displayedPlant, updateDisplayedPlant] = useState(plantList)
	
	
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>E-Plant Shopping</h1>
			</Banner>
			<div className='body'>
				<Cart cart={cart} updateCart={updateCart} displayedPlant={displayedPlant} updateDisplayedPlant={updateDisplayedPlant}/>
				<ShoppingList cart={cart} updateCart={updateCart} displayedPlant={displayedPlant} updateDisplayedPlant={updateDisplayedPlant} />
			</div>
			<Footer/>
		</div>
	)
}

export default App
