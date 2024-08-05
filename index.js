const inputs = document.querySelectorAll("input");

function submit(event) {
    event.preventDefault(); // Prevent the form from submitting
    inputs.forEach(input => {
        if (input.value.trim() === "") {
            input.style.border = "solid hsl(0, 66%, 54%) 1px";
        } else {
            input.style.border = "solid black 1px"; // Reset background color if input is valid
        }
    });
}

document.getElementById("submitBtn").addEventListener("click", submit);
