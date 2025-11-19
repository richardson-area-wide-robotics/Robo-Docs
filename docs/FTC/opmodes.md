# OpModes
An OpMode is a mode of operation that tells the robot what to do. FTC uses OpModes to separate TeleOp (driver control) from Autonomous (robot control). Every match you run uses an OpMode.

OpModes are shown in the Driver Station and must be selected before a match.

## Types of OpModes
### @TeleOp

Used for driver-controlled mode.
Runs when the driver presses PLAY and keeps looping until STOP.

### @Autonomous

Runs without driver input.
Used for scoring, parking, and following pre-set paths.

#### Example Use Cases:

* Drive somewhere
* Score preload then park
* Pick up additional game pieces
* Use vision to align with scoring targets