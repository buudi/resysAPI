const generateRandomNumber = () => {
    const min = 1000; // Minimum 4-digit number (inclusive)
    const max = 9999; // Maximum 4-digit number (inclusive)
    let randomNumber;

    do {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        const digits = String(randomNumber).split("");
        const uniqueDigits = [...new Set(digits)];

        // Check if the number has at least 2 repeating digits
        if (uniqueDigits.length <= digits.length - 2) {
            break; // Exit the loop if the condition is met
        }
    } while (true);

    return randomNumber;
};

module.exports = {
    generateRandomNumber
};