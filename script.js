const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// Move the No button whenever the mouse gets close
noBtn.addEventListener("mouseover", moveButton);

function moveButton() {

    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const padding = 20;

    const maxX = window.innerWidth - buttonWidth - padding;
    const maxY = window.innerHeight - buttonHeight - padding;

    const x = Math.max(
        padding,
        Math.random() * maxX
    );

    const y = Math.max(
        padding,
        Math.random() * maxY
    );

    noBtn.style.position = "fixed";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// Yes button
yesBtn.addEventListener("click", () => {

    const card = document.querySelector(".card");

    card.innerHTML = `
        <div class="heart">🥰</div>

        <h1>YAY! 💕</h1>

        <p class="subtitle">
            I knew you'd say yes! 🎉
        </p>

        <p class="hint">
            Looks like we have a date. 😌
        </p>
    `;
});
