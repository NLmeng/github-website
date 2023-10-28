# Problem Statement: https://www.educative.io/courses/grokking-the-low-level-design-interview-using-ood-principles/getting-ready-parking-lot

# Not handling multiple floors.
# Simple algorithms to find, add, remove from spots
# Simple (not really secure) way to process payments
# Not handling distribution of spots for different sizes
# Assuming synchrony

# Considerations:
# 1. Encapsulation: Using getters and setters for controlling access to attributes.
# 2. Single Responsibility Principle: Dividing responsibilities among different classes.
# 3. Open/Closed Principle: Code structure allows for extension without modification.
# 4. Dependency Inversion Principle: Injecting dependencies instead of hard-coding them.
# 5. Liskov Substitution Principle: Ensuring subclasses can stand in for their parent class.
# 6. Composition Over Inheritance: Utilizing composition for modular design.

from datetime import datetime
from enum import Enum

class VehicleSize(Enum):
    SMALL = 1
    MEDIUM = 2
    LARGE = 3

class PaymentMethod(Enum):
    CREDIT = 1
    DEBIT = 2
    CASH = 3

class APIHandler:
    @staticmethod
    def fetch(url):
        # Simulated API call
        pass

class ParkingLot:
    def __init__(self, name, capacity, api_handler):
        self.name = name
        self.spot_manager = SpotManager(capacity)
        self.ticket_manager = TicketManager()
        self.api_handler = api_handler
        # assuming there is an API to get more information about this parking lot
        self.info = self.api_handler.fetch(f'/api/get/{name}')

    def park(self, vehicle):
        spot = self.spot_manager.find_spot(vehicle)
        if spot is None:
            raise Exception("No available spot")
        spot.park(vehicle)
        ticket = self.ticket_manager.issue_ticket(vehicle, spot)
        return ticket

    def exit(self, ticket, payment_method):
        if not ticket.is_paid():
            payment_processor = PaymentProcessor(self.api_handler)
            if not payment_processor.process(ticket, payment_method):
                raise Exception("Payment failed")
        self.spot_manager.free_spot(ticket.spot)
        self.ticket_manager.close_ticket(ticket)

class SpotManager:
    def __init__(self, capacity):
        # assuming even split
        self.spots = {index: ParkingSpot((index % 3) + 1) for index in range(capacity)}

    def find_spot(self, vehicle):
        for spot in self.spots.values():
            if spot.is_available() and spot.can_fit(vehicle):
                return spot
        return None

    def free_spot(self, spot):
        spot.remove_vehicle()

class TicketManager:
    def __init__(self):
        self.tickets = []

    def issue_ticket(self, vehicle, spot):
        ticket = Ticket(vehicle, spot)
        self.tickets.append(ticket)
        return ticket

    def close_ticket(self, ticket):
        ticket.paid_at = datetime.now()

class ParkingSpot:
    def __init__(self, vehicleSize):
        self.vehicleSize = vehicleSize
        self.vehicle = None

    def is_available(self):
        return self.vehicle is None

    def can_fit(self, vehicle):
        return self.vehicleSize >= vehicle.size
    
    def park(self, vehicle):
        self.vehicle = vehicle
    
    def remove_vehicle(self):
        self.vehicle = None

class Vehicle:
    def __init__(self, license_plate):
        self.license_plate = license_plate

class SmallVehicle(Vehicle):
    def __init__(self, license_plate):
        super().__init__(license_plate)
        self.size = VehicleSize.SMALL

class MediumVehicle(Vehicle):
    def __init__(self, license_plate):
        super().__init__(license_plate)
        self.size = VehicleSize.MEDIUM

class LargeVehicle(Vehicle):
    def __init__(self, license_plate):
        super().__init__(license_plate)
        self.size = VehicleSize.LARGE

class Ticket:
    def __init__(self, vehicle, spot):
        self.vehicle = vehicle
        self.spot = spot
        self.issued_at = datetime.now()
        self.paid_at = None
    
    def is_paid(self):
        return self.paid_at is not None
    
    def calculate_fee(self):
        # assuming there is an API to calculate fee based on issued_at, vehicle size, etc.
        return api_handler.fetch(f'/api/fee/{self.issued_at}/{self.vehicle.size}')

class PaymentProcessor:
    def __init__(self, api_handler):
        self.api_handler = api_handler

    def process(self, ticket, payment_method):
        price = ticket.calculate_fee()
        payment = self.api_handler.fetch(f'/api/pay/{price}/{payment_method}')
        if payment:
            ticket.paid_at = datetime.now()
            return True
        return False

# Usage
api_handler = APIHandler()
parking_lot = ParkingLot("Downtown Lot", 100, api_handler)