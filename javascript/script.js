const sectionsData = {
  patterns: {
    files: ["behavioral/observer.py"],
    titles: ["Observer Pattern"],
    descriptions: [
      "A pattern that utilizes one-to-many relationships. Best to use when we want to make changes to many dependencies when one thing changes.",
    ],
    outputs: [
      "Steve received message: `Hello there` from Bob \n Tina received message: `Hello there` from Bob",
    ],
  },
  ood: {
    files: ["ood/parking_lot.py"],
    titles: ["Parking Lot"],
    descriptions: ["A parking lot is an area for parking vehicles. There is a fixed number of parking spots available for different types of vehicles. The parking time is tracked with a ticket issued to the vehicle at the entrances of the parking lot. When exiting, a vehicle can either pay at the automated exit panel or to the parking agent at the exit using a card or cash payment method."],
  },
};

window.onload = () => {
  loadSection("patterns");
};

function toggleSection(sectionId) {
  document.querySelectorAll(".section").forEach((section) => {
    section.style.display = section.id === sectionId ? "block" : "none";
  });

  if (!sectionsData[sectionId].loaded) {
    loadSection(sectionId);
  }
}

function loadSection(sectionId) {
  const sectionData = sectionsData[sectionId];
  sectionData.files.forEach((file, index) => {
    loadCode(
      file,
      index,
      sectionId,
      sectionData.titles,
      sectionData.descriptions,
      sectionData.outputs
    );
  });
  sectionData.loaded = true;
}

async function loadCode(filename, index, sectionId, titles, descriptions) {
  const response = await fetch(`python/${filename}`);
  const text = await response.text();
  const container = document.createElement("div");
  container.classList.add("container");
  container.innerHTML = `
        <div class="code-section">
            <h2> ${titles[index]} </h2>
            <p class="description">${descriptions[index]}</p>
            <pre><code class="language-python" id="code-${index}">${text}</code></pre>
            ${
              sectionId === "patterns"
                ? '<button onclick="executeCode(' +
                  index +
                  ')">Run Code</button>'
                : ""
            }
        </div>
        <div class="output-section" id="patternOutputs-${index}"></div>
    `;
  document.getElementById(sectionId).appendChild(container);
  Prism.highlightAll();
}

function executeCode(index) {
  const outputDiv = document.getElementById(`patternOutputs-${index}`);
  outputDiv.innerText = sectionsData.patterns.outputs[0];
}
