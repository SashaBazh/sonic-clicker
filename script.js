document.addEventListener('DOMContentLoaded', () => {
    const scoreElement = document.getElementById('score');
    const sonicImage = document.getElementById('sonic-image');
    const scoreCounter = document.getElementById('score-counter');
    const progressBar = document.getElementById('progress-bar');
    let score = 0;

    document.getElementById('click-area').addEventListener('click', (event) => {
        score++;
        scoreElement.textContent = score;

        sonicImage.style.transform = 'scale(0.95)';

        scoreCounter.style.opacity = 1;
        scoreCounter.style.transform = `translate(${event.offsetX}px, ${event.offsetY}px)`;
        setTimeout(() => {
            scoreCounter.style.opacity = 0;
        }, 600);

        // Update progress bar
        progressBar.style.width = `${(score % 100) / 100 * 100}%`;

        // Reset image scale after a short delay
        setTimeout(() => {
            sonicImage.style.transform = 'scale(1)';
        }, 100);

        // Show snack bar if score is a multiple of 100
        if (score % 100 === 0) {
            const snackBar = document.createElement('div');
            snackBar.textContent = '🪙 +100';
            snackBar.style.position = 'fixed';
            snackBar.style.bottom = '20px';
            snackBar.style.left = '50%';
            snackBar.style.transform = 'translateX(-50%)';
            snackBar.style.backgroundColor = '#25223a';
            snackBar.style.color = '#ff8b1f';
            snackBar.style.padding = '10px 20px';
            snackBar.style.borderRadius = '5px';
            document.body.appendChild(snackBar);
            setTimeout(() => {
                document.body.removeChild(snackBar);
            }, 2000);
            progressBar.style.width = '0%';
        }
    });
});