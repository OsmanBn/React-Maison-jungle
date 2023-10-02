import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem({ name, cover, id, light, water }) {
    return (
        <li key={id} className='lmj-plant-item' onClick={()=>handleClick(name)}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`}/>
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
		</li>
    )
}

function handleClick(name){
    return console.log("CA A CLIQUE"+{name})
}
export default PlantItem