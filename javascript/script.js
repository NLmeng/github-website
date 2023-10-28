const sectionsData = {
  patterns: {
    files: ["behavioral/observer.py"],
    titles: ["Observer Pattern"],
    descriptions: [
      "A pattern that utilizes one-to-many relationships. Best to use when we want to make changes to many dependencies when one thing changes.",
    ],
    outputs: [
      "Steve received message: `Hello there` from Bob \nTina received message: `Hello there` from Bob",
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
