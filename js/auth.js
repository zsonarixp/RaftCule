function login() {
  const username = document.getElementById("username").value.trim();

  if (!username) {
    alert("กรุณากรอกชื่อผู้ใช้");
    return;
  }

  localStorage.setItem("username", username);
  window.location.href = "character.html";
}
