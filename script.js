const form = document.getElementsByClassName("theForm")[0];

form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop normal reload

    const selected = document.querySelector('input[name="review"]:checked');

    if (!selected) {
        return;
    } else {
        console.log("Form submitted!");
        localStorage.setItem("review", selected.value);
        window.location.href = "./thankyou.html";
    }
});