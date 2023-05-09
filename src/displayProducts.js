import { getEle,getEles } from "./utils.js";
import { hideLoading } from "./toggleLoading.js";
import {formatPrice} from "./utils.js";
import addToCartDOM from "./cart/addToCartDOM.js";
import { handleAddToCart } from "./cart/setUpCart.js";




const displayProducts = (data,filter)=>{
    hideLoading();
    const wrapper = getEle(".wrapper-product");
    if(data.length == 0){
        wrapper.style.height = 30 + "px";
        wrapper.innerHTML = "<p class='no-result' >Sorry, No Products Matched Your Search</p>";        
        return
    }   

    const htmls = data.map((element,index)=>{
        const { id, name, image, price } = element;
       
        return `  <div class="product">
        <div class="product-img ">
            <img src="${image}" alt="">
            <div data-id="${id}" class="overlay-product d-f al-c jf-c">
                <a href="./product.html?id=${id}" class="detail-product block-overlay d-f jf-c al-c">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </a>
                <div data-id="${id}" class="addToCart block-overlay d-f jf-c al-c">
                    <i class="fa-solid fa-cart-shopping icon-addCart"></i>
                </div>
            </div>
        </div>
        <div class="info-product d-f f-d al-c">
            <div class="info-product-name">
                ${name}
            </div>
            <div class="info-product-price">
                ${formatPrice(price)}
            </div>
        </div>
    </div>`
    })

    wrapper.innerHTML = htmls.join("");
    if(filter)return;
    
    wrapper.addEventListener("click",(e)=>{
        const value = e.target;
        
        if(value.classList.contains("addToCart") || value.classList.contains("icon-addCart")){
            const id = value.parentElement.dataset.id;
            handleAddToCart(id);
            
        }

    })
    
    

}

export default displayProducts;