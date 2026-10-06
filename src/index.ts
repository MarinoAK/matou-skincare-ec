const header = document.querySelector("#header");

if (header) {
    const response = await fetch(
      `${import.meta.env.BASE_URL}components/header.html`
    );
  const html = await response.text();

  header.innerHTML = html;
}