# Problem Statement: https://www.educative.io/courses/grokking-the-low-level-design-interview-using-ood-principles/getting-ready-parking-lot

# Not handling multiple floors.
# Simple algorithms to find, add, remove from spots
# Simple (not really secure) way to process payments
# Not handling distribution of spots for different sizes
# Assuming synchrony

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

class ParkingLot:
    def __init__(self, name, capacity):
        self.name = name
        self.tickets = []
        self.spots = {}
        self.capacity = capacity
        # assuming even split
        for index in range(capacity):
            vehicleSize = (index % 3) + 1
            self.spots[index] = ParkingSpot(vehicleSize)
        # assuming there is an API to get more information about this parking lot
        self.info = fetch('/api/get/${name}')
    
    def find_spot(self, vehicle):
        for spot in self.spots.values():
            if spot.is_available() and spot.can_fit(vehicle):
                return spot
        return None

    def park(self, vehicle):
        spot = self.find_spot(vehicle)
        if spot is None:
            return None
        spot.park(vehicle)
        ticket = Ticket(vehicle, spot)
        self.tickets.append(ticket)
        return ticket

    def exit(self, ticket, payment_method):
        if not ticket.is_paid():
            if not PaymentPanel.process(ticket, payment_method):
                return False
        ticket.spot.remove_vehicle()
        return True

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
        return fetch('/api/fee/${self.issued_at}/${self.vehicle.size}')

class PaymentPanel:
    def __init__ (self, location):
        self.location = location

    def process(self, ticket, payment_method):
        # assuming there is an API to process payment
        price = ticket.calculate_fee()
        payment = fetch('/api/pay/${price}/${payment_method}')
        if payment:
            ticket.paid_at = datetime.now()
            return True
        return False