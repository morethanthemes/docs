---
sidebar_position: 3
---


# Host Google fonts locally

The guide provides step-by-step instructions for hosting Google fonts on your own web server. The steps below refer to the Base+ theme and the PT Serif font, as an example, but they can be applied to any other font loaded in our theme distributions.

1. Create the folder: `themes/custom/baseplus/fonts`.
2. Create the file: `themes/custom/baseplus/css/theme/local-fonts.css`.
3. Download the font. There are two different ways:
    1. [Download via webfonts-helper](#download-the-google-font-using-the-webfonts-helper)
    2. [Download directly from Google servers](#download-fonts-directly-from-googles-servers)
4. Place the font files of the extracted zip in the created folder: `themes/custom/baseplus/fonts`.
The file structure should look as in the following screen capture:
<details>
    <summary>Screen capture</summary>
    <img src="/img/docs_img/google-fonts-locally-1.png" />
</details>


5. Navigate to the file: `themes/custom/baseplus/baseplus.libraries.yml`. Comment the first `fonts-pt-serif:` section and uncomment the next `fonts-pt-serif:` one as in the screen capture below:
<details>
    <summary>Screen capture</summary>
    <img src="/img/docs_img/google-fonts-locally-2.png" />
</details>

## Download the Google font using the webfonts-helper

1. Visit the google-webfonts-helper tool: https://gwfh.mranftl.com/fonts.
2. Pick the desired font.
3. <p></p>Choose the charset and the styles you want to use for this font.
<details>
    <summary>Screen capture</summary>
    <img src="/img/docs_img/google-fonts-locally-3.png" />
</details>

4. <p></p>Make sure to choose the **Modern Browser** option and in the  **Customize folder prefix** option set the value to `../../fonts/` and copy the CSS that is automatically generated.
<details>
    <summary>Screen capture</summary>
    <img src="/img/docs_img/google-fonts-locally-4.png" />
</details>

5. Paste the generated css in the file: `themes/custom/baseplus/fonts/pt-serif/pt-serif-local.css`. In our case we used only the woff2 format.

6. Download the fonts.

7. Place the font files of the extracted zip file in the newly created folder: `themes/custom/baseplus/fonts`.  


## Download fonts directly from Google’s servers

This is an alternative to the above download method.
1. Visit [Google Fonts](https://fonts.google.com/), pick **PT Serif** as the font family, and choose the font weights.

2. <p></p>Copy the highlighted link tag with query parameters and open it in a new tab.
<details>
    <summary>Screen capture</summary>
    <img src="/img/docs_img/google-fonts-locally-5.png" />
</details>

3. <p></p>Each `@font-face` rule, specifies a src to download those font files. Open each URL and download the font.
<details>
    <summary>Screen capture</summary>
    <img src="/img/docs_img/google-fonts-locally-6.png" />
</details>

