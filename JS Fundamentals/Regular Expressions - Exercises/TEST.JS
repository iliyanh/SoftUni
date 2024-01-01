function softUniBarIncome(data) {


  let regex = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<quantity>\d+)\|[^|$%.0-9]*(?<price>\d+.?\d+)\$/gm
  let totalPrice = 0;
  while ((result = regex.exec(data)) !== null) {

    let name = result.groups.name;
    let product = result.groups.product;
    let quantity = result.groups.quantity;
    let price = result.groups.price;
    let currentPrice = Number(price) * Number(quantity);

    totalPrice += currentPrice
    console.log(`${name}: ${product} - ${currentPrice.toFixed(2)}`);
  }
  console.log(`Total income: ${totalPrice.toFixed(2)}`);
}
softUniBarIncome(['%George%<Croissant>|2|10.3$',
  '%Peter%<Gum>|1|1.3$',
  '%Maria%<Cola>|1|2.4$',
  'end of shift']
);

softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
  '%Peter%<Gum>1.3$',
  '%Maria%<Cola>|1|2.4',
  '%Valid%<Valid>valid|10|valid20$',
  'end of shift']
);