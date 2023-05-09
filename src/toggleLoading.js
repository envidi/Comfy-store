
import { getEle } from "./utils.js";

const showLoading = ()=>{
    const loading = getEle(".contain-loading");
    loading.classList.add("active-loading");
}
const hideLoading = () =>{
    const loading = getEle(".contain-loading");
    loading.classList.remove("active-loading");
}
export {showLoading,hideLoading};