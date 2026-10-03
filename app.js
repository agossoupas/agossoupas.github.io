function openG(title, src) {
  document.getElementById("ot").textContent = title;
  document.getElementById("gf").src = src;
  document.getElementById("ov").style.display = "flex";
  document.body.style.overflow = "hidden";
}
function closeG() {
  document.getElementById("ov").style.display = "none";
  document.getElementById("gf").src = "";
  document.body.style.overflow = "";
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeG();
});
