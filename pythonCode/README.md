# Bryan's Ideas
- I want to make it so that we can move a servo through the arguments, meaning we gave an input where they can add a number and then press the button, the number will have to be between **[-90:90]** (*inclusive*) this will then send said number as an argument

- Have a basic LED on and off switch where pressing either an on or off button or just one button will turn it on or off, another idea is maybe controlling an RGB LED where they can give us a color value maybe in HEX and we can convert that into code and then make it so that the LED turns to that color, I know how to do the RGB stuff so maybe think about it

- Use a Ultrasonic SR04 which will rotate using a servo a set value/ user input amount of times and scan, if it detected something in a given range it will show that to the user

- Possibility, use an LCD Module 8x8 dots, like the move the dot project, and let the user pick which ones to turn on using the website and send that data to the code so that the input given is shown on the LCD

Here is some sample code on how one thing may work:
```
import gpiozero as gpio
import sys
import time

led = gpio.LED(17)
servo = gpio.AngularServo(22, min_angle = -90, max_angle=90)

def turnOn():
    led.on()

def turnOff():
    led.off()

def moveServo(angle):
    angle = int(angle)
    servo.angle = angle

if(sys.argv[1]=='on'):
    turnOn()
    time.sleep(10)

elif(sys.argv[1]=='off'):
    turnOff()

elif(sys.argv[1]=='moveServo'):
    moveServo(sys.argv[2])
    time.sleep(20)
```

