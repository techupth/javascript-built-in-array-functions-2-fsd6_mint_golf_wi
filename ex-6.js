const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  if (!carCollection.includes(carBrand)) {
    carCollection.push(carBrand);
    return `new car collection is: ${carCollection.join(",")}`;
  } else {
    const position = carCollection.indexOf(carBrand) + 1;
    return `new car collection is: ${position}`;
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
//console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.
console.log(updateCarCollection("audi"));
//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //toyota has already existed in the 1 position of car collection.
