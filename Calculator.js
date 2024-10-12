var screenDiv = document.getElementById("screen"); // Access by ID

function getValue(value) {
    if (screenDiv) {
        switch (value) {
            case '=':
                // Ensure the innerText is not empty before evaluating
                if (screenDiv.innerText && screenDiv.innerText !== "0") {
                    var result = eval(screenDiv.innerText);
                    if (typeof result === 'number') {
                        screenDiv.innerText = result;
                        console.log(result);
                    } else {
                        screenDiv.innerText = "Error"; // Handle non-numeric results
                    }
                } else {
                    console.log("No expression to evaluate");
                }
                break;

            case 'C':
                // Clear the screen
                screenDiv.innerText = '0';
                console.log("Screen cleared");
                break;

            case 'back':
                // Remove the last character
                if (screenDiv.innerText.length > 1) {
                    screenDiv.innerText = screenDiv.innerText.slice(0, -1);
                } else {
                    screenDiv.innerText = '0'; // Reset to 0 if nothing left
                }
                console.log("Current screen value:", screenDiv.innerText);
                break;

            default:
                // Handle number and operator inputs
                if (screenDiv.innerText === '0') {
                    screenDiv.innerText = value; // Replace 0 with first input
                } else {
                    screenDiv.innerText += value; // Append value
                }
                console.log("Current screen value:", screenDiv.innerText);
        }
    } else {
        console.log("Screen element not found!");
    }
}
