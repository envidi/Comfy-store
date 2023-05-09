import {allProductsUrl} from "./src/utils.js";
import fetchProduct from "./src/fetchProduct.js";
import displayProducts from "./src/displayProducts.js";
import storeItem from "./src/store.js";
import { showSidebar , hideSidebar} from "./src/toggleSideBar.js";
import { getEle,getEles } from "./src/utils.js";
import "./src/cart/setUpCart.js";

const init = async () =>{

    const response = await fetchProduct(allProductsUrl);
    
    
    if(response){
        const dataStorage = storeItem(response);
        const lessData = dataStorage.slice(0,3);
        
        displayProducts(lessData);
       
    }
   
    showSidebar(getEle(".cart"));
    hideSidebar(getEle(".close-sideBar"));
    


}
window.addEventListener("DOMContentLoaded",init)
