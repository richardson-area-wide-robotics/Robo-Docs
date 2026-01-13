# Vision
[Vision](https://richardson-area-wide-robotics.github.io/Robo-Docs/FRC/terminology#vision] allows) the robot to better understand where is it on the field.

## Setting Up

:::warning

Here be dragons! The documentation for PhotonVision is honestly pretty bad if you are having issues. I believe in you.

:::
:::warning

If you can see this message i haven't finished the docs yet 

:::

### Documentation Links
* [PhotonVision](https://docs.photonvision.org/en/latest/index.html)
* [Luma Vision](https://docs.luma.vision/p1/flashing/)

### Flashing the device 

1. Download the latest image from the [PhotonVision GitHub](https://github.com/PhotonVision/photonvision/releases). 
   1. Most vendors for PhotonVision cameras have an image already built (Ex: Luma P1: `photonvision-v2026.1.1-rc-2-linuxarm64_luma_p1.img.xz`)
   2. The image should match whatever version you are using in your code. (Ex: v2026.1.1-rc-2)
2. Follow the flashing intrusions for your device
   1. This will probably use [balenaEtcher](https://etcher.balena.io/)
3. Connect the camera to the wiring of the robot
4. Open the PhotonVision dashboard (by default at: `http://photonvision.local:5800`)
   1. Make sure you're connected over WiFi to the Robots Radio 

### Troubleshooting
To troubleshoot something not working correctly with vision, you will usually need to `ssh` into the Camera

#### How to ssh
Open Command Prompt and type `ssh photon@10.17.45.###` You can find the last 3 digits of the Camera IP by using [Angry IP Scanner](https://angryip.org/) (again, while connected to the robots radio). It will ask for a password to the user, the default is `vison`



