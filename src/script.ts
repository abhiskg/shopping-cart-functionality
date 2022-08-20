(
  document.querySelector("#phone-plus-btn") as HTMLButtonElement
).addEventListener("click", () => {
  const newQuantity = updateQuantity("#phone-quantity", true);
  const productPrice = 1219;
  updatePrice(newQuantity, productPrice, "#phone-amount");
  setSubtotalprice();
});

(
  document.querySelector("#phone-minus-btn") as HTMLButtonElement
).addEventListener("click", () => {
  const newQuantity = updateQuantity("#phone-quantity", false);
  const productPrice = 1219;
  updatePrice(newQuantity, productPrice, "#phone-amount");
  setSubtotalprice();
});

(
  document.querySelector("#case-plus-btn") as HTMLButtonElement
).addEventListener("click", () => {
  const newQuantity = updateQuantity("#case-quantity", true);
  const productPrice = 59;
  updatePrice(newQuantity, productPrice, "#case-amount");
  setSubtotalprice();
});

(
  document.querySelector("#case-minus-btn") as HTMLButtonElement
).addEventListener("click", () => {
  const newQuantity = updateQuantity("#case-quantity", false);
  const productPrice = 59;
  updatePrice(newQuantity, productPrice, "#case-amount");
  setSubtotalprice();
});
