body {
    font-family: Arial, sans-serif;
    background-color: white;
    color: #333;
    margin: 0;
    padding: 0;
    text-align: center;
}

.calendar {
    margin: 20px auto;
}

.grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
    max-width: 700px;
    margin: 0 auto;
}

.day {
    padding: 20px;
    background-color: #f0f0f0;
    font-size: 18px;
    color: #a0a0a0;
    cursor: pointer;
    transition: background-color 0.3s;
}

.day:hover {
    background-color: #ffb3cc;
}

.note-card {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    margin: 20px auto;
    text-align: center;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
    .grid {
        grid-template-columns: repeat(3, 1fr); /* 3 columns on small screens */
    }

    .day {
        padding: 15px;
        font-size: 16px;
    }

    .note-card {
        width: 90%; /* Make the card responsive */
        padding: 15px;
    }
}

@media screen and (max-width: 480px) {
    .grid {
        grid-template-columns: repeat(2, 1fr); /* 2 columns on very small screens */
    }

    .day {
        padding: 10px;
        font-size: 14px;
    }

    .note-card {
        width: 95%; /* Make the card full width */
        padding: 10px;
    }
}
