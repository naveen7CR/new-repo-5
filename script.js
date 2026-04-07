// TASK MANAGER
function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") return;

    let li = document.createElement("li");
    li.innerHTML = `${task} <button onclick="deleteTask(this)">❌</button>`;

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function deleteTask(btn) {
    btn.parentElement.remove();
}

function clearTasks() {
    document.getElementById("taskList").innerHTML = "";
}

// NOTES SYSTEM
function saveNote() {
    let note = document.getElementById("noteInput").value;

    if (note === "") return;

    let div = document.createElement("div");
    div.classList.add("note");
    div.innerHTML = `
        <p>${note}</p>
        <button onclick="this.parentElement.remove()">Delete</button>
    `;

    document.getElementById("notesContainer").appendChild(div);
    document.getElementById("noteInput").value = "";
}

// CLOCK
function updateClock() {
    let now = new Date();
    let time = now.toLocaleTimeString();
    document.getElementById("clock").innerText = time;
}

setInterval(updateClock, 1000);

// THEME SWITCH
function changeTheme(theme) {
    document.body.className = theme;
}

// EXTRA FEATURES FOR MORE CODE (CONTRIBUTIONS)

// Random Quotes
const quotes = [
    "Stay consistent 💪",
    "Push code daily 🚀",
    "Small commits matter 📈",
    "Code. Commit. Repeat 🔁"
];

function showQuote() {
    let random = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(random);
}

setInterval(showQuote, 5000);

// Fake Data Generator
function generateData() {
    let data = [];
    for (let i = 0; i < 50; i++) {
        data.push("Data Item " + i);
    }
    console.log(data);
}

generateData();

// Scroll Event
window.addEventListener("scroll", () => {
    console.log("Scrolling...");
});

// Keyboard Shortcut
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

// Load Message
window.onload = () => {
    console.log("Dashboard Loaded 🚀");
};