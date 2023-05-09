
const setCartStorage = (data) =>{
    const cart = data;
    
        const convertID = JSON.stringify(cart);
        const carts = localStorage.setItem("cart",convertID);
    
}
const getCartItem = (name) =>{
    let itemCart = localStorage.getItem(name);
    if(itemCart){
        itemCart = JSON.parse(localStorage.getItem(name));
    }
    else{
        itemCart = [];
    }
    return itemCart;
}
export { setCartStorage,getCartItem }