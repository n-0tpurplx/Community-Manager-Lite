function loginWithDiscord() {
  window.location.href =
    "https://clm-backend-mi99.onrender.com/auth/discord";
}

// login status handler
window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const status = document.getElementById("authStatus");

  if (!status) return;

  if (params.get("auth") === "success") {
    const user = params.get("user");

    status.innerText = "Status: Logged in as " + user;
    status.style.color = "lime";
  }

  if (params.get("auth") === "failed") {
    status.innerText = "Status: Login failed";
    status.style.color = "red";
  }
});

// toggle command input
function toggleCommandBox() {
  const box = document.getElementById("commandBox");
  box.style.display = box.style.display === "none" ? "block" : "none";
}

// fake command execution (UI only)
function fakeRunCommand() {
  const input = document.getElementById("commandInput").value;
  const status = document.getElementById("commandStatus");

  if (!input) {
    status.innerText = "Please enter a command.";
    status.style.color = "orange";
    return;
  }

  status.innerText = `Executed: ${input} (not real yet)`;
  status.style.color = "cyan";
}
