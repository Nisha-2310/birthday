
    const cakeContainer = document.getElementById("cakeContainer");
    const candle = document.getElementById("candle");
    const flame = document.getElementById("flame");
    const smoke = document.getElementById("smoke");
    const status = document.getElementById("status");
    const resetBtn = document.getElementById("resetBtn");
    const decorateBtn = document.getElementById("decorateBtn");
    const clickHint = document.getElementById("clickHint");
    const birthdayText = document.getElementById("birthdayText");

    let cakeClicked = false;
    let candleLit = false;

    // Balloon colors
    const balloonColors = [
      '#ff6b6b', '#4facfe', '#00f2fe', '#ffd700', '#ff8e8e', 
      '#a0522d', '#8b4513', '#ff6b6b', '#4facfe', '#00f2fe'
    ];

    // Create balloon function
    function createBalloon() {
      const balloon = document.createElement('div');
      balloon.className = 'balloon';
      
      // Random position
      const randomX = Math.random() * window.innerWidth;
      const randomColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
      const randomRotate = (Math.random() * 60 - 30) + 'deg';
      const randomXMove = (Math.random() * 200 - 100) + 'px';
      
      // Style the balloon
      balloon.style.left = randomX + 'px';
      balloon.style.background = randomColor;
      balloon.style.setProperty('--random-x', randomXMove);
      balloon.style.setProperty('--random-rotate', randomRotate);
      
      // Add string
      const string = document.createElement('div');
      string.className = 'balloon-string';
      balloon.appendChild(string);
      
      document.body.appendChild(balloon);
      
      // Start animation
      setTimeout(() => {
        balloon.classList.add('rising');
      }, 50);
      
      // Remove balloon after animation
      setTimeout(() => {
        balloon.remove();
      }, 8000);
    }

    // Decorate with multiple balloons
    function decorateWithBalloons() {
      for (let i = 0; i < 15; i++) {
        setTimeout(() => {
          createBalloon();
        }, i * 300);
      }
    }

    cakeContainer.addEventListener("click", (e) => {
      if (!cakeClicked) {
        candle.classList.add("visible");
        cakeClicked = true;
        clickHint.style.display = "none";
        birthdayText.classList.remove("visible");
        status.textContent = "Candle added! Click it to light it up!";
      }
      
        // 🔥 Yahan music play karo
    birthdayMusic.currentTime = 0; // reset start se
    birthdayMusic.play().catch(err => {
      console.log("Autoplay blocked by browser:", err);
    });
    });

    candle.addEventListener("click", (e) => {
      e.stopPropagation();
      if (cakeClicked && !candleLit) {
        flame.classList.add("burning");
        candleLit = true;
        birthdayText.classList.remove("visible");
        status.textContent = "Candle is burning! Click the flame to blow it out!";

      }
    });

    flame.addEventListener("click", (e) => {
      e.stopPropagation();
      if (candleLit) {
        flame.classList.remove("burning");
        smoke.classList.add("rising");
        status.textContent = "Blowing out the candle...";
        birthdayText.classList.remove("visible");

        setTimeout(() => {
          smoke.classList.remove("rising");
          candle.classList.remove("visible");
          cakeClicked = false;
          candleLit = false;
          clickHint.style.display = "block";
          status.textContent = "Candle blown out! Click the cake to start again!";
          birthdayText.classList.add("visible");
        }, 2000);
      }
    });

    resetBtn.addEventListener("click", () => {
      flame.classList.remove("burning");
      candle.classList.remove("visible");
      smoke.classList.remove("rising");
      cakeClicked = false;
      candleLit = false;
      clickHint.style.display = "block";
      birthdayText.classList.remove("visible");
      status.textContent = "Cake reset! Ready to celebrate!";
    });

    decorateBtn.addEventListener("click", () => {
      decorateWithBalloons();
      
      status.textContent = "Decorating with balloons! 🎈";
      
      // Clear status message after balloons finish
      setTimeout(() => {
        if (!cakeClicked && !candleLit) {
          status.textContent = "Ready to celebrate!";
        }
      }, 8500);
    });

    smoke.addEventListener("animationend", () => {
      smoke.classList.remove("rising");
    });
 
    
    