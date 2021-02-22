
import React from 'react';
import { Card, Button, ButtonGroup, Container, Jumbotron } from 'react-bootstrap'
import { connect } from "react-redux";
import {addToCart, loadCurrentItem} from '../../../redux/shop/action.js'
import { Link } from 'react-router-dom'
const  Product=({product,addToCart,loadCurrentItem})=> {
      





        return (
                <div>
                                     

                               
                                <Card style={{ width: '18rem', padding: '2px', margin: '4px' }}>
                                        <Card.Img variant="top" src={product.image} />
                                        <Card.Body>
                                                <Card.Title className="text-center">{product.title}</Card.Title>
                                                <Card.Text>
                                                        {product.description}
                                        </Card.Text>
                                                <Card.Text>
                                                        {product.price}
                                                </Card.Text>
                                                <Button variant="success" onClick={()=>addToCart(product.id)} size="lg"> Cart</Button>{' '}
                                                
                                                <Link to={`/singleitemview/${product.id}`}>
                                                <Button variant="warning"  onclick={()=>loadCurrentItem(product)} size="lg">View more</Button>{' '}
                                               
                                                </Link>
                                                
                                                

                                        </Card.Body>
                                </Card>

                        

                </div>
        )
}
const mapDispatchToProps=(dispatch)=>{
        return{
                addToCart:(id)=>dispatch(addToCart(id)),
                loadCurrentItem:(item)=>dispatch(loadCurrentItem(item))
        }
}

export default connect(null,mapDispatchToProps)(Product);