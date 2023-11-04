const sectionsData = {
  patterns: {
    files: [
      "behavioral/observer.py",
      "behavioral/state.py",
      "behavioral/strategy.py",
      "behavioral/visitor.py",
      "creational/factory.py",
      "creational/singleton.py",
      "structural/composite.py",
      "structural/decorator.py",
      "structural/facade.py",
    ],
    titles: [
      "Observer Pattern",
      "State Pattern",
      "Strategy Pattern",
      "Visitor Pattern",
      "Factory Pattern",
      "Singleton Pattern",
      "Composite Pattern",
      "Decorator Pattern",
      "Facade Pattern",
    ],
    descriptions: [
      "A pattern that utilizes one-to-many relationships. Best to use when we want to make changes to many dependencies when one thing changes.",
      "A pattern that allows an object to alter its behavior when its internal state changes, providing a way to structure code in a manner that encapsulates variations in behavior for different states. It's beneficial when an object's behavior is contingent on its state, and it must change its behavior at run-time depending on that state.",
      "A pattern that utilizes a family of algorithms, encapsulates each one of them, and makes them interchangeable. It allows the algorithm to vary independently from the clients that use it. This is beneficial when a client object has to choose among multiple strategies to perform a certain action and can switch strategies dynamically as needed.",
      "A pattern that lets you add further operations to objects without having to modify them. It's useful when you have a collection of objects with different interfaces, and you want to perform operations on these objects that depend on their concrete classes.",
      "A pattern that is used when a system should be independent of how its products are created. It centralizes the creation of objects, thus controlling the creation process by keeping object creation in one place. This pattern is beneficial when a system needs to be maintained and when a system has families of objects that need to share a common behavior.",
      "A pattern that ensures a class has only one instance and provides a global point of access to that instance. It's useful when exactly one object is needed to coordinate actions across the system. It achieves this by having a private constructor and a static method to provide access to the instance.",
      "A pattern that allows individual objects and composites of that objects to be treated uniformly. This structure enables recursive composition and client code can treat individual objects and compositions uniformly, making it easier to manage and manipulate hierarchies of objects.",
      "A pattern that provides a way to attach new behaviors to objects by placing these objects inside special wrapper class. This pattern is useful when there is a need to extend capabilities of classes in a scalable and flexible way.",
      "A pattern that offers a unified and simplified interface to a complex subsystem. It helps to reduce complexity and allows the client to interact with the subsystem in a convenient way.",
    ],
    outputs: [
      "Steve received message: `Hello there` from Bob \nTina received message: `Hello there` from Bob",
      "Taking a nice photo of the sunrise!\nMOVING FORWARD from Sunrise\nNothing to take a photo of yet\nMOVING FORWARD from Day\nTaking an awesome photo of the sunset!\nMOVING FORWARD from Sunset\nNothing to take a photo of yet\nMOVING FORWARD from Night\nTaking a nice photo of the sunrise!\nMOVING FORWARD from Sunrise\nNothing to take a photo of yet\nMOVING FORWARD from Day\n",
      "performing algorithm 1\nperforming algorithm 2\n",
      "Hello \nGoodbye",
      "buying p-free for salmon weight: 10 \ndone p-free",
      "creating Singleton \nreturning a previous instance \nreturning a previous instance",
      `
      performing at Composite
      performing at Leaf
      performing at Composite
      performing at Leaf
      performing at Leaf
      performing at Leaf

      Composite (c2)
      │
      ├── Leaf
      │
      ├── Composite (c1)
      │   │
      │   └── Leaf
      │
      ├── Leaf
      │
      └── Leaf
      `,
      "decorating B \ndecorating A \ndoing A",
      "Subsystem A, Method A \nSubsystem B, Method B \nSubsystem B, Method B \nSubsystem C, Method C",
    ],
  },
  ood: {
    files: ["ood/parking_lot.py"],
    titles: ["Parking Lot"],
    descriptions: [
      "A parking lot is an area for parking vehicles. There is a fixed number of parking spots available for different types of vehicles. The parking time is tracked with a ticket issued to the vehicle at the entrances of the parking lot. When exiting, a vehicle can either pay at the automated exit panel or to the parking agent at the exit using a card or cash payment method.",
    ],
    diagrams: [
      `
      classDiagram
      class VehicleSize{
          SMALL = 1
          MEDIUM = 2
          LARGE = 3
      }
      
      class PaymentMethod{
          CREDIT = 1
          DEBIT = 2
          CASH = 3
      }
      
      class APIHandler{
          +static fetch(url : string) : void
      }
      
      class ParkingLot{
          -name : string
          -spot_manager : SpotManager
          -ticket_manager : TicketManager
          -api_handler : APIHandler
          +park(vehicle : Vehicle) : Ticket
          +exit(ticket : Ticket, payment_method : PaymentMethod) : void
      }
      
      class SpotManager{
          -spots : dict
          +find_spot(vehicle : Vehicle) : ParkingSpot
          +free_spot(spot : ParkingSpot) : void
      }
      
      class TicketManager{
          -tickets : list
          +issue_ticket(vehicle : Vehicle, spot : ParkingSpot) : Ticket
          +close_ticket(ticket : Ticket) : void
      }
      
      class ParkingSpot{
          -vehicleSize : VehicleSize
          -vehicle : Vehicle
          +is_available() : bool
          +can_fit(vehicle : Vehicle) : bool
          +park(vehicle : Vehicle) : void
          +remove_vehicle() : void
      }
      
      class Vehicle{
          -license_plate : string
      }
      
      class SmallVehicle{
          -size : VehicleSize
      }
      
      class MediumVehicle{
          -size : VehicleSize
      }
      
      class LargeVehicle{
          -size : VehicleSize
      }
      
      class Ticket{
          -vehicle : Vehicle
          -spot : ParkingSpot
          -issued_at : datetime
          -paid_at : datetime
          +is_paid() : bool
          +calculate_fee() : float
      }
      
      class PaymentProcessor{
          -api_handler : APIHandler
          +process(ticket : Ticket, payment_method : PaymentMethod) : bool
      }
      
      Vehicle <|-- SmallVehicle
      Vehicle <|-- MediumVehicle
      Vehicle <|-- LargeVehicle
      ParkingLot --> SpotManager
      ParkingLot --> TicketManager
      ParkingLot --> APIHandler
      SpotManager --> ParkingSpot
      TicketManager --> Ticket
      ParkingSpot --> Vehicle
      Ticket --> Vehicle
      Ticket --> ParkingSpot
      PaymentProcessor --> APIHandler
      PaymentProcessor --> Ticket
      ParkingLot --> PaymentProcessor
  `,
    ],
  },
};

