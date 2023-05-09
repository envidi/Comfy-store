import {getEle} from "./utils.js";

const showSidebar = (element) =>{
    const sideBar = getEle(".sidebar-cart");
    element.addEventListener("click",()=>{
        sideBar.classList.add("show-cart");
    })



}
const hideSidebar = (element) =>{
    const sideBar = getEle(".sidebar-cart");
    element.addEventListener("click",()=>{

        sideBar.classList.remove("show-cart");
    })

}
const openCart = ()=>{
    const sidebar = getEle(".sidebar-cart");
    sidebar.classList.add("show-cart");
}

export { showSidebar , hideSidebar ,openCart}