function loginWithDiscord() {
  window.location.href =
    "https://clm-backend-mi99.onrender.com/auth/discord";
}

// Login status
window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const status = document.getElementById("authStatus");

  if (!status) return;

  if (params.get("auth") === "success") {
    status.innerText = "Status: Logged in as " + params.get("user");
    status.style.color = "lime";
  }

  if (params.get("auth") === "failed") {
    status.innerText = "Status: Login failed";
    status.style.color = "red";
  }
});

// Show/hide command box
function toggleCommandBox() {
  const box = document.getElementById("commandBox");

  if (box.style.display === "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
}

// Send command to backend
function runCommand() {
  const command = document.getElementById("commandInput").value;
  const status = document.getElementById("commandStatus");

  if (!command.trim()) {
    status.innerText = "Please enter a command.";
    status.style.color = "orange";
    return;
  }

  fetch("https://clm-backend-mi99.onrender.com/command", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      command: command
    })
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);

      if (data.error) {
        status.innerText = "Failed: " + data.error;
        status.style.color = "red";
        return;
      }

      status.innerText = "Command sent!";
      status.style.color = "lime";
    })
    .catch(err => {
      console.error(err);

      status.innerText = "Request failed";
      status.style.color = "red";
    });
}
