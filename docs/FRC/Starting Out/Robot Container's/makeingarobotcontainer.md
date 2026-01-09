# Making a Robot Container

:::info

For consistency, you should keep the container and package name the same. Ex: `frc.robot.example` and `ExampleContainer`

:::

RobotContainer's control the functionality of a robot per team.

1. Implement `IRobotContainer` and set up the required methods (createContainer, simulationPeriodic, and getAutonomousCommand, etc).
2. Annotate with `@NoArgsConstructor(access = AccessLevel.PRIVATE)`, as Robot Containers should not have a public constructor. (createContainer() will be used to create a new container).
3. Annotate the class with @Robot; this will automatically set the robot container to be used based on the team number. Example: (@Robot(team = 1745) for team 1745, etc).
   1. The only team number you cannot use is `0`, as that is the `RobotContainerRegistry`'s fallback. If you want to make a test bot, use `9991`  

## Why a Private Constructor?

RobotContainers should not be manually created, it is handled automatically by the `RobotContainerRegistry`

## Example

:::info

For explanation on the periodic functions, look [here](https://richardson-area-wide-robotics.github.io/Robo-Docs/FRC/Starting%20Out/theperiodicfunctions)

:::

```java
package frc.robot.pearce;

import frc.robot.common.annotations.Robot;
import frc.robot.common.components.RobotUtils;
import frc.robot.common.interfaces.IRobotContainer;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
@Robot(team = 1745)
public class PearceContainer implements IRobotContainer {

    
public static IRobotContainer createContainer(){

    // You would bind buttons and triggers, and set up the AutoChooser here

    return new PearceContainer();
}

@Override
public void simulationPeriodic() {
}

@Override
public void disabledPeriodic() {
}

@Override
public void autonomousPeriodic() {
}

@Override
public void teleopPeriodic() {
}

/**
* Get currently selected autonomous command
*
* @return Autonomous command
  */
  @Override
  public Command getAutonomousCommand() {
    return null;
  }
}
```