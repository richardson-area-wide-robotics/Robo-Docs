# Gradle in FRC

:::warning

This page is probably more in depth than it needs to be. You probably shouldn't need to modify the `build.gradle`

:::

Gradle is the **build system** used for FRC robot code. It handles compiling, deploying, and managing dependencies for your robot project. If you’ve ever wondered how your Java code actually ends up running on the robot, Gradle is what makes it happen. Think of Gradle as the “manager” that builds your code, gathers libraries, and puts everything on the robot.


## What Gradle Does

In FRC, Gradle is responsible for:

1. **Compiling your code**  
   Gradle takes all the `.java` or `.kt` files in your project and turns them into `.class` files ([bytecode](https://en.wikipedia.org/wiki/Java_bytecode)) that the robot can execute.

2. **Managing dependencies**  
   WPILib and other libraries (like [AdvantageKit](https://docs.advantagekit.org/)) are downloaded automatically with Gradle. You don’t have to manually download JAR files.

3. **Deploying code to the robot**  
   When you `deploy`, Gradle packages your compiled code and sends it to the RoboRIO over the network.

4. **Running tests and simulation**  
   You can `test` or `simulate` your robot code on your computer without needing to touch the physical robot.


## Gradle in the WPILib Project

When you work on an FRC project using VS Code + WPILib:

- You’ll see a **`build.gradle`** file.
- This file tells Gradle:
    - What libraries to include
    - What Java version to use
    - How to build, deploy, and run the code

### Understanding the Gradle File 

#### The `dependencies` block
The `dependencies` block is where code from other sources is added to the project. It's basically a more complex version of `vendordeps`   

##### implementation
`implementation` is for libraries the robot code uses at runtime.

When you add a dependency with implementation the library is:

* Packaged into the final program
* Present when the robot code is running
* Your code can directly call classes and methods from it

Example:
```groovy
implementation 'com.github.lasarobotics:PurpleLib:2025.0.6'
```

##### annotationProcessor
`annotationProcessor` is for compile-time code generation.

Annotation processors:

* Run only during compilation
* Read annotations (like @Getter, @AutoLog, etc.)
* Generate or modify Java code before compilation finishes
* Are NOT included in the final robot program

```groovy
annotationProcessor 'org.projectlombok:lombok:1.18.28'
```

### Further Reading

- [WPILib - GradleRIO Overview](https://docs.wpilib.org/en/stable/docs/software/getting-started/getting-started-frc-control-system.html#gradlerio)
