const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
  makeCube(e.x, e.y);
});

function generateColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
}

function makeCube(xPos, yPos) {
  const cube = document.createElement("div");
  cube.classList.add("cube");

  const frontFace = document.createElement("div");
  frontFace.classList.add("face", "front");
  frontFace.style.backgroundColor = generateColor();

  const backFace = document.createElement("div");
  backFace.classList.add("face", "back");
  backFace.style.backgroundColor = generateColor();

  const rightFace = document.createElement("div");
  rightFace.classList.add("face", "right");
  rightFace.style.backgroundColor = generateColor();

  const leftFace = document.createElement("div");
  leftFace.classList.add("face", "left");
  leftFace.style.backgroundColor = generateColor();

  const topFace = document.createElement("div");
  topFace.classList.add("face", "top");
  topFace.style.backgroundColor = generateColor();

  const bottomFace = document.createElement("div");
  bottomFace.classList.add("face", "bottom");
  bottomFace.style.backgroundColor = generateColor();

  cube.appendChild(frontFace);
  cube.appendChild(backFace);
  cube.appendChild(rightFace);
  cube.appendChild(leftFace);
  cube.appendChild(topFace);
  cube.appendChild(bottomFace);

  if (xPos - 100 <= 0) {
    xPos = 20;
    if (yPos - 100 <= 0) {
      yPos = 20;
    } else if (yPos + 100 >= window.innerHeight) {
      yPos = window.innerHeight - 130;
    }
  } else if (xPos + 100 >= window.innerWidth) {
    xPos = window.innerWidth - 130;
    if (yPos + 100 >= window.innerHeight) {
      yPos = window.innerHeight - 130;
    }
  } else if (yPos - 100 <= 0) {
    yPos = 20;
  } else if (yPos + 100 >= window.innerHeight) {
    yPos = window.innerHeight - 130;
    if (xPos + 100 >= window.innerWidth) {
      xPos = window.innerWidth - 130;
    }
  }

  cube.style.left = xPos + "px";
  cube.style.top = yPos + "px";
  container.appendChild(cube);
}
