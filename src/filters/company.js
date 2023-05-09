import { getEle } from "../utils.js";
import {unique}  from "../utils.js";
import displayProducts from "../displayProducts.js";


const filterCompany = (data) =>{
    const companyDom = getEle(".list-company");
    const arrayApiCompany = data.map((element)=>{
        return element.company;
    })   
    const uniqueCompany =   arrayApiCompany.filter(unique)                        
    const companies = ["All",...uniqueCompany];

    const htmls = companies.map((element)=>{
        return ` <li class="li-company">${element}</li>`
    })
    companyDom.innerHTML = htmls.join("");

    companyDom.addEventListener("click",(e)=>{
        const value = e.target;
        if(value.matches(".li-company")){
            if(value.innerHTML === "All"){
                displayProducts(data,true);
            }
            else{
                const valueCompany = data.filter((element)=>{
                    return element.company === value.innerHTML;
                })
                displayProducts(valueCompany,true);
            }
           
          
            
        }
    })

    

}
export default filterCompany;