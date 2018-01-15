const couponLocations = [
  { room: 'Living room', amount: 5 },
  { room: 'Kitchen', amount: 2 },
  { room: 'Bathroom', amount: 1 },
  { room: 'Master bedroom', amount: 7 }
];

const res = couponLocations.reduce((totalAmount, location) => {
  return totalAmount + location.amount;
}, 0); // also prints 15!
