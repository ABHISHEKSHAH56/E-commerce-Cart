import * as actiontypes from "./types.js";
export const addToCart=(itemID)=>{
        return {
                type:actiontypes.ADD_TO_CART,
                payload:{
                        id:itemID
                }
        }
}

export const removeFromCart=(itemID)=>{
        return{
                type:actiontypes.REMOVE_FROM_CART,
                payload:{
                        id:itemID
                }
        }
}
export const adjustItemQty=(itemID,value)=>{
        return{
                type:actiontypes.ADJUST_QTY,
                payload:{
                        id:itemID,
                        qty:value
                }
        }
}

export const loadCurrentItem=(item)=>{
        return{
                type:actiontypes.LOAD_CURRENT_ITEM,
                payload:item
                
        }
}