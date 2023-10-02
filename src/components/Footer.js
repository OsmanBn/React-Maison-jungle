import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input 
				type='text' 
				name='email'
				onChange={(e)=>setInputValue(e.target.value)}
				onBlur={()=>checkEmail(inputValue)}/>
		</footer>
	)
}

function checkEmail(inputValue){
	if(!inputValue.includes("@")){
		alert("Attention il n'y a pas d'@, ceci n'est pas une addresse valide!!")
	}
}
export default Footer
