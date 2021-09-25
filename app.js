const btn = document.querySelector("button");
const inp = document.querySelector("input");
const ul = document.querySelector("ul");

function addGoal() {
  const enterdValue = inp.value;
  const li = document.createElement("li");
  li.textContent = enterdValue;
  ul.appendChild(li);
  inp.value = "";
}

btn.addEventListener("click", addGoal);
