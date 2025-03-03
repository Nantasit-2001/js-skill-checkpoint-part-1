// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// const inventory = [
//   { name: "Apple", price: 35, quantity: 100 },
// 	{ name: "Banana", price: 10, quantity: 2000 },
// 	{ name: "Orange", price: 30, quantity: 60 },
// ];


// เริ่มเขียนโค้ดตรงนี้
let minQuantity = [inventory[0].name,inventory[0].quantity]
for(let value of inventory){
  if(minQuantity[1] > value.quantity){

    minQuantity[0] = value.name;
    minQuantity[1] = value.quantity;
  }
}
console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minQuantity[0]} ซึ่งมี ${minQuantity[1]} ชิ้น`)
