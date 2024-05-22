let crimeRecordNames = [
  "Theodora Milenko",
  "Tinashe Benigno",
  "Mahalia Priyanka",
  "Maisy Sudhir",
];

function searchCrimeRecord(name) {
  // Start coding here
  const crimeRecord = name.map((nameCrime) => {
    if (nameCrime.includes("Tinashe Benigno")) {
      console.log(nameCrime);
      return `${nameCrime} has a crime record!!!`;
    } else {
      return `${nameCrime} has no crime record`;
    }
  });

  return crimeRecord;
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ไม่เคยมีประวัติเกี่ยวกับอาชญากรรม
//"Dilan Sandra has no crime record"

console.log(searchCrimeRecord(crimeRecordNames));

//ในกรณีที่เคยมีประวัติเกี่ยวกับอาชญากรรม
//"Tinashe Benigno has crime record !!!"
