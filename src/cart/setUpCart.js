import { getEle,getEles,formatPrice } from "../utils.js";
// import removeCartDOM from "./removeCartDOM.js";
import { openCart } from "../toggleSideBar.js";


import addToCartDOM from "./addToCartDOM.js";
import { setCartStorage,getCartItem } from "./storeCart.js";
import { findId } from "../utils.js";

const containItemCart = getEle(".contain-item-cart");
const itemCarts = getEles(".item-cart");

let newCarts ;
// let itemInCarts = getCartItem("cart");

export const handleAddToCart = (data) =>{
    let itemInCarts = getCartItem("cart");
    
    let item = itemInCarts.filter((element)=>{
        return element.id == data;
    })
    
    if(item.length == 0){
        let newItem = findId(data);
         newItem = { ...newItem ,amount : 1}
        
        addToCartDOM(newItem);
        
         newCarts = [...itemInCarts,newItem];
    }
    else if(item.length > 0){
        const newAmount = increaseAmount(data);
        const numberAmounts = [...getEles(".show-amount-item")]
        const numberAmountDom = numberAmounts.find((element)=>{
            return element.dataset.id == data;
        })
       
        numberAmountDom.innerHTML = newAmount;
                       
        
    }
    setCartStorage(newCarts);
    displayTotalCart();
    displayTotalAmount();
    openCart()
    
    
}

function increaseAmount(id){
    let oldItem
    let newAmount;
    let itemInCarts = getCartItem("cart");
    newCarts = itemInCarts.map((element)=>{
        if(element.id == id){
        newAmount = element.amount + 1;
        oldItem = { ...element,amount : newAmount};
        return oldItem
    }
    return {...element,oldItem}
    
    })          
    return newAmount;
}
function decreaseAmount(id){
    let itemInCarts = getCartItem("cart");
    let newAmount;
    let oldItem
    newCarts = itemInCarts.map((element)=>{
        if(element.id == id){
            if(element.amount > 1){
                newAmount = element.amount - 1;
                oldItem = { ...element,amount : newAmount};
                return oldItem

            }
          
    }
    return {...element,oldItem}
    
})   
    return newAmount;

}
const setUpCartFunctionality = () =>{
    containItemCart.addEventListener("click",(e)=>{
       
        const value = e.target;
        const parentValue = value.parentElement.parentElement;
        const valueId = value.dataset.id;

        if(value.classList.contains("delete-item-cart")){
            parentValue.parentElement.remove();
            removeItemCart(valueId)
        }
        if(value.classList.contains("increase-amount-item-icon")){            
            const parentElement = value.parentElement;
            const textAmount = parentElement.nextElementSibling;
            textAmount.innerHTML =  increaseAmount(valueId);                        
        }
        if(value.classList.contains("decrease-amount-item-icon")){
            
            const parentElement = value.parentElement;
            const textAmount = parentElement.previousElementSibling;
            textAmount.innerHTML =  decreaseAmount(valueId);  
            const check = decreaseAmount(valueId);
            if(!check){
                parentValue.parentElement.remove();
                removeItemCart(valueId)
            }
             
            
        }

        setCartStorage(newCarts);
        displayTotalCart();
        displayTotalAmount()

    })
}
const displayTotalCart = ()=>{
    const totalDOM = getEle(".total");
    let itemInCarts = getCartItem("cart");
    
        const total = itemInCarts.reduce((total,item)=>{
            const totalItem = item.price * item.amount;
            return total += totalItem;
        },0)
        totalDOM.innerHTML = `Total : ${formatPrice(total)}`;
    
}


const displayCart = ()=>{
    let itemInCarts = getCartItem("cart");
    
    if(itemInCarts.length != 0 || (!itemInCarts)){

        itemInCarts.forEach((element)=>{
            addToCartDOM(element);
        })
    }
}
const displayTotalAmount =() =>{
    const totalAmountDOM = getEle(".cart-item-count");
    let itemInCarts = getCartItem("cart");
    
        const total = itemInCarts.reduce((total,item)=>{
            return total += item.amount;
        },0);
        totalAmountDOM.innerHTML = total;
    
}
const removeItemCart = (id) =>{
    let itemInCarts = getCartItem("cart");
    
        newCarts = itemInCarts.filter((element)=>{
            return element.id !== id;
        })
        return newCarts
       
        
        
    
}




const init = () =>{
    displayTotalCart()
    setUpCartFunctionality();
    displayCart();
    displayTotalAmount()

}
init();


