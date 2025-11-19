# Terminology

Terminology commonly used that you should know:


## Drive Team
Drive Team is all the people in charge of getting the robot to matches on time and competing. Listen to their feedback! If you don't like the control scheme that the operator likes, that's unfortunate, but you need to trust your drive team. 

### Driver
The person that *only* drives the robot in matches. Attempt to keep all other functions of the robot away from them so they can focus on doing their job

### Operator
The person that does *everything* else related to the robot (In an ideal world)

### Drive Coach
The mentor that gives advice to the Driver and Operator

### Technician
The person in charge of fixing the robot if something breaks before a match. 

### Human Player
The person in charge of (commonly) giving game pieces to robots on the field

## Subsystem
A class that represents a physical part of the robot (drive train, shooter, arm, intake, elevator, etc.).

## Command
A unit of robot behavior. Commands tell subsystems what to do, often for a specific duration or condition.

### Examples:
* DriveForwardCommand
* ShootCommand
* IntakeCommand

## Default Command
The command that runs automatically when no other command is using the subsystem.

### Examples:
* Drivetrain default command is usually “drive with joysticks.”
* Intake default command might be “stop all motors.”

## Telemetry / Logging
Data sent from the robot for debugging:
* Motor currents
* Sensor values
* Robot pose

## Vision
Being able to recognize [April Tags](https://frcdocs.wpi.edu/en/stable/docs/software/vision-processing/apriltag/index.html) and use that data in a helpful way

## Odometry
The robot’s measured position on the field using encoders and gyros.

## NetworkTables
The communication system that WPILib uses to share data between:

* Robots
* The Driver Station
* Shuffleboard
* Vision systems (Limelight, PhotonVision, etc.)
