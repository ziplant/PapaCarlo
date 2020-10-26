(() => {
  designSelect.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      designSelect.querySelector("input").value = e.target.dataset.id;
      designSelect.querySelector("span").textContent = e.target.dataset.name;
    }
    designSelect.querySelector("ul").classList.toggle("--hidden");
  });
})();
