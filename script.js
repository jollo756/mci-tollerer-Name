const groups = document.querySelectorAll(".button-group");

let values = {
    speed: null,
    difficulty: null
};

groups.forEach(group => {
    const buttons = group.querySelectorAll("button");
    const name = group.dataset.name;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            button.classList.add("active");
            values[name] = button.textContent;
        });
    });
});

document.getElementById("submitBtn").addEventListener("click", () => {
    if (!values.speed || !values.difficulty) {
        alert("Please select both values.");
        return;
    }

    
});

document.getElementById("submitBtn").addEventListener("click", () => {
    const feedback = document.getElementById("feedback").value;

    if (!values.speed || !values.difficulty) {
        alert("Please select both ratings.");
        return;
    }

    alert(
        "Geschwindigkeit: " + values.speed + "\n" +
        "Schwierigkeit: " + values.difficulty + "\n" +
        "Feedback: " + feedback
    );
});


const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (box.textContent === "+") {
            box.textContent = "✓";
        } else {
            box.textContent = "+";
        }
    });
});