import AssetDisplay from '@site/src/components/AssetDisplay';

# Updating This Site
Robo Docs uses [Docusaurus](https://docusaurus.io/) to display Markdown (.md) files on the web. When you push to the `main` branch of the [Robo Docs GitHub](https://github.com/richardson-area-wide-robotics/Robo-Docs), it will build and display the site automatically. 

If you are unfamiliar with Markdown, check out [this page](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

There are two ways to add or modify pages:

## GitHub Web Editor
You can use the GitHub Web Editor to edit single pages if you don't want to install an editor onto your computer. Go to the [Robo Docs GitHub](https://github.com/richardson-area-wide-robotics/Robo-Docs), find the page you want to edit, and press the Pencil button to open edit mode. 

<AssetDisplay
imgSrc="https://raw.githubusercontent.com/richardson-area-wide-robotics/Robo-Docs/main/static/img/meta_web_ui.png"
name="Editing the main page of Robo Docs using the GitHub Web Editor"
fileType="PNG (.png)"
downloadUrl="https://raw.githubusercontent.com/richardson-area-wide-robotics/Robo-Docs/main/static/img/meta_web_ui.png"
/>

You can save your changes using the blue `Commit changes...` button, and leave without saving using the `Cancel changes` button.

## Local Editor
You can use a local editor like [IDEA](https://richardson-area-wide-robotics.github.io/Robo-Docs/FRC/Troubleshooting/using-idea) or vsCode. This allows you to edit more than one file and preview your changes using `npm` 

### Setup
Clone the Robo Docs GitHub repo using GitHub Desktop, then open it in your local editor of choice.  

### Previewing your changes locally 
To preview your changes before they end up on the web, use `npm`. You can run `npm run build` in the terminal to build, then `npm run serve` to display the build at `http://localhost:3000/Robo-Docs/`

<AssetDisplay
imgSrc="https://raw.githubusercontent.com/richardson-area-wide-robotics/Robo-Docs/main/static/img/meta_local_terminal.png"
name="Build and Serve in the IDEA terminal"
fileType="PNG (.png)"
downloadUrl="https://raw.githubusercontent.com/richardson-area-wide-robotics/Robo-Docs/main/static/img/meta_local_terminal.png"
/>
