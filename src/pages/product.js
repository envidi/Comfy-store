import { getEle } from "../utils.js";
import  { singgleProduct } from "../utils.js";
import { showLoading , hideLoading } from "../toggleLoading.js"
const detailProductImage = getEle(".detail-product-image-src");
const detailproductinfoname = getEle(".detail-product-info-name");

const detailproductinfocompany = getEle(".detail-product-info-company");

const detailproductinfoprice = getEle(".detail-product-info-price");

const detailproductinfodesc = getEle(".detail-product-info-desc");
const firstClr = getEle(".firstClr");
const secondClr = getEle(".secondClr");


const displayProduct = async () =>{

    const urlId = window.location.search;
    try{
        showLoading();
        const response = await fetch(`${singgleProduct}${urlId}`);
        const data = await response.json();
        hideLoading();
        const { id , fields} = data;
        const { colors , company , price , name, description ,image } = fields;
        let imageProduct = image[0].url;
        detailProductImage.src = imageProduct;
        detailproductinfoname.innerHTML = name;
        detailproductinfocompany.innerHTML = "BY " + company;
        detailproductinfoprice.innerHTMl = price;
        detailproductinfodesc.innerHTML = description;
        firstClr.style.background = colors[0];
        secondClr.style.background = colors[1];
        
                 
    }
    catch(error){
        console.log("Api is error, check api");
    }
}
window.addEventListener("DOMContentLoaded",displayProduct);