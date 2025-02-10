window.onload = function () {
  main();
};

function main() {
  const container = document.getElementById("container");
  let isMouseDown = false;

  for (let i = 0; i < 16 * 16; i++) {
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
