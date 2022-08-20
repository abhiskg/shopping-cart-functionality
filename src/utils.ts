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

function getTotalPrice(elementId: string) {
  const totalPriceElement = document.querySelector(
    elementId
  ) as HTMLSpanElement;

  const totalPrice = parseInt(totalPriceElement.textContent!);
  return totalPrice;
}

function setSubtotalprice() {
  const phonePrice = getTotalPrice("#phone-amount");
  const casePrice = getTotalPrice("#case-amount");

  const totalPrice = phonePrice + casePrice;

  const subTotalElement = document.querySelector(
    "#sub-total"
  ) as HTMLSpanElement;
  subTotalElement.textContent = totalPrice.toString();
}
