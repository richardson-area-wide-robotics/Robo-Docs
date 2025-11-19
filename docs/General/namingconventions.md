# Naming Conventions

Consistent naming helps keep the robot code clean, readable, and easy for new programmers to understand.

## General Principles
* Names should be **descriptive**, not abbreviated to the point of confusion.
* Use **camelCase** or **PascalCase** depending on the type of identifier (details below).
* Avoid [magic numbers](https://en.wikipedia.org/wiki/Magic_number_(programming)). Constants should be defined and named clearly.
* Keep names consistent across subsystems and commands.

---

## Classes
Classes should use **PascalCase**.

### Examples:
* `Drivetrain`
* `ShooterSubsystem`
* `RobotContainer`

---

## Enums
Use **PascalCase** for the enum name like classes and **ALL_CAPS** for each enum value.

### Examples:
```java
public enum RobotMode {
    DISABLED,
    TELEOP,
    AUTONOMOUS
}
```

---

## Methods
Methods use **camelCase** and should generally be verbs.

### Examples:
* `setMotorSpeed()`
* `getHeading()`
* `updateOdometry()`
* `runIntake()`

---

## Variables
Variables use **camelCase** and should describe what the value represents.

### Examples:
* `leftMotorSpeed`
* `targetRPM`
* `armPosition`
* `hasNote`

---

## Constants

:::info

For explanation on constants in a FRC context, look [here](https://richardson-area-wide-robotics.github.io/Robo-Docs/FRC/Starting%20Out/constants)

:::

Constants (variables that won't change) should be **ALL_CAPS_WITH_UNDERSCORES**.

### Examples:
* `MAX_DRIVE_SPEED`
* `ARM_UP_POSITION`
* `DEFAULT_SHOOTER_RPM`

---

## Subsystems
Subsystem class names should end with **Subsystem** and use **PascalCase**.

### Examples:
* `IntakeSubsystem`
* `ArmSubsystem`
* `ElevatorSubsystem`

Final Subsystem fields in the `IRobotContainer` should follow Constants case shown above.

---

## Commands
Command names should end with **Command** and use **PascalCase**.

Commands should clearly describe the behavior.

### Examples:
* `DriveForwardCommand`
* `AutoBalanceCommand`
* `ShootNoteCommand`

