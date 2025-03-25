function countFlavors(flavorArray) {
    const flavorCount = {};
  
    for (let flavor of flavorArray) {
      flavor = flavor.trim().toLowerCase();
      if (flavorCount[flavor]) {
        flavorCount[flavor]++;
      } else {
        flavorCount[flavor] = 1;
      }
    }
  
    return flavorCount;
  }
  
  const input = prompt("Enter your froyo flavors separated by commas (e.g. vanilla, vanilla, strawberry):");
  
  if (input) {
    const flavorArray = input.split(",");
    const orderSummary = countFlavors(flavorArray);
    console.log("Froyo Order Summary:", orderSummary);
  } else {
    console.log("No order was placed.");
  }