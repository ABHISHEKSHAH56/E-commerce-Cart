import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Product from './product/Product.js'
import Footer from '../extra/Footer';

import Navbar from '../extra/Navbar';
import { connect } from "react-redux";
import { Route } from 'react-router-dom';
const Home = ({ products }) => {

       
        return (
                <div>
                        <Navbar />
                        <Container >

                                <Route exact path="/items">
                                        <Col xl={8}> <Container style={{
                                                display: "flex",
                                                "flex-direction": "row",
                                                "flex-wrap": "wrap",

                                        }} >

                                                {
                                                        products.map((product) => (
                                                                <Product key={product.id} product={product} />))
                                                }
                                        </Container>


                                        </Col>
                                </Route>

                               

                        </Container>


                        <Footer />
                </div>
        )
}

const mapStateToProps = state => {
        return {
                products: state.shop.products,

        };
};

export default connect(mapStateToProps)(Home);
