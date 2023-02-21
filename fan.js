function init() {
        const hiddenBtns = document.querySelectorAll(".hidden");
        const on = document.getElementById("on");
        on.addEventListener("click", function () {
          hiddenBtns.forEach((item) => (item.style.display = "inline-block"));
          Module.ccall(
            "speedUpdate",
            "void",
            ["float", "float", "float"],
            [3, rotateAngle, nr]
          );
          nr = Module.ccall("fnOne", "float");
          rotateAngle = Module.ccall("fnTwo", "float");
          console.log(nr, rotateAngle);
        });

        const off = document.getElementById("off");
        off.addEventListener("click", function () {
          hiddenBtns.forEach((item) => (item.style.display = "none"));
          Module.ccall(
            "speedUpdate",
            "void",
            ["float", "float", "float"],
            [0, rotateAngle, nr]
          );
          nr = Module.ccall("fnOne", "float");
          rotateAngle = Module.ccall("fnTwo", "float");
        });

        const clockwise = document.getElementById("clockwise");
        clockwise.addEventListener("click", function () {
          Module.ccall(
            "speedUpdate",
            "void",
            ["float", "float", "float"],
            [1, rotateAngle, nr]
          );
          nr = Module.ccall("fnOne", "float");
          rotateAngle = Module.ccall("fnTwo", "float");
        });

        const anticlockwise = document.getElementById("anticlockwise");
        anticlockwise.addEventListener("click", function () {
          Module.ccall(
            "speedUpdate",
            "void",
            ["float", "float", "float"],
            [-1, rotateAngle, nr]
          );
          nr = Module.ccall("fnOne", "float");
          rotateAngle = Module.ccall("fnTwo", "float");
        });

        const increaseButton = document.getElementById("increasesButton");
        increaseButton.addEventListener("click", function () {
          Module.ccall(
            "speedUpdate",
            "void",
            ["float", "float", "float"],
            [2, rotateAngle, nr]
          );
          nr = Module.ccall("fnOne", "float");
          rotateAngle = Module.ccall("fnTwo", "float");
        });

        const decreaseButton = document.getElementById("decreasesButton");
        decreaseButton.addEventListener("click", function () {
          Module.ccall(
            "speedUpdate",
            "void",
            ["float", "float", "float"],
            [0.5, rotateAngle, nr]
          );
          nr = Module.ccall("fnOne", "float");
          rotateAngle = Module.ccall("fnTwo", "float");
        });

        const canvas = document.getElementsByTagName("canvas")[0];
        const c = canvas.getContext("2d");

        c.translate(400, 400);
        let rotateAngle = 0.005;
        let nr = rotateAngle;

        function draw(time) {
          //console.log(time);
          c.clearRect(-400, -400, canvas.width, canvas.height);
          c.beginPath();
          c.fillStyle = "hsl(25,100%,50%)";
          c.moveTo(200, 0);

          for (let angle = 0; angle < 2 * Math.PI; angle += 0.01) {
            let x = 200 * Math.cos(3 * angle) * Math.cos(angle);
            let y = 200 * Math.cos(3 * angle) * Math.sin(angle);
            c.lineTo(x, y);
          }

          c.fill();
          c.rotate(rotateAngle);
          requestAnimationFrame(draw);
        }

        requestAnimationFrame(draw);
      }

      //invoke function init once document is fully loaded
      window.addEventListener("load", init);