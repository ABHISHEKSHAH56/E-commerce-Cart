import React, { useState,useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Navbar.css';
import {connect} from 'react-redux'


const  Navbar= ({cart})=>{
        const [click, setClick]=useState(false);
        const handleClicker=()=>setClick(!click);
        const closeMobileMenu=()=>setClick(false);
        const [cartCount,setCartCount]=useState(0);
        useEffect(()=>{
                let count=0;
                cart.forEach(ele => {
                        count+=ele.qty;
                });
                setCartCount(count);

        },[cart,cartCount])

                return (
                        <>
                        
                        <nav className="navbar">
                                <div className="navbar-container">
                                       
                                        <Link to='/' className="navbar-logo">
                                               
                                               Shah Corner 

                                              
                                                    
                                        
                                        </Link>
                                        <div className="menu-icon" onClick={handleClicker}>
                                                <i className={click ? 'fas fa-times ' : 'fas fa-bars'} aria-hidden="true"/>

                                        </div>
                                        <ul className={click ? 'nav-menu active ' : 'nav-menu'}>
                                                <li className="nav-item">
                                                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                                                Home
                                                        </Link>
                                                       
                                                </li>
                                                <li className="nav-item">
                                                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                                                Service
                                                        </Link>
                                                       
                                                </li>
                                                <li className="nav-item">
                                                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                                                Products
                                                        </Link>
                                                       
                                                </li>
                                                <li className="nav-item">
                                                        <Link to='/cart' className="nav-links" onClick={closeMobileMenu}>
                                                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                                         cart {cartCount} 
                                                        </Link>
                                                       
                                                </li>
                                                <li className="nav-item">
                                                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                                               <Button className=" btn-primary btn" >SignUp
                                                                       </Button> 
                                                                       
                                                        </Link>
                                                       
                                                </li>
                                        </ul>
                                </div>
                        </nav>
                        </>
                )
        }

const map=state=>{
        return {
                cart:state.shop.cart
        }
}        

export default connect(map)(Navbar);