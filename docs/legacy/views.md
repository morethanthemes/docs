---
sidebar_position: 6
---

# 6. Views

One of the most powerful features of Drupal is the Views module, which in Drupal 8 is anymore in core.


Further to the default Views blocks, like

- Recent Comments
- Who's new
- Etc.,

Webmaker+ comes with many Views implementations, including pages and blocks, that enable you to automate the collection and presentation of information throughout the site. These Views are listed under


`/admin/structure/views`


Every one of those is also editable via the front-end interface, when logged in as Drupal admin, by clicking the corresponding action link, when hovering, as shown below:

## 6.1. Isotope

This view consist of 3 different pages that each displays the corresponding nodes in a grid layout with additional Isotope filters at the top. There is one page for each of the “Accommodation”, “Album” and “Merchandise” content types.


[/albums-isotope](https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/albums-isotope&sa=D&source=editors&ust=1664361389164854&usg=AOvVaw35FhSWNZ61-ifTvi2U9ckf)

[/products-isotope](https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/products-isotope&sa=D&source=editors&ust=1664361389165348&usg=AOvVaw3XDgVdKaAQP6f43JUmShjU)

[/services-isotope](https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/services-isotope&sa=D&source=editors&ust=1664361389165768&usg=AOvVaw3wzH-dCUfgs6YGZCFP_adQ)

[/showcases-isotope](https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/showcases-isotope&sa=D&source=editors&ust=1664361389166127&usg=AOvVaw2HfDvClKtOzXz_94z-GmqK)

## 6.2. Latest

This view consists of four separate view blocks that each displays the latest nodes of the corresponding content type. There are view blocks available for the “Article”, “Products” and “Service” content types.

## 6.3. Popular Tags

This view block collects and displays all the taxonomy terms used on the site, sorted from the most to the least used.

## 6.4. Pricing tables

Collects and displays the latest Merchandise nodes in a pricing table style. There are 2, 3 and 4 column view blocks available. You can also find the corresponding view page under:


[/pricing-tables](https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/pricing-tables&sa=D&source=editors&ust=1664361389167196&usg=AOvVaw1NqYvKYAp_5u3LTN8vtfNf)

## 6.5. Related nodes

There are view blocks that display related products based on the
product content type.

## 6.6. Albums

Collects and displays Album nodes in the corresponding grid style. The available options are available at the following pages:


[/albums](https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/albums&sa=D&source=editors&ust=1664361389168195&usg=AOvVaw1bAtvxWCl3FecsenZXrvQ2)

[/albums-list](https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/albums-list&sa=D&source=editors&ust=1664361389168493&usg=AOvVaw2UOiFH6masu2owYnkAH1wC)

[/albums-metro-tiles](https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/albums-metro-tiles&sa=D&source=editors&ust=1664361389168820&usg=AOvVaw1YOeeGvRNBu4ExUyVti0t6)

[/albums-isotope](https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/albums-isotope&sa=D&source=editors&ust=1664361389169117&usg=AOvVaw0K1YftVSRXAQ8kan_OyUx3)

## 6.7. Slideshow

Collects and displays nodes that are marked as promoted to slideshow. There are 3 different flavours of the slideshow,  Boxed, Full screen and Full width. You can see each of these blocks at the corresponding demonstration pages:


[Boxed](https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/boxed-slideshow&sa=D&source=editors&ust=1664361389169876&usg=AOvVaw2IhCFgVFrGLIfbHO7LgSlP)

[Full Width](https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/slideshow-fullwidth&sa=D&source=editors&ust=1664361389170241&usg=AOvVaw0xNz_w8pcqGCQ4SdtITYpp)

[Full Screen](https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/fullscreen-slideshow&sa=D&source=editors&ust=1664361389170549&usg=AOvVaw0QviSxNm0n3RQ29lfVPsmM)

### 6.7.1 Configuration

In this theme, these three slideshow implementations are initialized in the twig template and the javascript files available under the paths:

- Twig:

    - `baseplus/templates/views-view-field--mt_slideshow_boxed_width--nothing.html.twig`
    - `baseplus/templates/views-view-field--mt_slideshow_full_screen--nothing.html.twig`
    - `baseplus/templates/views-view-field--mt_slideshow_full_width--nothing.html.twig`

- Javascript:

    - `baseplus/js/init/slider-revolution-boxed-width-init.js`
    - `baseplus/js/init/slider-revolution-full-screen-init.js`
    - `baseplus/js/init/slider-revolution-full-width-init.js`

In these files you could configure the way the slideshows and their internal elements are   positioned and laid out.


For more information, and all the available options, please refer to the official documentation of Revolution Slider

- [https://www.themepunch.com/revsliderjquery-doc/slider-revolution-jquery-5-x-documentation/](https://www.themepunch.com/revsliderjquery-doc/slider-revolution-jquery-5-x-documentation/)


## 6.8. Team members

Collects and displays “Team Member” nodes in a grid layout or as a list. You can find the corresponding view pages under:


[/team-members](https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/team-members&sa=D&source=editors&ust=1664361389172804&usg=AOvVaw10rHwZs7qI5XmzTgm_mX1W)

[/team-members-2](https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/team-members-2&sa=D&source=editors&ust=1664361389173232&usg=AOvVaw0mKEIaeL_72KMOutgNgQEd)

[/team-members-masonry](https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/team-members-masonry&sa=D&source=editors&ust=1664361389173601&usg=AOvVaw1XFpizm3cb26a0tLsHCcjU)

## 6.9. Testimonials

Collects and displays testimonials nodes in a simple and stylish list. There is also available a simple view block that displays the last 2 testimonials as well as Slideshow powered view block that loops through all of them. The view pages are accessible through:


[/testimonials](https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/testimonials&sa=D&source=editors&ust=1664361389174208&usg=AOvVaw2eKzHSNx6jXwUyZbmE3yfP)

[/testimonials-3-col](https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/testimonials-3-col&sa=D&source=editors&ust=1664361389174511&usg=AOvVaw1MCqm1PftWtD1UBIsspVTc)

[/testimonials-3-col-2](https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/testimonials-3-col-2&sa=D&source=editors&ust=1664361389174879&usg=AOvVaw2ZK3q6Oh1w3SUwO3ndXOLu)

[/testimonials-masonry](https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/testimonials-masonry&sa=D&source=editors&ust=1664361389175176&usg=AOvVaw3Hxn1UdengCG8RApQTAtV_)

## 6.10. Products

Collects and displays Product nodes in the corresponding grid style. The available options are available at the following pages:

[/products-2-col](https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/products-2-col&sa=D&source=editors&ust=1664361389175739&usg=AOvVaw1H8nJtSKeWH0xLy4JoVoty)
[/products-3-col](https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/products&sa=D&source=editors&ust=1664361389175979&usg=AOvVaw0iMIxx6uzAOAlILvt910B2)
[/products-isotope](https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/products-isotope&sa=D&source=editors&ust=1664361389176224&usg=AOvVaw2ce3jWSak9Acvtgjxymn9_)
[/products-list](https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/products-list&sa=D&source=editors&ust=1664361389176501&usg=AOvVaw1UbRFR4PChJi-1cm1ShZyd)
[/products-metro-tiles](https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/products-metro-tiles&sa=D&source=editors&ust=1664361389176758&usg=AOvVaw2aXVqxtjlzow5EloGUfo48)



