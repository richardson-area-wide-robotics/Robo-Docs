import AssetDisplay from '@site/src/components/AssetDisplay';


# 3D Printing with a Bambu Lab

## Slicing 

To slice models for printing on a Bambu Lab device, it is recommended to use [Orca Slicer](https://orca-slicer.com/)

### Prepare
The prepare tab is where you import models and change settings about the print.

<AssetDisplay
imgSrc="https://raw.githubusercontent.com/richardson-area-wide-robotics/Robo-Docs/main/static/img/orca_prepare.png"
name="Orca Slicer Prepare Tab"
fileType="PNG (.png)"
downloadUrl="https://raw.githubusercontent.com/richardson-area-wide-robotics/Robo-Docs/main/static/img/orca_prepare.png"
/>

Press `Slice All` to slice the model and go to the Preview Tab

### Preview
The preview tab is where you can look at the sliced model. You can still change settings, but it will return you to the prepare tab and you will need to reslice to go back 

<AssetDisplay
imgSrc="https://raw.githubusercontent.com/richardson-area-wide-robotics/Robo-Docs/main/static/img/orca_preview.png"
name="Orca Slicer Preview Tab"
fileType="PNG (.png)"
downloadUrl="https://raw.githubusercontent.com/richardson-area-wide-robotics/Robo-Docs/main/static/img/orca_preview.png"
/>

Press `Print plate` to send the model to a connected printer for printing. You can also click the drop-down and select `Export G-code file` if you are using a USB Stick or a Micro SD card.



