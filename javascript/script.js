const pythonFiles = ['behavioral/observer.py'];
const titles = ['Observer Pattern']
const descriptions = [
    'A pattern that utilizes one-to-many relationships. Best to use when we want to make changes to many dependencies when one thing changes.'
];

window.onload = () => {
    pythonFiles.forEach((file, index) => {
        loadCode(file, index);
    });
};

async function loadCode(filename, index) {
    const response = await fetch(`python/${filename}`);
    const text = await response.text();
    const container = document.createElement('div');
    container.classList.add('container');
    container.innerHTML = `
        <div class="code-section">
            <h2> ${titles[index]} </h2>
            <p class="description">${descriptions[index]}</p>
            <pre><code class="language-python" id="code-${index}">${text}</code></pre>
            <button onclick="executeCode(${index})">Run Code</button>
        </div>
        <div class="output-section" id="output-${index}"></div>
    `;
    document.querySelector('main').appendChild(container);
    Prism.highlightAll();
}

const outputs = [
    'Steve received message: `Hello there` from Bob \n Tina received message: `Hello there` from Bob',
];

function executeCode(index) {
    const outputDiv = document.getElementById(`output-${index}`);
    outputDiv.innerText = outputs[0];
}
