from abc import ABC, abstractmethod


class Servable(ABC):
    @abstractmethod
    def serve(self):
        pass

class RegularSalmonDinner(Servable):
    def __init__(self, salmon_weight):
        print(f"buying regular for salmon weight: {salmon_weight}")

    def serve(self):
        print("done regular")

class PeanutFreeSalmonDinner(Servable):
    def __init__(self, salmon_weight):
        print(f"buying p-free for salmon weight: {salmon_weight}")

    def serve(self):
        print("done p-free")


class SalmonDinnerMaker(ABC):
    @abstractmethod
    def construct_appropriate_dinner(self, weight):
        pass

class RegularSalmonDinnerMaker(SalmonDinnerMaker):
    def construct_appropriate_dinner(self, weight):
        return RegularSalmonDinner(weight)

class PeanutFreeSalmonDinnerMaker(SalmonDinnerMaker):
    def construct_appropriate_dinner(self, weight):
        return PeanutFreeSalmonDinner(weight)


class GuestList:
    def __init__(self):
        # assume 10 guests
        self.size = 10  
        # assume peanut allergy
        self.allergies = ["peanut"]  

    def size(self):
        return self.size

    def allergies(self):
        return self.allergies

def get_guest_list():
    return GuestList()


def init_factory(guest_list):
    if "peanut" in guest_list.allergies():
        return PeanutFreeSalmonDinnerMaker()
    else:
        return RegularSalmonDinnerMaker()


dinner = None
guest_list = get_guest_list()
dinner_maker = init_factory(guest_list)
dinner = dinner_maker.construct_appropriate_dinner(guest_list.size())
dinner.serve()
