import * as actiontypes from './types';

const intialState = {
        products: [
                {
                        id: 1,
                        title: "This is the COOLEST Cube Ever",
                        description:
                                "This cube will keep you busy the entire day and it is very fun to play with",
                        price: 15.0,
                        image:
                                "http://placeimg.com/640/480/book",
                },
                {
                        id: 2,
                        title: "Large Coffee Cup",
                        description:
                                "Get a big cup of coffee every morning before the day starts",
                        price: 20.0,
                        image:
                                "http://placeimg.com/640/480/food",
                },
                {
                        id: 3,
                        title: "Books That CHANGED My Life",
                        description:
                                "These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",
                        price: 150.0,
                        image:
                                "https://source.unsplash.com/1600x900/?vegetable",
                },
                {
                        id: 4,
                        title: "National Accounts Supervisor",
                        description:
                                "These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",
                        price: 150.0,
                        image:
                                "https://source.unsplash.com/1600x900/?india",
                },
                {
                        id: 5,
                        title: "Dynamic Marketing Liaison",
                        description:
                                "These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",
                        price: 150.0,
                        image:
                                "https://source.unsplash.com/1600x900/?sports",
                },
        ],
        cart: [],
        currentItem: null,

}
const shopReducers = (state = intialState, action) => {
        switch (action.type) {
                case actiontypes.ADD_TO_CART:
                        const item =state.products.find(prod=> prod.id === action.payload.id)
                        const inCart =state.cart.find((prods)=>prods.id===action.payload.id? true :false);
                        return {
                                ...state,
                                cart:inCart? state.cart.map(item=>item.id===action.payload.id ?
                                        {...item, qty:item.qty+1}:item):[
                                                ...state.cart,{
                                                        ...item, qty:1
                                                }
                                        ]

                        }

                case actiontypes.REMOVE_FROM_CART:
                        return {
                                ...state,
                                cart:state.cart.filter(item=>
                                        item.id!==action.payload.id),
                        }
                case actiontypes.LOAD_CURRENT_ITEM:
                        return {
                                ...state,
                                currentItem:action.payload
                        };

                case actiontypes.ADJUST_QTY:
                        return {
                                ...state,
                                cart:state.cart.map(item=>item.id === action.payload.id ?{
                                        ...item ,
                                        qty: +action.payload.qty
                                }:item)
                        }
                default:
                        return state;
        }
}
export default shopReducers;