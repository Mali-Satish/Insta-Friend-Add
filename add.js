let button = document.getElementById("add");
let data = document.getElementById("data");
let change = 0

button.addEventListener("click", () => {
    if (change == 0) {
        data.innerHTML = "NOW! V R FRIENDS"
        data.style.color = "white"
        button.innerHTML="DELET"
        change=1
    } else {
        data.innerHTML = "STRANGER"
        data.style.color = "red"
        button.innerHTML="ADD"
        change=0

    }
})
