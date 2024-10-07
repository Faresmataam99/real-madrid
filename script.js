const productcards = document.getElementsByClassName("product-card");
const totalquantity = document.getElementById("total-quantity");
const totalprice = document.getElementById("total-price");

for (let productcard of productcards) {
  let productprice = productcard.querySelector(".product-price");
  let minusquantitybutton = productcard.querySelector(".minus-quantity-button");
  let quantity = productcard.querySelector(".quantity");
  let addbutton = productcard.querySelector(".add-quantity-button");

  addbutton.onclick = () => {
    quantity.innerText++;
    totalquantity.innerText++;
    totalprice.innerText =
      parseInt(totalprice.innerText) + parseInt(productprice.innerText);
  };

  minusquantitybutton.onclick = () => {
    if (quantity.innerText > 0) {
      quantity.innerText--;
      totalquantity.innerText--;
      totalprice.innerText =
        parseInt(totalprice.innerText) - parseInt(productprice.innerText);
    }
  };
}
