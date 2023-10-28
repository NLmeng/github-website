from abc import ABC, abstractmethod


class Skyline:
    def __init__(self):
        # assume we start with Sunrise
        self.current_phase = SunrisePhase()

    def take_photo(self):
        self.current_phase.take_photo()

    def forward_time(self):
        self.current_phase.forward_time(self)

    def set_phase(self, next_phase):
        self.current_phase = next_phase


class PhaseState(ABC):
    @abstractmethod
    def take_photo(self):
        pass

    def forward_time(self, context):
        print("MOVING FORWARD")


class SunrisePhase(PhaseState):
    def take_photo(self):
        print("Taking a nice photo of the sunrise!")

    def forward_time(self, context):
        super().forward_time(context)
        print(" from Sunrise")
        context.set_phase(DayPhase())


class DayPhase(PhaseState):
    def take_photo(self):
        print("Nothing to take a photo of yet")

    def forward_time(self, context):
        super().forward_time(context)
        print(" from Day")
        context.set_phase(SunsetPhase())


class SunsetPhase(PhaseState):
    def take_photo(self):
        print("Taking an awesome photo of the sunset!")

    def forward_time(self, context):
        super().forward_time(context)
        print(" from Sunset")
        context.set_phase(NightPhase())


class NightPhase(PhaseState):
    def take_photo(self):
        print("Nothing to take a photo of yet")

    def forward_time(self, context):
        super().forward_time(context)
        print(" from Night")
        context.set_phase(SunrisePhase())


sl = Skyline()
for i in range(6):
    sl.take_photo()
    sl.forward_time()