window.onload = () => {
  populateTOC();
  loadSection("patterns");
};

function populateTOC() {
  const toc = document.getElementById("toc");
  sectionsData.patterns.titles.forEach((title, index) => {
    const tocItem = document.createElement("a");
    tocItem.href = `#pattern-${index}`;
    tocItem.innerText = title;
    // tocItem.classList.add("center");
    tocItem.onclick = (e) => {
      e.preventDefault();
      document.getElementById(`pattern-${index}`).scrollIntoView({
        behavior: "smooth",
      });
    };
    toc.appendChild(tocItem);
  });
}

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
      sectionData.outputs,
      sectionData.diagrams
    );
  });
  sectionData.loaded = true;
}

async function loadCode(
  filename,
  index,
  sectionId,
  titles,
  descriptions,
  outputs,
  diagrams
) {
  const response = await fetch(`python/${filename}`);
  const text = await response.text();
  const container = document.createElement("div");
  container.id = `pattern-${index}`;
  container.classList.add("container");
  container.innerHTML = `
        <div class="code-section">
            <h2> ${titles[index]} </h2>
            <p class="description">${descriptions[index]}</p>
            <pre><code class="language-python" id="code-${index}">${text}</code></pre>
        </div>
        <div class="output-section" id="patternOutputs-${index}">
            ${
              sectionId === "patterns"
                ? `<div> Output: 
                <pre class='white-text'>${outputs ? outputs[index] : ""}</pre>
                   </div>`
                : `<div class="mermaid center">
                    ${diagrams ? diagrams[index] : ""}
                  </div>`
            }
        </div>
    `;
  document.getElementById(sectionId).appendChild(container);
  Prism.highlightAll();
  if (sectionId === "ood" && diagrams)
    mermaid.init(undefined, document.querySelectorAll(".mermaid"));
}
