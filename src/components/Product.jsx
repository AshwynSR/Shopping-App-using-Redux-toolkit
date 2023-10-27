import axios from "axios"
import { useEffect, useState } from "react"
import MyCard from "./MyCard"

export default function Product(){

    const [products, setProducts] = useState([])

    useEffect(() => {
       axios.get('https://fakestoreapi.com/products')
        .then(res=> {
            setProducts(res.data)
            console.log(res.data)
        })
    },[])

    

    return(
        <div>
            <h1>The Product list</h1>
            <div className="product-list">
            {products.map(product => {
                return(
                <MyCard 
                key = {product.id}
                id = {product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                category={product.category}
                rating={product.rate}
                count={product.count}
                price={product.price}
            />)
            })}
            </div>
        </div>
    )
}

