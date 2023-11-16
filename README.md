## Project Description

A website that explains Design Patterns and Object-Oriented Designs according to Lymeng Naret.

## Project Design

This diagram represents a high-level view of the architecture.

```mermaid
graph TD
    index_html["index.html"] -->|links to| css_common["common.css"]
    index_html -->|links to| css_main["main.css"]
    index_html -->|links to| css_toc["toc.css"]

    index_html -->|links to| js_data["data.js"]
    index_html -->|links to| js_main["main.js"]
    index_html -->|links to| js_pagination["pagination.js"]
    index_html -->|links to| js_utils["utils.js"]

    index_html -->|links to| ext_prism["Prism.js (Syntax Highlighting)"]
    index_html -->|links to| ext_mermaid["Mermaid.js (Diagrams)"]

    js_data -->|fetch from| json_data["persist/ (JSON Data)"]
    js_main -->|interacts with| js_pagination
    js_main -->|uses| js_utils

    js_main -->|manages| python_scripts["python/ (Python Scripts)"]
    python_scripts -->|subdirectories| py_behavioral["behavioral/"]
    python_scripts -->|subdirectories| py_creational["creational/"]
    python_scripts -->|subdirectories| py_oods["oods/"]
    python_scripts -->|subdirectories| py_structural["structural/"]
    python_scripts --> py_hello_world["hello_world.py"]

    classDef html fill:#f9f,stroke:#333,stroke-width:4px;
    classDef css fill:#ccf,stroke:#333,stroke-width:4px;
    classDef js fill:#ffc,stroke:#333,stroke-width:4px;
    classDef json fill:#cfc,stroke:#333,stroke-width:4px;
    classDef python fill:#fcf,stroke:#333,stroke-width:4px;
    classDef ext fill:#cff,stroke:#333,stroke-width:4px;

    class index_html html;
    class css_common,css_main,css_toc css;
    class js_data,js_main,js_pagination,js_utils js;
    class json_data json;
    class py_behavioral,py_creational,py_oods,py_structural,py_hello_world python;
    class ext_prism,ext_mermaid ext;
```
