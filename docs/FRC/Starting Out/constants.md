# Constants

:::info

Constants must follow the [constant naming convention](https://richardson-area-wide-robotics.github.io/Robo-Docs/General/namingconventions/#constants)

:::

Each robot in the code will probably have a `Constants.java` file, the common code provides a `CommonConstants.java` file. This page will discuss the differences between them

## Robot Constants
Robot constants are `public static final` variables that are used by the robot and only the robot. An example would be the CAN ids for all motors in a subsystem

## Common Constants
Common constants are `public static final` variables that are used by all robots. An example would be the controllers for the driver and operator 

