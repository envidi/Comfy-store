import { getEle } from "../utils.js";
import displayProducts from "../displayProducts.js";

const  filterPrice = (data)=>{

    const inputRange = getEle(".inputRange");
    const valueInputRangeDOM = getEle(".valueInputRange");
    const arrPrice = data.map((element)=>{
        return (element.price)/100;

    })
    const valueMax = Math.max(...arrPrice);
    const valueMin = Math.min(...arrPrice);
    inputRange.max = valueMax;
    inputRange.min = valueMin;
    inputRange.addEventListener("input",(e)=>{
        const value = e.target.value;
        const filterPrice = data.filter((element)=>{
            const convertValue = element.price/100
            return convertValue <= value;
        })
        valueInputRangeDOM.innerHTML = `Value : $ ${value}`
       
        displayProducts(filterPrice,true);


    })
}

export default filterPrice;