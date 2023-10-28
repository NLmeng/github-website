class SubsystemA:
    def operation_a(self):
        print("Subsystem A, Method A")

class SubsystemB:
    def operation_b(self):
        print("Subsystem B, Method B")

class SubsystemC:
    def operation_c(self):
        print("Subsystem C, Method C")


class Facade:
    def __init__(self):
        self._subsystem_a = SubsystemA()
        self._subsystem_b = SubsystemB()
        self._subsystem_c = SubsystemC()

    def operation_1(self):
        self._subsystem_a.operation_a()
        self._subsystem_b.operation_b()

    def operation_2(self):
        self._subsystem_b.operation_b()
        self._subsystem_c.operation_c()


facade = Facade()
facade.operation_1()
facade.operation_2()
