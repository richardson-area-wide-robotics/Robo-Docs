import AssetDisplay from '@site/src/components/AssetDisplay';
import KeyBind from '@site/src/components/KeyBind';

# Using IntelliJ IDEA in FRC

I personally prefer using [IntelliJ IDEA](https://www.jetbrains.com/idea/) over Visual Studio Code (and so do 78% of Java developers according to their website), but it requires a little more setup to get it working

## Installing:
Head over to the [download page](https://www.jetbrains.com/idea/download) for IntelliJ IDEA, you will want to install Community Edition, unless you plan on paying for Ultimate 

:::info

If you use `yay`, you can install it with `yay intellij-idea-community-edition`

:::

## Configuring
Open this year's code with `Open...` and wait for the import to finish. 

### Getting the correct Java version
Now, click the 3 horizontal lines, then click `Project Structure`. <KeyBind keys="Ctrl + Alt + Shift + S" />  Under the `Project Settings` section on the left, click `Project`. 

Open the `SDK` drop down and chose `Download JDK...` For `Version` say `17` and `Vendor` say `Microsoft OpenJDK` 

Click `Download` and wait for the installation to finish. Ensure that the `Language level` is `SDK default`, then click `Apply`

<AssetDisplay
imgSrc="https://raw.githubusercontent.com/richardson-area-wide-robotics/Robo-Docs/main/static/img/idea_javadownload.png"
name="Downloading the correct java"
fileType="PNG (.png)"
downloadUrl="https://raw.githubusercontent.com/richardson-area-wide-robotics/Robo-Docs/main/static/img/idea_javadownload.png"
/>

### Making sure the compiler uses the correct Java version
Now, click the 3 horizontal lines, then click `Settings`<KeyBind keys="Ctrl + Alt + S" />. Search for `Gradle` and ensure that `Gradle JVM` says `Project SDK`. Click `Apply`.

### Adding required gradle tasks
Click the `Current File` dropdown in the top right, and click `Edit Configurations`

<AssetDisplay
imgSrc="https://raw.githubusercontent.com/richardson-area-wide-robotics/Robo-Docs/main/static/img/idea_editconfigs.png"
name="Adding required gradle tasks"
fileType="PNG (.png)"
downloadUrl="https://raw.githubusercontent.com/richardson-area-wide-robotics/Robo-Docs/main/static/img/idea_editconfigs.png"
/>

Click the `+` and choose Gradle. You will want to add these Configurations:

* `deploy --offline`
* `simulateJava`
* `build`
* `codeStats`

And you are done! You can now use the `Current File` dropdown to select one of these tasks and use them.
