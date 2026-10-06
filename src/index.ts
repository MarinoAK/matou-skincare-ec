const header = document.querySelector("#header");

if (header) {
  const response = await fetch("../components/header.html");
  const html = await response.text();

  header.innerHTML = html;
}