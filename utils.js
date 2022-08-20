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
function getTotalPrice(elementId) {
    const totalPriceElement = document.querySelector(elementId);
    const totalPrice = parseInt(totalPriceElement.textContent);
    return totalPrice;
}
function setTextElement(elementId, value) {
    const element = document.querySelector(elementId);
    element.textContent = value.toString();
}
function setSubtotalprice() {
    const phonePrice = getTotalPrice("#phone-amount");
    const casePrice = getTotalPrice("#case-amount");
    const totalPrice = phonePrice + casePrice;
    setTextElement("#sub-total", totalPrice);
    //   calculate tax
    const taxAmount = parseFloat((totalPrice * 0.1).toFixed(2));
    setTextElement("#tax-amount", taxAmount);
    //   Final Price
    const finalAmount = taxAmount + totalPrice;
    setTextElement("#final-amount", finalAmount);
}
