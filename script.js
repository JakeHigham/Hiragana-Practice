// All Hiragana and Katakana characters
const hiragana = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん'];
const katakana = ['ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ', 'ス', 'セ', 'ソ', 'タ', 'チ', 'ツ', 'テ', 'ト', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ', 'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ', 'ラ', 'リ', 'ル', 'レ', 'ロ', 'ワ', 'ヲ', 'ン'];

// Function to display characters
function displayCharacters() {
    const characterContainer = document.getElementById('character-container');
    hiragana.forEach(character => {
        const charElement = document.createElement('div');
        charElement.textContent = character;
        charElement.classList.add('character');
        charElement.addEventListener('click', () => showOutlineCard(character));
        characterContainer.appendChild(charElement);
    });
    katakana.forEach(character => {
        const charElement = document.createElement('div');
        charElement.textContent = character;
        charElement.classList.add('character');
        charElement.addEventListener('click', () => showOutlineCard(character));
        characterContainer.appendChild(charElement);
    });
}

// Function to show outline card for stroke order practice
function showOutlineCard(character) {
    const canvas = document.getElementById('stroke-canvas');
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous drawings

    ctx.font = '80px Arial'; // Set font size and style
    ctx.fillText(character, 20, 120); // Draw character at specified position

    canvas.removeEventListener('touchstart', startDrawingTouch);
    canvas.removeEventListener('touchmove', drawTouch);
    canvas.removeEventListener('touchend', stopDrawingTouch);

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('touchstart', startDrawingTouch, {passive: false});
    canvas.addEventListener('touchmove', drawTouch, {passive: false});
    canvas.addEventListener('touchend', stopDrawingTouch, {passive: false});
}

// Function to start drawing with mouse
function startDrawing(event) {
    isDrawing = true;
    const canvas = document.getElementById('stroke-canvas');
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
}

// Function to draw with mouse
function draw(event) {
    if (!isDrawing) return;
    const canvas = document.getElementById('stroke-canvas');
    const ctx = canvas.getContext('2d');
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

// Function to stop drawing with mouse
function stopDrawing() {
    isDrawing = false;
}

// Function to start drawing with touch
function startDrawingTouch(event) {
    event.preventDefault(); // Prevent default touch behavior (e.g., scrolling)
    isDrawing = true;
    const canvas = document.getElementById('stroke-canvas');
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const touchX = event.touches[0].clientX - rect.left;
    const touchY = event.touches[0].clientY - rect.top;
    ctx.beginPath();
    ctx.moveTo(touchX, touchY);
}

// Function to draw with touch
function drawTouch(event) {
    event.preventDefault(); // Prevent default touch behavior (e.g., scrolling)
    if (!isDrawing) return;
    const canvas = document.getElementById('stroke-canvas');
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const touchX = event.touches[0].clientX - rect.left;
    const touchY = event.touches[0].clientY - rect.top;
    ctx.lineTo(touchX, touchY);
    ctx.stroke();
}

// Function to stop drawing with touch
function stopDrawingTouch() {
    isDrawing = false;
}

// Initialize app
displayCharacters();
