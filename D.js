console.log("\n===== PART D: REPORT USING FUNCTIONS =====");

let members = [
    { name: "Marie", phone: "0783317460", savings: 25000 },
    { name: "Jean", phone: "0781234567", savings: 50000 },
    { name: "Alice", phone: "0787654321", savings: 10000 }
];


function formatName(name) {
    return name.trim().toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}


function formatPhone(phone) {
    return String(phone).trim();
}


function formatSavings(amount) {
    return amount.toLocaleString("en-US") + " RWF";
}


function getSavingsCategory(amount) {
    if (amount >= 50000) {
        return "High Saver";
    } else if (amount >= 20000) {
        return "Medium Saver";
    } else if (amount >= 0) {
        return "Low Saver";
    } else {
        return "Invalid Savings";
    }
}


function calculateTotal(memberList) {
    let total = 0;

    for (let i = 0; i < memberList.length; i++) {
        total += memberList[i].savings;
    }

    return total;
}


function calculateAverage(memberList) {
    if (memberList.length === 0) {
        return 0;
    }

    return calculateTotal(memberList) / memberList.length;
}


function countTargetMembers(memberList, target) {
    let count = 0;

    for (let i = 0; i < memberList.length; i++) {
        if (memberList[i].savings >= target) {
            count++;
        }
    }

    return count;
}


function generateReport(memberList) {
    console.log("===== IKIMINA MEMBER REPORT =====");

    for (let i = 0; i < memberList.length; i++) {
        let member = memberList[i];

        console.log("\nMember: " + formatName(member.name));
        console.log("Phone: " + formatPhone(member.phone));
        console.log("Savings: " + formatSavings(member.savings));
        console.log("Category: " + getSavingsCategory(member.savings));
    }

    console.log("\nTotal savings: " +
        formatSavings(calculateTotal(memberList)));

    console.log("Average savings: " +
        formatSavings(calculateAverage(memberList)));

    console.log("Members saving at least 20,000 RWF: " +
        countTargetMembers(memberList, 20000));
}


generateReport(members);


console.log("\n===== FUNCTION TESTS =====");

console.log(formatName("  mARIE grace ") === "Marie Grace");
console.log(formatPhone("0783317460") === "0783317460");
console.log(formatSavings(25000) === "25,000 RWF");
console.log(getSavingsCategory(50000) === "High Saver");
console.log(calculateTotal(members) === 85000);
console.log(calculateAverage(members) === 85000 / 3);
console.log(countTargetMembers(members, 20000) === 2);

let emptyMembers = [];
console.log(calculateAverage(emptyMembers) === 0);
