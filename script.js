const container = document.querySelector('.container');

function createGrid(size) {
    container.innerHTML = '';
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        div.style.width = `${600/ size}px`;
        div.style.height = `${600 / size}px`;

        div.addEventListener('mouseover', () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });

        container.appendChild(div);
    }

}

createGrid(16); // Default grid size

const resetBtn = document.getElementById('reset');
resetBtn.onclick = () => {
    const inputSize = parseInt(prompt('Enter new grid size (max 100):'));
    if (inputSize === null) return; // User cancelled the prompt
    if (inputSize < 1 || inputSize > 100) {
        alert('Please enter a number between 1 and 100.');
        return;
    }
    
    createGrid(inputSize);
}