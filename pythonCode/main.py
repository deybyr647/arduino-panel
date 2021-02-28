import gpiozero as gpio
from time import sleep
import sys

led = gpio.LED(17)
pir = gpio.MotionSensor(4)
buzzer = gpio.Buzzer(27)
servo = gpio.AngularServo(22,min_angle=-90,max_angle=90)
sensor = gpio.DistanceSensor(echo = 18, trigger = 13)

def turnOn():
    led.on()
    sleep(10)
    print('Light was on, it just turned off')

def turnOff():
    led.off()
    print('Light is now off')

def servoMovement(angle):
    angle = int(angle)
    servo.angle = angle
    sleep(3 )
    print('Servo Moved')

def buzz():
    buzzer.on()
    sleep(10)
    print('buzzzz')

def noBuzz():
    buzzer.off()
    print('------')

def sensorReadings():
    print("Distance is", sensor.distance)

if sys.argv[1] == 'buzz':
    buzz()