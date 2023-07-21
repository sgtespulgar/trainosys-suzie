import './App.css'
import Card from './component/Card'
import itemCard from './models/ItemCard';

function App() {

  const products : itemCard[] = [
    {
      imageUrl:"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      title:"Basic Tee",
      price:"99", 
    },
    {
      imageUrl:"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
      title:"Basic White Tee",
      price:"50", 
    }, {
      imageUrl:"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
      title:"Basic Charcoal Tee",
      price:"35"
    },{
      imageUrl:"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
      title:"Basic Charcoal Tee",
      price:"35", 
    }
  ];

  return (
    <>
      {products.map(item => {
        return <Card imageUrl={item.imageUrl} title={item.title} price={item.price}> </Card>
        }
      )}
    </>
  )
}

export default App
