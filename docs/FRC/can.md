# CAN in FRC

## What is CAN?

**CAN (Controller Area Network)** is the communication bus used in FRC robots to connect smart devices such as motor controllers, power distribution modules, pneumatics hubs, and sensors. Instead of using separate wires for each device, CAN allows all devices to communicate over a single, shared, two wire bus.

## CAN IDs

### What is a CAN ID?

A **CAN ID** is a unique number assigned to each device on the CAN bus. In FRC:

* Valid CAN IDs range from **0 to 62**
* **No two devices may share the same CAN ID**
* IDs for motors are configured using the REV Hardware Client

### Example numbering scheme
* Swerve drive motors: 1,3,5,7 
* Swerve rotate motors: 2,4,6,8
* Intake: 10
* Shooter: 11–12
* Climber: 20–21

## CAN Wiring Basics

CAN uses **two twisted wires**:

* **CAN High (yellow)**
* **CAN Low (green)**

The CAN should make a complete circle covering every motor on the robot. Do not 'branch off' from the bus with T connections. Make sure everything is plugged in securely and won't wiggle out.

## Debugging CAN issues
If your having issues and believe CAN to be the cause, you can use the Rev Hardware Client to troubleshoot it.

### Steps 
1. Plug into the USB-C port on a Spark Max Motor Controller into a computer with Rev Hardware Client installed and open
2. Power on the robot
3. Click the refresh button in Rev Hardware Client a few times until in updates
4. Observe the output

### Common Issues

#### I see two buses! (Or motors more than one time)
Ensure that connections are not plugged in backwards, Ex: Green connects to Green and Yellow connects to Yellow. It is easier than you would think to plug in something backwards by accident 

#### I don't see a motor!
Follow the bus from where you plugged in until you reach the motor. If there are no breaks in the wire, follow it until you reach the RoboRIO or PDH. If there are still no breaks, ensure the motor in question is being powered on by the robot. 


