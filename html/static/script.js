window.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('.board');
    const flyers = Array.from(board.children);
  
    // Zufällige Reihenfolge
    flyers.sort(() => Math.random() - 0.5);
  
    // Neu anordnen
    flyers.forEach(flyer => board.appendChild(flyer));
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const flyers = document.querySelectorAll(".flyer");
  
    flyers.forEach(flyer => {
      // Zufällige Startverzögerung und Animation
      const delay = (Math.random() * 4).toFixed(2); // 0–4 Sekunden
      const duration = (3 + Math.random() * 2).toFixed(2); // 3–5 Sekunden
  
      flyer.style.animation = `wobble ${duration}s ease-in-out ${delay}s infinite alternate`;
    });
  });
  