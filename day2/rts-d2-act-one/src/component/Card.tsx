import itemCard from '../models/ItemCard';


  function Card(props: itemCard){
    return(
        <>
            <div className="main-card" >
                <img  src={props.imageUrl} alt={props.title} style={{ width: 200, height: 300 }}/>
                <div className="info-card">
                    <p>{props.title}</p>
                    <span>${props.price}</span>
                    <button className='add-to-cart'>Add to cart</button>
                </div>
                
                
            </div>
        </>
    )
  }

export default Card;