# Custom Gradle Tasks

We use custom gradle tasks to automate various parts of the robot. 


## `codeStats`
The `codeStats` gradle task automates counting the files, lines of code, and the number/type of classes 

### Usage:
Run `codeStats` using your IDE or using `./gradlew codeStats`

### Example Output:
```
Code Statistics
-----------------------------
Files:           48
Lines of Code:   4280
  Code:          2690
  Comments:      823
  Blank:         767
Classes/Records: 60
Methods:         185
Subsystems:      10
```

## generateRobotContainer
The `generateRobotContainer` gradle task automates creating a [IRobotContainer](https://richardson-area-wide-robotics.github.io/Robo-Docs/FRC/Starting%20Out/Robot%20Container's/makeingarobotcontainer) for a specific team 

### Usage:
Run `generateRobotContainer -Pteam=<number> -PcontainerName=<Name>` using your IDE or using `./gradlew generateRobotContainer -Pteam=<number> -PcontainerName=<Name>`

### Example Output:

```java
package frc.robot.common;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import frc.robot.common.interfaces.IRobotContainer;
import edu.wpi.first.wpilibj2.command.Command;
import frc.robot.common.annotations.Robot;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
@Robot(team = 0)
public class DefaultContainer implements IRobotContainer {

    public static IRobotContainer createContainer(){

        return new DefaultContainer();
    }

    @Override
    public Command getAutonomousCommand() {
        return null;
    }

    @Override
    public void simulationPeriodic() {
    }

    @Override
    public void disabledPeriodic() {
    }

    @Override
    public void robotInit() {
    }

    @Override
    public void autonomousInit() {
    }

    @Override
    public void autonomousPeriodic() {
    }

    @Override
    public void teleopPeriodic() {
    }

}
```

## exportMermaidGraph
The `exportMermaidGraph` gradle task automates the export of a Mermaid flowchart of the project's Java code.

### Usage:
Run `exportMermaidGraph` using your IDE or using `./gradlew exportMermaidGraph`

### Example Output:

:::warning

Output it too large to display here. Check out the `docs` folder on github to see a example output
:::

## exportPathPlannerPaths
The `exportPathPlannerPaths` gradle task automates the export of PathPlanner paths as SVGs with Bezier curves and speed constraints

### Usage:
Run `exportPathPlannerPaths` using your IDE or using `./gradlew exportPathPlannerPaths`

### Example Output:

:::warning

Output it too large to display here. Check out the `docs` folder on github to see a example output
:::