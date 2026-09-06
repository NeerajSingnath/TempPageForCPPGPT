const title = document.querySelector("h1");

document.addEventListener("mousemove", (event) => {

  const x = (window.innerWidth / 2 - event.clientX) / 80;
  const y = (window.innerHeight / 2 - event.clientY) / 80;

  title.style.transform = `translate(${x}px, ${y}px)`;
});
