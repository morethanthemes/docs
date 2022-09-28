---
sidebar_position: 3
---



# 9.3. Allow blocks to be referenced through custom block type fields

In order to be able to reference and display a block though a custom block reference field you should first assign it to a region. We have created the “Hidden blocks collection” region exactly for this reason. 
Blocks assigned to this region will not be printed through the theme but will be available to reference through the custom block types and will be displayed based on the custom block visibility configuration. 
Blocks that are already assigned to the “Hidden blocks collection” region can be used multiple times through different custom blocks.
1. Navigate to Home > Administration > Structure > Block layout
2. Add the block you want to the “Hidden blocks collection” region.
3. To be able to easily find this block through the reference field we suggest that you specify a unique title.
    - You can go back and configure this title after you have used it in a block reference field
4. Leave the visibility settings untouched.
5. Save your configuration