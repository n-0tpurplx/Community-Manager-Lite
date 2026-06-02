function loginWithDiscord() {
  window.location.href =
    "https://clm-backend-mi99.onrender.com/auth/discord";
}

// login status
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

// toggle command box
function toggleCommandBox() {
  const box = document.getElementById("commandBox");
  box.style.display = box.style.display === "none" ? "block" : "none";
}

// REAL COMMAND SEND
function fakeRunCommand() {
  const input = document.getElementById("commandInput").value;
  const status = document.getElementById("commandStatus");

  if (!input) {
    status.innerText = "Enter a command";
    status.style.color = "orange";
    return;
  }

  fetch("https://clm-backend-mi99.onrender.com/command", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      command: input
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      status.innerText = "Command sent ✔";
      status.style.color = "lime";
    } else {
      status.innerText = "Failed: " + data.error;
      status.style.color = "red";
    }
  })
  .catch(() => {
    status.innerText = "Network error";
    status.style.color = "red";
  });
}
