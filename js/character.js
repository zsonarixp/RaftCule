function selectCharacter(type) {
  localStorage.setItem("character", type);
  window.location.href = "game.html?level=1";
}
