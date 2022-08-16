export const getAllItemsCart = (state) => {
    return state.cart
}

export const getTotalPrice = (state) => {
    return Object.values(state.cart).reduce((prev, {quantity, price}) => prev + quantity * price, 0) 
}