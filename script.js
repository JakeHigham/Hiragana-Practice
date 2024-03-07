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

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
}

// Function to start drawing
function startDrawing(event) {
    isDrawing = true;
    const canvas = document.getElementById('stroke-canvas');
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
}

// Function to draw stroke
function draw(event) {
    if (!isDrawing) return;
    const canvas = document.getElementById('stroke-canvas');
    const ctx = canvas.getContext('2d');
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

// Function to stop drawing
function stopDrawing() {
    isDrawing = false;
}

// Initialize app
displayCharacters();
