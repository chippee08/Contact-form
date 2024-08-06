document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll("input[type='text'], input[type='checkbox'], textarea");

    function submit(event) {
        event.preventDefault(); // Prevent the form from submitting
        inputs.forEach(input => {
            if (input.type === 'checkbox') {
                if (!input.checked) {
                    input.closest('div').style.border = "solid hsl(0, 66%, 54%) 1px";
                } else {
                    input.closest('div').style.border = "none"; // Reset border color if input is valid
                }
            } else {
                if (input.value.trim() === "") {
                    input.style.border = "solid hsl(0, 66%, 54%) 1px";
                } else {
                    input.style.border = "solid black 1px"; // Reset border color if input is valid
                }
            }
        });
    }

    document.getElementById("submitBtn").addEventListener("click", submit);
});
