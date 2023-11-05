const patterns = [
  "observer",
  "state",
  "strategy",
  "visitor",
  "factory",
  "singleton",
  "composite",
  "decorator",
  "facade",
];
const oods = ["parking_lot"];
const sectionsData = {
  patterns: {
    loaded: false,
  },
  oods: {
    loaded: false,
  },
};

async function loadJSONData(filedir) {
  const response = await fetch(`./persist/${filedir}.JSON`);
  return response.json();
}

window.onload = async () => {
  for (const pattern of patterns) {
    sectionsData.patterns[pattern] = await loadJSONData(pattern);
  }

  for (const ood of oods) {
    sectionsData.oods[ood] = await loadJSONData(ood);
  }

  populateTOC("patterns", sectionsData);
  loadSection("patterns", sectionsData);
};

function populateTOC(sectionId, data) {
  const toc = document.getElementById("toc");

  let child = toc.lastElementChild;
  while (child && child.tagName !== "H3") {
    toc.removeChild(child);
    child = toc.lastElementChild;
  }

  Object.values(data[sectionId]).forEach((item, index) => {
    if (index !== 0) {
      const tocItem = document.createElement("a");
      tocItem.href = `#${sectionId}-${index}`;
      tocItem.innerText = item.title;
      tocItem.classList.add("toc-items");
      tocItem.classList.add("pl-2");
      tocItem.onclick = (e) => {
        e.preventDefault();
        document.getElementById(`${sectionId}-${index}`).scrollIntoView({
          behavior: "smooth",
        });
      };
      toc.appendChild(tocItem);
    }
  });
}

function loadSection(sectionId, data) {
  if (data[sectionId].loaded) return;

  const sectionData = data[sectionId];
  Object.values(sectionData).forEach((item, index) => {
    if (index !== 0) {
      loadCode(
        item.file,
        index,
        sectionId,
        item.title,
        item.description,
        item.output,
        item.diagram
      );
    }
  });
  data[sectionId].loaded = true;
}

async function loadCode(
  filename,
  index,
  sectionId,
  title,
  description,
  output,
  diagram
) {
  const response = await fetch(`./python/${filename}`);
  const text = await response.text();
  const container = document.createElement("div");
  container.id = `${sectionId}-${index}`;
  container.classList.add("container");
  container.innerHTML = `
        <div class="code-section">
            <h2> ${title} </h2>
            <p class="description">${description}</p>
            <pre><code class="language-python" id="code-${index}">${text}</code></pre>
        </div>
        <div class="output-section" id="patternOutputs-${index}">
            ${
              sectionId === "patterns"
                ? `<div> Output: 
                    <pre class='white-text'>${output ? output : ""}</pre>
                       </div>`
                : `<div class="mermaid center">
                        ${diagram ? diagram : ""}
                      </div>`
            }
        </div>
    `;
  document.getElementById(sectionId).appendChild(container);
  Prism.highlightAll();
  if (sectionId === "oods" && diagram) {
    mermaid.init(undefined, document.querySelectorAll(".mermaid"));
  }
}
function toggleSection(sectionId) {
  document.querySelectorAll(".section").forEach((section) => {
    if (section.id === sectionId) {
      section.classList.add("section-visible");
    } else {
      section.classList.remove("section-visible");
    }
  });

  populateTOC(sectionId, sectionsData);
  loadSection(sectionId, sectionsData);
}
