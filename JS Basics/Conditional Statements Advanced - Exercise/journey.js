function journey(input) {
  let budged = Number(input[0]);
  let season = input[1];
  let destination = "asd";
  let price = 0;
  let type = "sdf";

  if (budged <= 100) {
    destination = "Bulgaria";
  } else if (budged <= 1000) {
    destination = "Balkans";
  } else if (budged > 1000) {
    destination = "Europe";
  }

  switch (destination) {
    case "Bulgaria":
      if (season === "summer") {
        price = budged * 0.3;
        type = "Camp";
      } else if (season === "winter") {
        price = budged * 0.7;
        type = "Hotel";
      }
      break;
    case "Balkans":
      if (season === "summer") {
        price = budged * 0.4;
        type = "Camp";
      } else if (season === "winter") {
        price = budged * 0.8;
        type = "Hotel";
      }
      break;
    case "Europe":
      price = budged * 0.9;
      type = "Hotel";
      break;
  }

  console.log(`Somewhere in ${destination}`);
  console.log(`${type} - ${price.toFixed(2)}`);
}
journey(["1500", "summer"])
