function updateQuantity(quantityElement: string, isIncrease: boolean) {
  const quantity = document.querySelector(quantityElement) as HTMLInputElement;

  const prevQuantity = parseInt(quantity.value);
  let newQuantity: number;
  if (isIncrease) {
    newQuantity = prevQuantity + 1;
  } else {
    newQuantity = prevQuantity - 1;
  }

  quantity.value = newQuantity.toString();
  return newQuantity;
}

function updatePrice(
  newQuantity: number,
  productPrice: number,
  amountElement: string
) {
  const phonePrice = newQuantity * productPrice;
  const phoneAmountElement = document.querySelector(
    amountElement
  ) as HTMLSpanElement;
  phoneAmountElement.textContent = phonePrice.toString();
}
