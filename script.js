function loginWithDiscord() {
  window.location.href =
    "https://clm-backend-mi99.onrender.com/auth/discord";
}

// read backend redirect result
const params = new URLSearchParams(window.location.search);

const status = document.getElementById("authStatus");

if (params.get("auth") === "success") {
  const user = params.get("user");

  status.innerText = "Status: Logged in as " + user;
  status.style.color = "lime";
}

if (params.get("auth") === "failed") {
  status.innerText = "Status: Login failed";
  status.style.color = "red";
}
