# Making Stuff Easily 

We provide a couple of "Easy" classes to help in making stuff 

## EasyMotor
Allows you to easily make motors 

### createEasySparkMax
Make a SparkMax (Ex: a Neo Motor using a Spark Max motor controller)

#### Example:
A brushless motor with the CAN ID `motorID`, set to Coast when not in use.
```java
SparkMax motor = EasyMotor.createEasySparkMax(motorID, SparkLowLevel.MotorType.kBrushless, SparkBaseConfig.IdleMode.kCoast);
```

### createEasySparkFlex
Make a SparkFlex (Ex: a Neo Vortex Motor using its built-in SparkFlex motor controller)

#### Example:
A brushless motor with the CAN ID `motorID`, set to Break when not in use.
```java
SparkFlex motor = EasyMotor.createEasySparkFlex(motorID, SparkLowLevel.MotorType.kBrushless, SparkBaseConfig.IdleMode.kBrake);
```

## EasyBreakBeam
Allows you to easily make break beam sensors. It takes the channel ID 

#### Example:
A break beam sensor on the channel `channelID`
```java
EasyBreakBeam breakBeam = EasyBreakBeam(channelID);
```