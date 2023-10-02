import '../styles/Cart.css'
import { useState, useEffect } from 'react'


function Cart({cart, updateCart, displayedPlant, updateDisplayedPlant}){
	const monsteraPrice = 8
	const [isOpen, setIsOpen] = useState(true)
	// Creation d'un accume=ulateur avec reduce
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)

	useEffect(()=>{
		document.title = `J'aurai ${total} $ à acheter`
	}, [total])

	useEffect(()=>{
		localStorage.setItem("panier",JSON.stringify(cart))
	}, [cart])
	
	return isOpen ? (
			<div className='lmj-cart'>
			<button 
			onClick={()=>setIsOpen(false)}
			>
				Fermer
			</button>
			<h2>Panier</h2>
			{cart.map(({name, price, amount},index)=>(
				<div key={`${name}-${index}`}>
				{name} {price}$ * {amount}	
				</div>
			))}
			
			<h3>Total: {total} $</h3>
			<button onClick={()=>updateCart([])}>Vider le panier</button>
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button' 
				onClick={()=>setIsOpen(true)}
			>
				Ouvrir le panier
				</button>
		</div>
	)
}

export default Cart