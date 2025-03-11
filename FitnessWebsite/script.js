// Countdown Timer
function startCountdown() {
    let timeLeft = 300; // 5 minutes in seconds

    function updateTimer() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;

        if (timeLeft > 0) {
            timeLeft--;
            setTimeout(updateTimer, 1000);
        } else {
            document.querySelector(".countdown").innerHTML = "Time Expired!";
        }
    }

    updateTimer();
}

window.onload = startCountdown;
