// Get references to the HTML elements
const input = document.getElementById("text");
const buttons = document.querySelectorAll(".btn");

// Add a click event listener to each button
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;

        switch (buttonText) {
            case "=":
                try {
                    // Evaluate the expression and update the input field
                    input.value = eval(input.value);
                } catch (error) {
                    // Handle any errors that may occur during evaluation
                    input.value = "Error";
                }
                break;
            case "C":
                // Clear the input field
                input.value = "";
                break;
            case "X":
                // Remove the last character from the input field
                input.value = input.value.slice(0, -1);
                break;
            default:
                // Append the button's text to the input field
                input.value += buttonText;
                break;
        }
    });
});
