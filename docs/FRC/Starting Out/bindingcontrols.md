# Binding Controls 

You can use `RobotUtils::bindControl` to tell the robot to do something when a button is pressed. 

## Example:
When the right bumper is pressed on the driver controller, raise the elevator, then stop

```java
// Driver Right Bumper - Up
RobotUtils.bindControl(DRIVER_CONTROLLER.rightBumper(), ELEVATOR_SUBSYSTEM.up(), ELEVATOR_SUBSYSTEM.stop());
```