switch (condition) {
    case 1:
        console.log("1");
    case 2:
        console.log("2");
    default:
        console.log("Default Behaviour");
}


// .................................

let grade = "A";
switch (grade) {
    case "S":
        console.log("Super Grade");
        break;
    case "A":
    case "b": // two value one output............
        console.log("Excellent Grade");
        break;
    case "E": console.log("Just Pass!");
        break;
    case "U":
        console.log("Failed Grade")
    default:
        console.log("Unknown Grade");
};


