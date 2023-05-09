import { getEle } from "../utils.js";
import { formatPrice } from "../utils.js";

const addToCartDOM = (data) =>{
    const containItem = getEle(".contain-item-cart")
    const blockCart = document.createElement("div");
    blockCart.classList.add("item-cart");
    blockCart.innerHTML = ` <div class="d-f">
    <div class="img-item-cart">
        <img src="${data.image}" alt="">
    </div>
    <!-- ------------ -->
    <div class="detail-item-cart">
        <div class="name-item-cart">
        ${data.name}
        </div>
        <div class="price-item-cart">
            ${formatPrice(data.price)}
        </div>
        <div class="delete-item-cart" data-id="${data.id}">
            remove
        </div>
    </div>
</div>
    <!-- ---------------- -->
    <div class="amount-item-cart d-f f-d al-c">
        <div class="increase-amount-item d-f"><i data-id="${data.id}" class="increase-amount-item-icon fa-solid fa-chevron-up"></i></div>
        <div class="show-amount-item " data-id="${data.id}">${data.amount}</div>
        <div class="decrease-amount-item d-f" ><i data-id="${data.id}" class="decrease-amount-item-icon fa-solid fa-chevron-down"></i></div>
    </div>`

    containItem.appendChild(blockCart);
}

export default addToCartDOM;