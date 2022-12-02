---
sidebar_position: 2
---

# Customize the color scheme

You can make changes to the colors of the website to make it unique and more personalized.

## Select the Local color profile

1. Visit the **Theme Setting > Look'n'feel**.
2. Select the **Local** Color Scheme.

![color-local-selection](../img/color-local-selection.png)

This will activate the file `css/theme/color-local.css`. It comes with the default theme colors.

## Apply new custom color palette

You can do that by changing the color values that exist in the file mentioned above. For example, the file `css/theme/color-local.css` that Elegant+ theme comes with has the values shown below:

![color-local-code-before](../img/color-local-code-before.png)

Now we will change the following sections:
1. Primary color: 
    - change **--mt-color-primary** from `#016550` to `#654501`
    - change **--mt-color-primary-dark** from `#004c3c` to `#4d3400`
    - change **--mt-color-primary-light** from `#01cb9f` to `#cb8b01`
2. Accent color: 
    - change **--mt-color-accent** from `#f8dcd6` to `#fafa38`
    - change **--mt-color-accent-dark** from `#f8dcd6` to `#fafa75`
    - change **--mt-color-accent-light** from `#f8dcd6` to `#f8fa75`
3. Secondary color: 
    - change **--mt-color-secondary** from `#2a199a` to `#9a1919`
    - change **--mt-color-secondary-dark** from `#1e126e` to `#6e1212`
    - change **--mt-color-secondary-light** from `#8a7bea` to `#ea7b7b`

After the changes, the file `css/theme/color-local.css` should look like this:

![color-local-example-code](../img/color-local-code-result.png)
