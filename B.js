console.log("===== IKIMINA MEMBER DETAILS =====");


let memberName = "  ujeNEZA marie grace  ";


let formattedName = memberName.trim().toLowerCase()
    .split(" ")
    .map(name => name.charAt(0).toUpperCase() + name.slice(1))
    .join(" ");



let phone = "0783317460";


let savings = 25000;


console.log("Member Name: " + formattedName);
console.log("Phone Number: " + phone);
console.log("Savings: " + savings.toLocaleString("en-US") + " RWF");
