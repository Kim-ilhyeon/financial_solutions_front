const starsContainer = document.querySelector(".stars");

for (let i = 0; i < 200; i++) {

    const star = document.createElement("span");

    star.classList.add("star");

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDuration =
        Math.random() * 20 + 20 + "s";

    star.style.animationDelay =
        Math.random() * 10 + "s";

    starsContainer.appendChild(star);
}