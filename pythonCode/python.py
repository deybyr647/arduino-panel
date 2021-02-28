from time import sleep
import sys

class Led:
    def __init__(self,pinValue):
        self.pinValue = pinValue
        self.state = 'off'
        self.isOn = False
    
    def changeState(self):
        if(self.isOn):
            self.isOn = False
            self.state = 'off'
        else:
            self.isOn = True
            self.state = 'on'
        
    def checkState(self):
        print('The current state of the Led at pin', self.pinValue, 'is', self.state)

led = Led(3)

led.checkState()

led.changeState()

led.checkState()

print(led.isOn)