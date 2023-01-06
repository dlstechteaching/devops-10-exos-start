const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const getCurrentMonth = (date = new Date()) => {
    const currentMonth = date.getMonth();

    return months[currentMonth];
};

const removeLetterXFromArray = (array) => {
    newArray = [];
    array.forEach((element) => {
        if (!element.toLowerCase().includes("x")) newArray.push(element);
    });
    return newArray;
};

const isAdmin = (userId) => userId === "admin" || userId === "sudo";

try {
    document.getElementById("month").innerText = getCurrentMonth();
} catch (err) {
    console.error(JSON.stringify(err));
}

exports.getCurrentMonth = getCurrentMonth;
exports.isAdmin = isAdmin;
exports.removeLetterXFromArray = removeLetterXFromArray;
