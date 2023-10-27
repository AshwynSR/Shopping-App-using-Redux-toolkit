import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

export default function ProductDetail() {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const dispatch = useDispatch()
        
    useEffect(() => {
        axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then(res => setProduct(res.data))
        .catch(err => console.log("Error: " + err))
    })

    const handleAdd = (product) => {
        dispatch(add(product))
    }


    return (
        <div className='ui grid container'>
            {Object.keys(product).length === 0 ? 
            ( <div>...Loading</div>) 
            : 
            <Container fluid='md'>
                <Row>
                    <Col >
                        <img className='product-detail' src={product.image} />
                    </Col>
                    <Col>
                        <h1>{product.title}</h1>
                        <h2><a className='ui teal tag label'>${product.price}</a></h2>
                        <h3 className='ui brown block header'>{product.category}</h3>              
                        <p>{product.description}</p>                        
                        <div className='ui vertical animated button' tabIndex='0'>                               
                            <div className='hidden content'>                                  
                                <i className='shop icon' />                           
                            </div>
                            <Button as="a" variant="success" onClick={() => handleAdd(product)}>
                            Add to Cart
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            }   
        </div>
    
    
  )
}





// <div className='ui placeholder segment'>
//                 <div className='ui two column stackable center aligned grid'>
//                     <div className='ui vertical divider'>AND</div>
//                     <div className='middle aligned row'>
//                         <div className='column lp'>
//                             <img className='ui fluid image' src={product.image} />
//                         </div>
//                         <div className='column rp'>
//                             <h1>{product.title}</h1>
//                             <h2><a className='ui teal tag label'>${product.price}</a></h2>
//                             <h3 className='ui brown block header'>{product.category}</h3>
//                             <p>{product.description}</p>
//                             <div className='ui vertical animated button' tabIndex='0'>
//                                 <div className='hidden content'>
//                                     <i className='shop icon' />
//                                 </div>
//                                 <div className='visible content'>Add to Cart</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>           