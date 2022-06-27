function onLoad() {
  return Math.floor(Math.random() * 42 + 1);
}

fetch(`https://rickandmortyapi.com/api/character?page=${onLoad()}`)
  .then((response) => response.json())
  // .catch
  .then((data) => getData(data));

function createElements(imgs, name, gender, stats, location) {
  const box = document.createElement("div");
  box.classList.add("box");
  const section = document.querySelector("section");
  const imgContent = document.createElement("div");
  imgContent.classList.add("img-content");

  const content = document.createElement("div");
  content.innerHTML = `<h1>${name}</h1>`;
  content.innerHTML += `<p> ${stats} - ${gender}  </p>`;
  content.innerHTML += `<span>Last seen in:</span> <br>${location}`;
  content.classList.add("content");

  const img = document.createElement("img");
  img.src = imgs;
  section.appendChild(box);
  box.appendChild(imgContent);
  imgContent.appendChild(img);
  box.appendChild(content);
}

function getData(data) {
  const array = data.results;
  for (i = 0; i <= array.length - 1; i++) {
    const image = array[i]?.image;
    const name = array[i].name;
    const gender = array[i].gender;
    const status = array[i].status;
    const location = array[i].location.name;
    createElements(image, name, gender, status, location);
  }
}
