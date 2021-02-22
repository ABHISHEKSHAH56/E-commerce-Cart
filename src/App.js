import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Cart from '../src/componment/cart/Cart'
import Home from '../src/componment/Products/Products.js'
import HomepageLayout from '../src/componment/Home'
import Checkout from './componment/extra/Checkout'




export default function App() {
        return (
                <Router>
                       
                       <Switch>
                               <Route exact path="/" component={HomepageLayout} />
                               <Route exact path="/items" component={Home} /> 
                               <Route exact path="/cart" component={Cart} />  
                               <Route exact path="/checkout" component={Checkout} /> 

                               
                       </Switch>
                       

                </Router>







        )
}
