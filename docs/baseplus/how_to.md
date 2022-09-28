---
sidebar_position: 9
---

# 9. How to

## 9.1. Add a new Album node

1. Select "Add Content" and click on the corresponding option
2. Enter a title
3. Upload as many in-page images as you like
4. Enter your video URLs
5. Enter the body text
6. Enter any tags that you wish

## 9.2. Create new instances (clones) of existing blocks and assign them to regions

Drupal 8 comes by default with a feature that allows you to create new instances of existing blocks and assign those in the theme regions.

1. Navigate to Home > Administration > Structure > Block layout
2. Locate the region that you wish to populate with your new block
3. For this region click on the “Place block” button
4. From the list that pops up, locate the block that you wish to place in this region
    - You could also use the filter field at the top to quickly search through the available blocks
5. Click the “Place block” button at the right of the specific block.
6. Configure the block as you would do with any other block
7. Save your configuration

### 9.2.1. Remove blocks from regions

In Drupal 8 in order to remove a block from a region you should just delete it from the regions page. If you need to place the block in the future you could follow the above procedure to create a new instance of this block.

## 9.3. Allow blocks to be referenced through custom block type fields

In order to be able to reference and display a block though a custom block reference field you should first assign it to a region. We have created the “Hidden blocks collection” region exactly for this reason. 
Blocks assigned to this region will not be printed through the theme but will be available to reference through the custom block types and will be displayed based on the custom block visibility configuration. 
Blocks that are already assigned to the “Hidden blocks collection” region can be used multiple times through different custom blocks.
1. Navigate to Home > Administration > Structure > Block layout
2. Add the block you want to the “Hidden blocks collection” region.
3. To be able to easily find this block through the reference field we suggest that you specify a unique title.
    - You can go back and configure this title after you have used it in a block reference field
4. Leave the visibility settings untouched.
5. Save your configuration

## 9.4. Customize the theme

The theme style is written in a [SMACSS-inspired](https://www.google.com/url?q=https://smacss.com/&sa=D&source=editors&ust=1664361389196453&usg=AOvVaw1apL3dJ85YCp3isZ5bTTQL) approach and is very modular. According to this architecture we have added a local css file for each CSS category that overrides the corresponding category CSS rules.


Each of these CSS files is located under the corresponding folder inside the theme folder:

- `css/base/local-base.css`
- `css/components/local-components.css`
- `css/theme/local-theme.css`

This doesn’t mean, though, that you should not be able to easily customize the site you build with it, as much as you want, even if e.g.: the

- Color or
- Font or
- Background pattern you would like to use, is not included in the built-in Theme settings, described above.


In general if you do not have the time to research and understand all this architecture we suggest that you use the css/theme/local-theme.css file for your CSS rules.


The local-theme.css is designed to override the theme settings and styling currently in use. And because it’s a separate file, any CSS that you add in this file leaves the code codebase of the theme intact, so you can safely roll back anytime.


In light of the above local-theme.css is your go-to-file, for customizing the theme with no limits at all.

## 9.5. Implement One signal push notifications.

Read more [here](https://www.google.com/url?q=https://docs.google.com/document/d/1jy5NvIve_R9JADFh7Yazk6XKxjDNuN81iIH85Ir5E5s/edit?usp%3Dsharing&sa=D&source=editors&ust=1664361389198221&usg=AOvVaw0zP8AFKr_4ftpMOkcwcVeP).

## 9.6. Change PWA application name.

Edit the manifest.json file, located in `sites/default/files/pwa` and change the “name” and the “sort_name”  values according to your needs.