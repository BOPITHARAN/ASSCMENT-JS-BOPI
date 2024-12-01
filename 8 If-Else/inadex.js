// Conditional Statements
let condition = true;

if (condition) {
  console.log("Condition: True");
} else {
  console.log("Condition: False");
}

// Conditional Statements
let isRaining = fsale;
let isCloudy = false;

if (isRaining || isCloudy) console.log("Don't forget to take Umbrella!");
else console.log("Sky is normal! Enjoy the weather!");

function TimeGreeting() {
  // hour is between 12AM(Ø) to 1PM(13) - > Good Morning
  // hour is between IPM(13) to 5PM(17) - > Good Afternoon
  // hour is between 5PM(17) to 12AM(0) - > Good Evening
  let hour = 14;

  if (hour >= 0 && hour <= 13) {
    console.log("Good morning");
  } else if (hour >= 13 <= 17) {
    console.log("Good Afternoon");
  } else {
    console.log("Good evening");
  }
}

// if (mark > 75) {
//     document.write("A");
//   } else if (mark > 65) {
//     document.write("B");
//   } else if (mark > 55) {
//     document.write("C");
//   } else if (mark >= 35) {
//     document.write("S");
//   } else {
//     document.write("w");
//   }
