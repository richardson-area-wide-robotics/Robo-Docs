import AssetDisplay from '@site/src/components/AssetDisplay';

# Using the CNC Machine

:::warning

I am only moderately familiar with using the CNC machine, please take the advice with grains of salt and edit this page with improvements

:::

We use a [Forest Scientific](https://forestscientific.com/) CNC machine 


## Powering Up

:::warning

Ensure the CNC is connected to compressed air and the air compressor is on!

:::

Press the green button under the CNC to power up. You can press the red button when finished. In an emergency, press the Emergency stop.

<AssetDisplay
imgSrc="https://raw.githubusercontent.com/richardson-area-wide-robotics/Robo-Docs/main/static/img/cnc_poweronbutton.jpg"
name="CNC power button"
fileType="JPG (.jpg)"
downloadUrl="https://raw.githubusercontent.com/richardson-area-wide-robotics/Robo-Docs/main/static/img/cnc_poweronbutton.jpg"
/>

## Connecting to the CNC
Go to the HP Labtop on the black stand next where the power controls are. Open it, log in (the user should have no password), and search for `CNC12 Mill`. This will open the two windows needed for using the CNC.

<AssetDisplay
imgSrc="https://raw.githubusercontent.com/richardson-area-wide-robotics/Robo-Docs/main/static/img/cnc_firststartup.PNG"
name="CNC first startup"
fileType="PNG (.png)"
downloadUrl="https://raw.githubusercontent.com/richardson-area-wide-robotics/Robo-Docs/main/static/img/cnc_firststartup.PNG"
/>

## Getting ready
The CNC will need to be reset, Press the red `Press to Clear` button.

Now you will need to set the machines home position, Press the green `CYCLE START` button to send the machine home.

### Exporting a path
We use 2DCut Pro to create the path for the CNC toolhead, along with what toolhead it should use when. 

Import your file you exported from CAD into 2DCut Pro and export it correctly as a `.cnc`. 

### Loading a path
Go back to CNC12 Acorn Mill and select `Load (F2)`, it will open a file dialogue where you can select any `.cnc` file you want to run. You may need to press the red `Press to Clear` button again.

Press the green `CYCLE START` button to begin the cnc job. You can press `FEED HOLD` to "pause" the job at any time.   

<AssetDisplay
imgSrc="https://raw.githubusercontent.com/richardson-area-wide-robotics/Robo-Docs/main/static/img/cnc_jobstarted.PNG"
name="CNC job started"
fileType="PNG (.png)"
downloadUrl="https://raw.githubusercontent.com/richardson-area-wide-robotics/Robo-Docs/main/static/img/cnc_jobstarted.PNG"
/>
