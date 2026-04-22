function addItem() {
    let input = document.getElementById("input");
    let text = input.value;

    if(text === "") {
        alert("Бир нерсе жаз!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = text;

    // Анимация эффект
    li.style.opacity = 0;
    document.getElementById("list").appendChild(li);

    setTimeout(() => {
        li.style.transition = "0.5s";
        li.style.opacity = 1;
    }, 100);

    input.value = "";
}