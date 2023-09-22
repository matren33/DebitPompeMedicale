const valueElement = document.getElementById("debit-display");

// Adding x to #debit-display
function add(x) {
    // Convert the current value to a number
    let currentValue = parseInt(valueElement.textContent);

    currentValue += x;

    // Check if the result is greater than 1000 and adjust it
    if (currentValue >= 1000) {
        currentValue -= 1000;
    }
    else if (currentValue <= 0) {
        currentValue = 0;
    }

    valueElement.textContent = currentValue;
}
