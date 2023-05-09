import fetchProduct from "../fetchProduct.js";
import {allProductsUrl} from "../utils.js";
import displayProducts from "../displayProducts.js";
import storeItem from "../store.js";
import searchProduct from "../filters/searchProduct.js";
import filterCompany from "../filters/company.js";
import filterPrice from "../filters/price.js";
import { showSidebar , hideSidebar} from "../toggleSideBar.js";
import { getEle } from "../utils.js";
import "../cart/setUpCart.js"


const init = async () => {
    const response = await fetchProduct(allProductsUrl);

    if(response){
        const data = storeItem(response);
         displayProducts(data) ;
         searchProduct(data);
         filterCompany(data);
         filterPrice(data);
    }
    showSidebar(getEle(".cart"));
    hideSidebar(getEle(".close-sideBar"));


    
    

}
window.addEventListener("DOMContentLoaded",init);

