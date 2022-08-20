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

function setTextElement(elementId: string, value: number) {
  const element = document.querySelector(elementId) as HTMLSpanElement;
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
