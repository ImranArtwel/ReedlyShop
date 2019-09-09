export const addItemToCart = (cartItems, cartItemToAdd) => {
    // check if incoming item already exists
    const existingItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id);

    if(existingItem){
       return cartItems
              .map(cartItem => cartItem.id === cartItemToAdd.id
                    ? {...cartItem, quantity: cartItem.quantity + 1}
                    : cartItem 
                 );
    }
       
    // return all cart items pluz new item with base quantity of 1
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}