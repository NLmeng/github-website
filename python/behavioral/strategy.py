from abc import ABC, abstractmethod


class Context:
    def __init__(self):
        # assume arbitrarily
        self.strategy = Strategy1()

    def change_strategy(self, next_strategy):
        self.strategy = next_strategy

    def perform(self):
        # perform the behavior based on the instantiated Strategy
        self.strategy.algorithm()


class StrategyInterface(ABC):
    @abstractmethod
    def algorithm(self):
        pass

class Strategy1(StrategyInterface):
    def algorithm(self):
        print("performing algorithm 1")

class Strategy2(StrategyInterface):
    def algorithm(self):
        print("performing algorithm 2")


strat = Context()
strat.perform()
strat.change_strategy(Strategy2())
strat.perform()
