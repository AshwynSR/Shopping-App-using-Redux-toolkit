import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function MyCard(props) {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAdd = (product) => {
    dispatch(add(product))
  }

  // const handleDetail = (id) => {
  //   navigate(`/product/${id}`)
  // } 

  return (
    <Card key={props.id}  >
      <Card.Img className="item-image" variant="top" src={props.image} style={{ maxHeight: '10rem' }} />
      <Card.Body>
      <ListGroup className="list-group-flush d-flex">
        <ListGroup.Item>
          <Card.Title >{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.category}</Card.Subtitle>
        </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <ListGroup>
        <ListGroup.Item className='text-center'>${props.price}</ListGroup.Item>
      </ListGroup>
      
      
      <Card.Footer>
        
        <Button variant="primary" onClick={() => handleAdd(props)}>Add to Cart</Button>
        {/* <Button variant="info" onClick={() => handleDetail(props.id)}>More Details</Button> */}
        <Link to={`/product/${props.id}`}>More Details</Link>
      </Card.Footer>
      
    </Card>
  );
}

export default MyCard;