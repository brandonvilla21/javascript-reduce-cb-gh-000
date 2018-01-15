const couponLocations = [
  { room: 'Living room', amount: 5 },
  { room: 'Kitchen', amount: 2 },
  { room: 'Bathroom', amount: 1 },
  { room: 'Master bedroom', amount: 7 }
];

function couponCounter(totalAmount, location) {
  return totalAmount + location.amount;
}

console.log(couponLocations.reduce((totalAmount, location, 0) => {
  return totalAmount + location.amount;
})); // also prints 15!
