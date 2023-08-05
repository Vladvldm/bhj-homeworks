const textarea = document.getElementById("editor");
const clearBtn = document.getElementById("clear-btn");
const editorFieldText = {};

textarea.addEventListener('input', (e) => {
    localStorage.setItem('text', textarea.value);
});

window.onload = function() {
	let newText = localStorage.getItem('text');
	textarea.value = newText;
};