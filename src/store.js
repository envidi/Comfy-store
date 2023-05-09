import { getItemStorage,setItemStorage } from "./utils.js";
let store = getItemStorage('store');
const storeItem = (data) =>{
       store = data.map((element)=>{
        const {
            id,
            fields ,
          } = element;
         
          const image = fields.image[0].thumbnails.large.url;
          const company = fields.company;
          const colors = fields.colors;
          const price = fields.price;
          const name = fields.name;
          
        return {id , fields ,image,company,colors,price,name}
    })

    setItemStorage("store",store);
    return store

}
export default storeItem;