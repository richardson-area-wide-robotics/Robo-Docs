import AssetDisplay from '@site/src/components/AssetDisplay';

# Using the Lazer Cutter


## Powering Up
:::warning

The startup sequence MUST be followed in order. 

:::

1. Turn on the power strip behind the laser. All connected devices should power on
automatically. If not, turn them on manually

<AssetDisplay
imgSrc="https://raw.githubusercontent.com/richardson-area-wide-robotics/Robo-Docs/main/static/img/lazer_power_on.jpg"
name="CNC power button"
fileType="JPG (.jpg)"
downloadUrl="https://raw.githubusercontent.com/richardson-area-wide-robotics/Robo-Docs/main/static/img/lazer_power_on.jpg"
/>

2. Go to the right side of the laser and flip the main switch so the white arrow points
   toward the wall. Make sure the switches are all flipped like they
   are in the image on the left

<AssetDisplay
imgSrc="https://raw.githubusercontent.com/richardson-area-wide-robotics/Robo-Docs/main/static/img/lazer_power_on_2.jpg"
name="CNC power button"
fileType="JPG (.jpg)"
downloadUrl="https://raw.githubusercontent.com/richardson-area-wide-robotics/Robo-Docs/main/static/img/lazer_power_on_2.jpg"
/>

3. The machine will move as it start's up. This is normal
   homing behavior. Let it finish before touching anything.
4. Get the laser key from Mr. Roha. Using the front panel
   buttons, lower the tip of the laser until the gap between the laser
   and what you are cutting is the same height as the key



## Getting Ready

### Set up LightBurn
1. Plug the USB into the laptop next to the laser. Open LightBurn and go to File > Import to
load your DXF file.
2. Your design will appear in the workspace already selected. Click the center handle
   and drag it to the top-left corner of the workspace.
3. Hover over your design and click a color swatch at the bottom of the screen to assign it
   to a layer.
<AssetDisplay
   imgSrc="https://raw.githubusercontent.com/richardson-area-wide-robotics/Robo-Docs/main/static/img/lazer_setup_lightburn.png"
   name="CNC power button"
   fileType="JPG (.jpg)"
   downloadUrl="https://raw.githubusercontent.com/richardson-area-wide-robotics/Robo-Docs/main/static/img/lazer_setup_lightburn.png"
   />

4. In the bottom-right panel, set your cut settings:

<AssetDisplay
imgSrc="https://raw.githubusercontent.com/richardson-area-wide-robotics/Robo-Docs/main/static/img/lazer_cut_settings.png"
name="CNC power button"
fileType="JPG (.jpg)"
downloadUrl="https://raw.githubusercontent.com/richardson-area-wide-robotics/Robo-Docs/main/static/img/lazer_cut_settings.png"
/>

| Setting   | Value |
|-----------|-------|
| Power max | 25    | 
| Power min | 30    | 
| Speed     | 20    |

5. Choose a Start From mode in the bottom-right panel:

:::info

The design position in LightBurn mirrors the physical laser bed. Top-right in software = top-right on
the bed.

:::
:::info

You manually set a custom reference point using the laser head — useful for repeating cuts from a
known corner.

:::
:::note

The job starts from wherever the laser head currently sits. Move the head to an open spot on your
plywood using the arrow keys on the control panel

:::

### Cut your part
1. Place your plywood on the laser bed.
2. If using Current Position mode, jog the laser head to a
   clear area on the material using the arrow keys on the laser
   cutter front panel.
3. Press Start in LightBurn and watch your part cut

:::info

Need help with LightBurn?

Watch this video for a full walkthrough: [Click Here](https://youtu.be/8JXYt9FmUao?si=jShiIjHcua18irpI)

:::