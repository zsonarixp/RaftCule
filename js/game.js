const params = new URLSearchParams(window.location.search);
let level = parseInt(params.get("level")) || 1;

const character = localStorage.getItem("character") || "ไม่เลือก";
const username = localStorage.getItem("username") || "ผู้เล่น";

document.getElementById("levelTitle").innerText = `ด่านที่ ${level}`;
document.getElementById("playerInfo").innerText =
  `ผู้เล่น: ${username} | ตัวละคร: ${character}`;

document.getElementById("tip").innerText =
  "คำใบ้: " + (levels[level - 1]?.tip || "");

function checkRule() {
  alert("ยังไม่ผ่านเงื่อนไข ❌ ไม่เป็นไร ลองใหม่!");
}
