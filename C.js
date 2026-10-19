console.log("===== PART C: IKIMINA SAVINGS ANALYSIS =====");


let members = [
    { name: "Marie", savings: 25000 },
    { name: "Jean", savings: 50000 },
    { name: "Alice", savings: 10000 }
];


for (let i = 0; i < members.length; i++) {
    let member = members[i];

    console.log("\nMember: " + member.name);
    console.log("Savings: " + member.savings + " RWF");

    if (member.savings >= 50000) {
        console.log("Category: High Saver");
    } else if (member.savings >= 20000) {
        console.log("Category: Medium Saver");
    } else if (member.savings >= 0) {
        console.log("Category: Low Saver");
    } else {
        console.log("Invalid savings amount");
    }
}


let category = "medium";

switch (category) {
    case "high":
        console.log("\nCategory description: Excellent savings");
        break;
    case "medium":
        console.log("\nCategory description: Good savings");
        break;
    case "low":
        console.log("\nCategory description: Keep saving regularly");
        break;
    default:
        console.log("\nUnknown savings category");
}


let totalSavings = 0;

for (let i = 0; i < members.length; i++) {
    totalSavings += members[i].savings;
}

console.log("\nTotal group savings: " + totalSavings + " RWF");


let qualifyingMembers = 0;

for (let i = 0; i < members.length; i++) {
    if (members[i].savings >= 20000) {
        qualifyingMembers++;
    }
}

console.log("Members saving at least 20,000 RWF: " + qualifyingMembers);
