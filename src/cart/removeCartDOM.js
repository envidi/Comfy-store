import { getEle,getEles } from "../utils.js";

const removeCartDOM = ()=>{
    const removeBtns = getEles(".delete-item-cart");
    const itemCarts = getEles(".item-cart");
    const containItemCart = getEle(".contain-item-cart");
    console.log(itemCarts)
    removeBtns.forEach((removeBtn,index)=>{
        removeBtn.addEventListener("click",(e)=>{
            
            itemCarts[index].remove();
            console.log(itemCarts[index])
        })
    })


}
// export default removeCartDOM;