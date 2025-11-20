# Creating a Subsystem

## SingleMotorSubsystem 
I need a subsystem now! This class allows you to make a subsystem with only one motor. It allows you to quickly make something for testing with simple speed control

### Example:
A one motor subsystem using CAN ID 10
```java
public SingleMotorSubsystem KITBOT_SHOOTER = new SingleMotorSubsystem(10);
```

## DashboardSubsystem 
I need a subsystem but i need more control over everything. This class allows you to make a subsystem that uses @DashboardVariable and @NamedAuto. All subsystems should extend from this.

### Example:
```java
public class DeepClimbSubsystem extends DashboardSubsystem {
```