let itemName = "HDMI Cable";
let unitCost = 3.00;
let currentStock = 200;
let reorderLevel = 70;
let targetStock = 250;
let weeklyDemand = 30;
let supplierLeadTimeWeeks = 2;

let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;
let stockDeficit = Math.max(0, targetStock - currentStock);
let reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0;
let estimatedReorderCost = reorderQuantity * unitCost;
let reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks;

console.log(`Item: ${itemName}`);
console.log(`Weeks of Cover: ${weeksOfCover.toFixed(2)}`);
console.log(`Reorder Now?: ${reorderNow ? "Yes" : "No"}`);
console.log(`Recommended Reorder Quantity: ${reorderQuantity}`);
console.log(`Estimated Reorder Cost: $${estimatedReorderCost.toFixed(2)}`);
