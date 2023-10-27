import { useDispatch, useSelector } from "react-redux"
import MyCard from "./MyCard"
import { Button, Card, ListGroup } from "react-bootstrap"
import { remove } from "../store/cartSlice"


export default function Cart() {

    const cartProducts = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const handleDelete = (title) => {
        dispatch(remove(title))
    }

    return (
        <div className="text-center">
            <h1>Your Cart</h1>
            <div className="product-list">
            {cartProducts.map(product => {
                return(
                    <Card key={product.id} className="container-fluid text-center" style={{ width: '15rem' }}>
                        <Card.Body>
                            <Card.Img className="item-image" variant="top" src={product.image} />
                            <Card.Title>{product.title}</Card.Title>
                            <ListGroup className="list-group-flush d-flex">
                            <ListGroup.Item>{product.category}</ListGroup.Item>
                            <ListGroup.Item>${product.price}</ListGroup.Item>
                            </ListGroup>
                            </Card.Body>
                        <Button variant="danger" onClick={() => handleDelete(product.title)}>Remove</Button>
                        
                    </Card>
                )
            })}
            </div>
        </div>
        
    )
}