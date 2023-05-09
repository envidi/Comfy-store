
// all api
const allProductsUrl = 'https://course-api.com/javascript-store-products';
const singgleProduct = "https://course-api.com/javascript-store-single-product";

const getEle = (selection) =>{
    const element = document.querySelector(selection);
    if(!element){
        throw new Error(`this ${selection} is not exist`);
    } 
    else{
        return element;
    }
}
const getEles = (selection) =>{
    const elements = document.querySelectorAll(selection);
    if(!elements){
        throw new Error(`this ${selection} is not exist`);
    } 
    else{
        return elements;
    }

}

const getItemStorage = (product) => {
    let itemStorage = localStorage.getItem(product);
    if(itemStorage){
        itemStorage = JSON.parse(localStorage.getItem(product));
    }
    else{
        itemStorage = [];
    }
    return itemStorage;

}
const formatPrice = (price) => {
    let formattedPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format((price / 100).toFixed(2))
    return formattedPrice
  }
const setItemStorage = (product,id) =>{
    const convertID = JSON.stringify(id);
    const items = localStorage.setItem(product,convertID);
}
const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }
  const findId = (id) =>{
    const itemInStore = getItemStorage("store");
    const result = itemInStore.find((element)=>{
        return element.id == id;
    })
    return result;
  }
export {
    getEle,getEles,getItemStorage,setItemStorage,allProductsUrl,singgleProduct,formatPrice,unique,findId
}


