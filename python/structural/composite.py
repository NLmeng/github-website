from abc import abstractmethod


class Component:
    @abstractmethod
    def operation(self):
        pass


class Leaf(Component):
    def operation(self):
        print("performing at Leaf")


class Composite(Component):
    def __init__(self):
        self.children = []

    def operation(self):
        print("performing at Composite")
        for child in self.children:
            child.operation()

    def add(self, child):
        self.children.append(child)

    def remove(self, child):
        # Assuming child is present, else handle exception
        self.children.remove(child)

    def get_child(self, index):
        # Assuming index is valid, else handle exception
        return self.children[index]


c1 = Composite()
c1.add(Leaf())
c2 = Composite()
c2.add(Leaf())
c2.add(c1)
c2.add(Leaf())
c2.add(Leaf())
c2.operation()
