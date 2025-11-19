# Hardware Map
The hardware map is how your code connects to the Control Hub/Expansion Hub.

It tells the robot:

> “This variable refers to this exact motor/servo/sensor on the robot.”

## Example
```java
DcMotor leftDrive = hardwareMap.get(DcMotor.class, "left_drive");
Servo clawServo = hardwareMap.get(Servo.class, "claw");
```

These names ("left_drive", "claw") must match the settings in the Robot Configuration file.

## Naming Conventions

Good names:

* `leftFrontDrive`
* `rightLiftMotor`
* `intakeServo`
* `imu`

Avoid:

* `motor1`, `motor2`
* `servoA`
* `stuff`