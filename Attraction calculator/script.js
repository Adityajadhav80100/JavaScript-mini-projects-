const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const boy = document.getElementById("boy").value;
  const girl = document.getElementById("girl").value;

  const l1 = boy.length;
  const l2 = girl.length;

  const result = Math.pow((l1 + l2) * 2, 2) % 100;

  document.getElementById("result").textContent = result + "%";

  form.reset();
});