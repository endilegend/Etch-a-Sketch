window.onload = function () {
  main();
};

function clear() {
  main();
}

function custom(x) {
  const container = document.getElementById("container");
  container.replaceChildren();

  let isMouseDown = false;

  for (let i = 0; i < x * x; i++) {
    let newDiv = document.createElement("div");

    newDiv.style.border = "1px solid rgb(242, 71, 117)";
    newDiv.style.display = "inline-block";
    container.appendChild(newDiv);
    newDiv.addEventListener("mousedown", run);
    function run() {
      newDiv.style.backgroundColor = "black";
      isMouseDown = true;
    }
    newDiv.addEventListener("mousemove", drag);
    function drag() {
      if (isMouseDown) {
        newDiv.style.backgroundColor = "black";
      }
    }

    document.addEventListener("mouseup", stop);
    function stop() {
      isMouseDown = false;
    }
  }
}

function main() {
  const container = document.getElementById("container");
  container.replaceChildren();
  let isMouseDown = false;
  let isDrawing = false;

  container.addEventListener("mousedown", () => {
    isDrawing = true;
  });

  container.addEventListener("mouseup", () => {
    isDrawing = false;
  });

  for (let i = 0; i < 16 * 16; i++) {
    let newDiv = document.createElement("div");

    newDiv.style.border = "1px solid rgb(242, 71, 117)";
    newDiv.style.display = "inline-block";
    container.appendChild(newDiv);

    newDiv.addEventListener("mouseover", () => {
      if (isDrawing) {
        newDiv.style.backgroundColor = "black";
      }
    });

    newDiv.addEventListener("mousedown", () => {
      newDiv.style.backgroundColor = "black";
      isMouseDown = true;
    });
  }
}

function gridSize(x) {
  document.querySelector("#gridValue").textContent = x;
  document.querySelector("#gridValue2").textContent = x;
  custom(x);
}

const reset = document.querySelector("#clear");
reset.addEventListener("click", clear);

const slider = document.querySelector("#slider-container");
slider.addEventListener("input", gridSize());
