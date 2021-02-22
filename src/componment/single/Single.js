import React from "react";
import styles from "./SingleItem.module.css";

import { connect } from "react-redux";
import { addToCart } from "../../redux/shop/action";

const SingleItem = ({ currentitem, addToCart }) => {
  return (
    <div className={styles.singleItem}>
      
     
      <div className={styles.singleItem__details}>
        <p className={styles.details__title}>{currentitem.title}</p>
        <p className={styles.details__description}>{currentitem.description}</p>
        <p className={styles.details__price}>$ {currentitem.price}</p>

        <button
          onClick={() => addToCart(currentitem.id)}
          className={styles.details__addBtn}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentitem: state.shop.currentitem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);