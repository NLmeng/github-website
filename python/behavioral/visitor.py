from abc import ABC, abstractmethod


class HelloGoodbyeVisitor(ABC):
    @abstractmethod
    def visit(self, thing):
        pass

class CustomVisitor(HelloGoodbyeVisitor):
    def visit(self, thing):
        if isinstance(thing, Thing1):
            print("Hello")
        elif isinstance(thing, Thing2):
            print("Goodbye")


class Thing(ABC):
    @abstractmethod
    def accept(self, visitor):
        pass

class Thing1(Thing):
    def accept(self, visitor):
        visitor.visit(self)
        thing2 = Thing2()
        thing2.accept(visitor)

class Thing2(Thing):
    def accept(self, visitor):
        visitor.visit(self)


visitor = CustomVisitor()
thing1 = Thing1()
thing1.accept(visitor)
