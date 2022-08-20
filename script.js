"use strict";
document.querySelector("#phone-plus-btn").addEventListener("click", () => {
    const newQuantity = updateQuantity("#phone-quantity", true);
    const productPrice = 1219;
    const newPrice = updatePrice(newQuantity, productPrice, "#phone-amount");
});
document.querySelector("#phone-minus-btn").addEventListener("click", () => {
    const newQuantity = updateQuantity("#phone-quantity", false);
    const productPrice = 1219;
    const newPrice = updatePrice(newQuantity, productPrice, "#phone-amount");
});
document.querySelector("#case-plus-btn").addEventListener("click", () => {
    const newQuantity = updateQuantity("#case-quantity", true);
    const productPrice = 59;
    const newPrice = updatePrice(newQuantity, productPrice, "#case-amount");
});
document.querySelector("#case-minus-btn").addEventListener("click", () => {
    const newQuantity = updateQuantity("#case-quantity", false);
    const productPrice = 59;
    const newPrice = updatePrice(newQuantity, productPrice, "#case-amount");
});
