from abc import ABC, abstractmethod


class Component(ABC):
    @abstractmethod
    def action(self):
        pass

class ConcreteComponentA(Component):
    def action(self):
        print("doing A")

class ConcreteComponentB(Component):
    def action(self):
        print("doing B")


class Decorator(Component, ABC):
    def __init__(self, component):
        self._component = component

    @abstractmethod
    def action(self):
        pass

class ConcreteDecoratorA(Decorator):
    def action(self):
        print("decorating A")
        self._component.action()

class ConcreteDecoratorB(Decorator):
    def action(self):
        print("decorating B")
        self._component.action()


component_a = ConcreteComponentA()
decorator_a = ConcreteDecoratorA(component_a)
decorator_b = ConcreteDecoratorB(decorator_a)
decorator_b.action()
