const pythonFiles = ['hello_world.py'];

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
            <pre><code class="language-python" id="code-${index}">${text}</code></pre>
            <button onclick="executeCode(${index})">Run Code</button>
        </div>
        <div class="output-section" id="output-${index}"></div>
    `;
    document.querySelector('main').appendChild(container);
    Prism.highlightAll(); 
}

function executeCode(index) {
    const code = document.getElementById(`code-${index}`).innerText;
    const outputDiv = document.getElementById(`output-${index}`);
    outputDiv.innerText = 'Output: This is a static example output.';
}
