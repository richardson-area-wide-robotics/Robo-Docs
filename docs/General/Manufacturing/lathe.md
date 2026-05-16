import AssetDisplay from '@site/src/components/AssetDisplay';

# Using the Lathe
The Lathe is a powerful machine that can do some cool things.

<AssetDisplay
imgSrc="https://raw.githubusercontent.com/richardson-area-wide-robotics/Robo-Docs/main/static/img/lathe_full.jpg"
name="The Lathe"
fileType="JPG (.jpg)"
downloadUrl="https://raw.githubusercontent.com/richardson-area-wide-robotics/Robo-Docs/main/static/img/lathe_full.jpg"
/>

:::warning

This page needs a terminology pass and some photos 

:::


## Powering up

1. Make sure lathe is connected to power outlet
2. Clean metal chips using a brush or vacuum

:::warning

NEVER use compressed air to clean, as metal chips can become stuck inside the ‘lead’ screws of the lathe.

:::

3. Make sure chuck guard is lowered
4. Make sure your stock is safely secured to the chuck
5. Remove yellow cover from power switch

<AssetDisplay
imgSrc="https://raw.githubusercontent.com/richardson-area-wide-robotics/Robo-Docs/main/static/img/lathe_power_cover.jpg"
name="Lathe Power Cover"
fileType="JPG (.jpg)"
downloadUrl="https://raw.githubusercontent.com/richardson-area-wide-robotics/Robo-Docs/main/static/img/lathe_power_cover.jpg"
/>

6. Check speed that the lathe is running at.
7. Press green button to power on and start spinning the chuck

<AssetDisplay
imgSrc="https://raw.githubusercontent.com/richardson-area-wide-robotics/Robo-Docs/main/static/img/lathe_power_switch.jpg"
name="Lathe Power Switch"
fileType="JPG (.jpg)"
downloadUrl="https://raw.githubusercontent.com/richardson-area-wide-robotics/Robo-Docs/main/static/img/lathe_power_switch.jpg"
/>

   
## Tool Heads
1. When first placing a tool head into tool post make sure that it is far enough from the lathe to where you will not hurt yourself unscrewing the bolts
2. When placing a new tool head into the tool post press the tool head so that the metal cutting head is faced with the point upwards or facing the stock
3. Make sure the tool head is placed firmly up against the tool post and tighten the three bolts that hold it in place (always do the middle one first)
4. To check if the tool head is correctly aligned use a ruler against your piece of stock by placing a ruler vertical flat between the tool head and the stock, if the ruler is held directly perpendicular to the ground then your tool head is level to the center of the stock where it could be, if not adjust by placing two washers to lift the tool head upwards and check again

## Chuck
The chuck is the part of the lathe that holds the stock, depending on the type of chuck it might be self-centering (3-jaw) or something you have to center yourself (4-jaw)

1. To open or close the chuck use the chuck key and twist it either counterclockwise or clockwise (NEVER let go of the chuck key while it is inside the lathe. Always keep one hand on it!)
2. To remove or add a chuck on the lathe you must first remove 3 nuts on the back of the chuck to remove it from the lathe and then remove the back adapter piece from the chuck before adding it to the new chuck and then adding the three nuts to the back of the joint of the lathe and chuck and securing it on the lathe

## Tail Stock
The tail stock is the part opposite of the head stock housing the spindle that allows the chuck to be mounted and spin, the tail stock has several uses

1. When a part is longer than 3x the diameter of the chuck the tail stock should be used to stabilize the stock and to keep cuts even from end to end
2. The tail stock can be moved forwards and backwards relative to the stock with either the precise valve on the back side, or in large movements by lifting the lever on the right side of the tail stock
3. The tail stock can also be used to hold drill bits or tapping bits 

## Carriage
The carriage holds the tool post and allows it to be moved from side to side and cut into stock pieces on the lathe. It has the ability to move along the z and x-axis from the hand wheels facing the operator. 
Compound slide allows for tapers to be made as the assembly can be rotated by untightening the two bolts next to the angle finder
To move the angle of only the tool untighten the large tool holder lock handle (use a wrench for extra leverage if needed)
Before making your cuts remember to zero the carriage by twisting the rulers on the hand wheels to your desired value and to check that your cut will not hit the spinning chuck or any other part apart from the tool head that touches the stock.

## Stock
Common materials have a calculated value, called Surface Feet per Minute or SFM, for the maximum speed that a tool can move through the material, without excessive wear or damage. The SFM is used to calculate the RPM of the spindle and workpiece. RPM is based on the material being cut, the material of the cutting tool and the diameter of the material being cut.
To convert the SFM to RPM, use the following formula:
[RPM = 4 X SFM / MATERIAL DIAMETER]
Example: 2" diameter stainless steel 4 x 50 / 2 = 200 / 2 = 100

RPM Example: 1/2" diameter aluminum 4 x 300 / 0.5 = 1,200 / 0.5 = 2,400 RPM

When using the parting off tool, set the RPM to about 1/4 of the calculated value. When drilling, calculate the RPM based on the drill bit diameter, rather than the workpiece size.

| MATERIAL                                | SFM     |
|-----------------------------------------|---------|
| Hard Steel (stainless, tool steel, etc) | 50-60   | 
| Mild Steel (regular steel)              | 100-125 | 
| Brass                                   | 150-200 |
| Aluminum                                | 250-350 |