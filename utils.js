"use strict";
function updateQuantity(quantityElement, isIncrease) {
    const quantity = document.querySelector(quantityElement);
    const prevQuantity = parseInt(quantity.value);
    let newQuantity;
    if (isIncrease) {
        newQuantity = prevQuantity + 1;
    }
    else {
        newQuantity = prevQuantity - 1;
    }
    quantity.value = newQuantity.toString();
    return newQuantity;
}
function updatePrice(newQuantity, productPrice, amountElement) {
    const phonePrice = newQuantity * productPrice;
    const phoneAmountElement = document.querySelector(amountElement);
    phoneAmountElement.textContent = phonePrice.toString();
}
