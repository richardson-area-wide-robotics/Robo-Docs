# Installing REV Hardware Client 2

## Windows and Mac 
REV Hardware Client 2 can be installed from REV's website [here](https://rhc2.revrobotics.com/download/download.html)

## Linux

### Debian
REV Hardware Client 2 can be installed from REV's website [here](https://rhc2.revrobotics.com/download/download.html), or by using the command line:

```shell
CPU=$(dpkg --print-architecture)
wget https://rhc2.revrobotics.com/download/debian/rev-robotics-rev-hardware-client_1.0.7_${CPU}.deb
sudo apt install ./rev-robotics-rev-hardware-client_1.0.7_${CPU}.deb
```

### Arch
The Debian version can be used on Arch with by converting it with `debtap`

:::info

This assumes you are using `amd64` as it does not use `dpkg` to determine your CPU. 

:::


```shell
yay -S debtap
sudo debtap -u   # update the debtap database (first run only)

wget https://rhc2.revrobotics.com/download/debian/rev-robotics-rev-hardware-client_1.0.7_amd64.deb
sudo debtap rev-robotics-rev-hardware-client_1.0.7_amd64.deb
sudo pacman -U rev-robotics-rev-hardware-client*.pkg.tar.zst
```




