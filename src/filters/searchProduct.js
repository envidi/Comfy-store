import { getEle } from "../utils.js";
import displayProducts from "../displayProducts.js";

const searchProduct = (data) =>{
    const inputSearch = getEle(".inputSearch");

    inputSearch.addEventListener("input",(e)=>{
        const valueInput = e.target.value;
        
        const searchValue =  data.filter((value)=>{
            return value.name.toUpperCase().includes(valueInput.toUpperCase());
        })
        displayProducts(searchValue,true);
        
        
    })

}
export default searchProduct;