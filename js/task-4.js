function getShippingCost(country){
  const countryChina = "China";
  const deliveryFeeChina = 100;

  const countryChile = "Chile";
  const deliveryFeeChile = 250;

  const countryAustralia = "Australia";
  const deliveryFeeAustralia = 170;

  const countryJamaica = "Jamaica";
  const deliveryFeeJamaica = 120;


  switch (country.toLowerCase()){
    case countryChina.toLowerCase():
      return `Shipping to ${countryChina} will cost ${deliveryFeeChina} credits`;
    case countryChile.toLowerCase():
      return `Shipping to ${countryChile} will cost ${deliveryFeeChile} credits`;
    case countryAustralia.toLowerCase():
      return `Shipping to ${countryAustralia} will cost ${deliveryFeeAustralia} credits`;
    case countryJamaica.toLowerCase():
      return `Shipping to ${countryJamaica} will cost ${deliveryFeeJamaica} credits`;
    default:
      return "Sorry, there is no delivery to your country";
  }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
