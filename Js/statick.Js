function matstat () {
   var aprilPrices = [285, 287, 284, 282, 281, 236, 245,
   240, 242, 244, 247, 250, 252, 254, 255, 257, 259, 260,
   262, 264, 265, 267, 268, 269, 270, 272, 273, 274, 275,
   277, 279, 280];

   var minPrice = Math.min(...aprilPrices);
   document.getElementById("minPrice").textContent = minPrice;

   var maxPrice = Math.max(...aprilPrices);
   document.getElementById("maxPrice").textContent = maxPrice;

   var sum = aprilPrices.reduce((total, price) => total + price, 0);
   var average = sum / aprilPrices.length;
   var squaredDifferences = aprilPrices.map(price => Math.pow(price - average, 2));
   var meanSquaredDifference = squaredDifferences.reduce((total, difference) => total + difference, 0) / aprilPrices.length;
   var standardDeviation = Math.sqrt(meanSquaredDifference);
   document.getElementById("stdDeviation").textContent = standardDeviation;
}