class Singleton:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            print("creating Singleton")
            cls._instance = super().__new__(cls)
        else:
            print("returning a previous instance")
        return cls._instance


instance = Singleton()
# attempt to get new instances would only refer to the previous one
instance2 = Singleton()
instance3 = Singleton()
