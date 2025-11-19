# The Periodic Functions

Each robot container provides many methods that you can override to do stuff

## simulationPeriodic
`simulationPeriodic` is ran periodically when the simulator is open. You should use this for information you only want to display in sim

## disabledPeriodic
`disabledPeriodic` is ran periodically when the robot is disabled. You can only run certain things when it is disabled. (Ex: you cannot keep driving or moving motors, etc). You could use this for updating indicator LEDS and other simple stuff.

## autonomousPeriodic
`autonomousPeriodic` is ran periodically during the autonomous period. You should use this to run autos

## teleopPeriodic
`teleopPeriodic` is ran periodically during the teleop period, and when the robot is enabled. You should use this for doing everything during teleop (Driving, etc) 