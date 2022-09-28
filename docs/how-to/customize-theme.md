---
sidebar_position: 4
---


# 9.4. Customize the theme

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