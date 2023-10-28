from abc import abstractmethod


class Observer:
    def __init__(self, name):
        self.name = name
        self.subjects = []

    def watch(self, subject):
        self.subjects.append(subject)

    def notify(self, message):
        for subject in self.subjects:
            subject.update('`' + message + '` from ' + self.name)


class Subject:
    @abstractmethod
    def update(self, message):
        pass

class SubjectA(Subject):
    def __init__(self, name):
        self.name = name

    def update(self, message):
        print(self.name + ' received message: ' + message)


channel = Observer('Bob')
channel.watch(SubjectA('Steve'))
channel.watch(SubjectA('Tina'))
channel.notify('Hello there')
