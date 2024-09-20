import "tailwindcss/tailwind.css"; 

document.addEventListener("DOMContentLoaded", () => {
  const jsDiv = document.getElementById("jS");
  const tailwindDiv = document.getElementById("TailwinCss");
  const jsBtn = document.getElementById("jsBtn");
  const tailwindBtn = document.getElementById("tailwindBtn");

  jsBtn.classList.add("bg-gray-500");

  const toggleVisibility = (showJs) => {
    jsBtn.classList.toggle("bg-gray-500", showJs);
    tailwindBtn.classList.toggle("bg-gray-500", !showJs);
    jsDiv.classList.toggle("hidden", !showJs);
    tailwindDiv.classList.toggle("hidden", showJs);
  };

  jsBtn.addEventListener("click", () => toggleVisibility(true));
  tailwindBtn.addEventListener("click", () => toggleVisibility(false));
});

