// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice  (products,promotionCode){
  let netTotalPrice = 0;
  for (let value of products){
    netTotalPrice +=value.price*value.quantity
  }
  //pomotion
  if(promotionCode === "SALE20"){
    netTotalPrice = (netTotalPrice -netTotalPrice*0.2)
  }else if (promotionCode === "SALE50"){
    netTotalPrice = (netTotalPrice -netTotalPrice*0.5)
  }
  return netTotalPrice
}
console.log(calculateTotalPrice(products,promotionCode))




