# What is a Robot Container 
A Robot Container is the central place where a robot’s structure is defined and 'hooked' together. 
This is where subsystems are created, default commands are assigned, and controls are bound to robot behavior.

Rather than putting logic directly in Robot.java, the Robot Container keeps the code organized and modular.

## Responsibilities of a Robot Container

A Robot Container typically has five main responsibilities:

### Create Subsystems
All major robot subsystems (drive, intake, arm, etc.) are constructed here.
As an example, the TankDriveSubsystem is created using TankHardware, motors, and a gyro:

```java
public static final TankDriveSubsystem DRIVE_SUBSYSTEM = new TankDriveSubsystem(...)
```

### Configure Default Commands
Each subsystem can have a default command that runs whenever no other command is using it.
As an example, we can set the drive subsystem to default to arcade drive using the driver controller:

```java
DRIVE_SUBSYSTEM.setDefaultCommand(
    DRIVE_SUBSYSTEM.arcadeDriveCommand(
    HIDConstants.DRIVER_CONTROLLER::getLeftY,
    HIDConstants.DRIVER_CONTROLLER::getRightX
    )
);
```

### Bind Controls to Commands
Button presses, triggers, or joystick axes are connected to commands here.
This keeps control logic out of subsystems and makes it easy to change mappings.

### Provide the Autonomous Command
The Robot Container exposes a method that returns the command to run during autonomous:

```java
@Override
public Command getAutonomousCommand() {
return null;
}
```