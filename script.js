
const notes = {
    "2025-03-26": { text: "", images: [] },
    "2025-03-27": { text: "", images: [] },
    "2025-03-28": { text: "", images: [] },
    "2025-03-29": { text: "", images: [] },
    "2025-03-30": { text: "", images: [] },
    "2025-03-31": { text: "", images: [] },
    "2025-04-01": { text: "", images: [] },
    "2025-04-02": { text: "", images: [] },
    "2025-04-03": { text: "", images: [] },
    "2025-04-04": { text: "", images: [] },
    "2025-04-05": { text: "", images: [] },
    "2025-04-06": { text: "", images: [] },
    "2025-04-07": { text: "", images: [] },
    "2025-04-08": { text: "", images: [] },
    "2025-04-09": { text: "", images: [] },
    "2025-04-10": { text: "", images: [] },
    "2025-04-11": { text: "", images: [] },
    "2025-04-12": { text: "", images: [] },
    "2025-04-13": { text: "", images: [] },
    "2025-04-14": { text: "", images: [] },
    "2025-04-15": { text: "", images: [] },
    "2025-04-16": { text: "", images: [] },
    "2025-04-17": { text: "", images: [] },
    "2025-04-18": { text: "", images: [] },
    "2025-04-19": { text: "", images: [] },
    "2025-04-20": { text: "", images: [] },
    "2025-04-21": { text: "", images: [] },
    "2025-04-22": { text: "", images: [] },
    "2025-04-23": { text: "", images: [] },
    "2025-04-24": { text: "", images: [] },
    "2025-04-25": { text: "", images: [] },
    "2025-04-26": { text: "", images: [] }
};

const calendar = document.getElementById("calendar");
const noteDisplay = document.getElementById("note-display");
const noteText = document.getElementById("note-text");
const noteImages = document.getElementById("note-images");

function formatDate(date) {
    return date.toISOString().split('T')[0];
}

// Tạo các ngày từ 26/03 đến 26/04
const startDate = new Date("2025-03-26");
const endDate = new Date("2025-04-26");
let currentDate = new Date(startDate);

while (currentDate <= endDate) {
    const dateStr = formatDate(currentDate);
    const dayDiv = document.createElement("div");
    dayDiv.className = "day";
    dayDiv.textContent = dateStr.slice(5);
    dayDiv.onclick = () => showNote(dateStr);
    calendar.appendChild(dayDiv);
    currentDate.setDate(currentDate.getDate() + 1);
}

function showNote(date) {
    const note = notes[date];
    if (note) {
        noteText.textContent = note.text || "";
        noteImages.innerHTML = "";
        if (note.images && note.images.length > 0) {
            note.images.forEach(src => {
                const img = document.createElement("img");
                img.src = src;
                noteImages.appendChild(img);
            });
        }
        noteDisplay.classList.remove("hidden");
    } else {
        noteText.textContent = "No memory saved for this day.";
        noteImages.innerHTML = "";
        noteDisplay.classList.remove("hidden");
    }
}
