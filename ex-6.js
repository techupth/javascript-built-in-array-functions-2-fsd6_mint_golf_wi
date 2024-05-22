const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  let message;
  if (carCollection.includes(carBrand) === true) {
    message = `${carBrand} has already existed in the ${
      carCollection.indexOf(carBrand) + 1
    } position of car collection.`;
  } else {
    carCollection.push(carBrand);
    message = `ew car collection is : ${carCollection}.`;
  }
  return message;
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.
