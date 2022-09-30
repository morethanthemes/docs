---
sidebar_position: 4
---

# 4. Modules & Configuration

Overview of the Drupal modules used in Webmaker+:

- Superfish
- Better Exposed Filters
- Entity Reference Revisions
- @font-your-face
- Paragraphs
- Video Embed Field
- Field Group
- Font Awesome Icons
- Webform
- Crop API
- Image Widget Crop
- Inline Entity Form
- Mailchimp
- Metatag
- OneSignal Integration
- Views Infinite Scroll 
- Flippy
- MT Cookie Consent
- MT Countdown

## 4.1. Contributed Modules Used

### 4.1.1. Superfish

**Webmaker+** makes use of the Superfish module and the corresponding library to display multi-level menus. To use, simply add the corresponding superfish block to the region you want and Webmaker+ will style the menu accordingly.


The Superfish module also implements **a mobile menu** that is configured to activate in narrow screen widths (configured through the block settings).

### 4.1.2. Better Exposed Filters

This module is used to provide more UX friendly options to use as filters in views. These options are available through the corresponding options in these views

### 4.1.3. Entity Reference Revisions

This module is a requirement of the “Paragraphs” module.

### 4.1.4. Paragraphs

This module allows you to define collections of fields to be used within other entities. For example the Fancy tabs custom block is powered by a paragraph field that contains a Title field, a Subtitle field as well as the referenced block.

### 4.1.5. Video Embed Field

This module provides a field that is used in different content types that provides video (Youtube & Vimeo) support.

### 4.1.6. Field Group

This module is used to group similar fields together in order to provide better Content editing experience.

### 4.1.7. Font Awesome Icons

This module is used to provide deep integration with the [FontAwesome 5 icons](https://www.google.com/url?q=https://fontawesome.com/&sa=D&source=editors&ust=1664361389153887&usg=AOvVaw23fb6SfeAkDNPzJLOQNPD0).

### 4.1.8. Webform

This module is used to implement the registration forms and also adds support for embedding any form into a block or page.

### 4.1.9. Crop API

Provides basic API for image cropping.

### 4.1.10. Image Widget Crop

Provides an interface for using the features of the Crop API. This element provides an UX for using a crop on all fields images or file elements. This module has particularity to purpose capability to crop the same image by “Crop type” configured.

### 4.1.11. Inline Entity Form

Provides a widget for inline management (creation, modification, removal) of referenced entities.

### 4.1.12. Mailchimp

This module provides integration with [Mailchimp](https://www.google.com/url?q=http://www.mailchimp.com/&sa=D&source=editors&ust=1664361389155598&usg=AOvVaw1RQlzJm3rbNwx746a8DIWL), a popular email delivery service. The module makes it easy for website users or visitors to control which of your email lists they want to be on (or off), lets you generate and send Mailchimp email campaigns from your site.

### 4.1.13. Metatag

The *Metatag* module allows you to automatically provide structured metadata, aka "meta tags", about a website.

### 4.1.14. OneSignal Integration

This module provides integration with the free HTTP Web Push service from [OneSignal](https://www.google.com/url?q=http://onesignal.com&sa=D&source=editors&ust=1664361389156795&usg=AOvVaw0Ci205JB9TzIL0-BQJ_NuW), allowing visitors to subscribe to notifications and site owners to send notifications to the subscribers.

### 4.1.15. Views Infinite Scroll

Views infinite scroll allows you to load and display pages of any view inline, using AJAX (this has been called infinite scrolling, load more, autopaging, endless pages and more). The pager can be triggered with the press of a button or automatically as the user scrolls to the bottom of the view's content.

### 4.1.16. Flippy

Flippy is an ultra-simple module that generates previous/next pagers for content types.

## 4.2. Custom Modules Used

### 4.2.1. Mt Cookie Consent

This is a custom module by More than Themes that provides features of the Cookie Consent Javascript library - [https://cookieconsent.insites.com/](https://cookieconsent.insites.com/)


You can configure the content and the messages of this features through:


`admin/config/mt_cookieconsent`

## 4.3. Automated image generation and handling

Under the hood, **Webmaker+** comes with pre-configured image presets ready to be used.


**All the content types** make use of this feature and **produce all necessary thumbnails and other derived images automatically**. 


To make use of the automated image generation and handling, **simply upload your images** and **Base+ Busines** will use those for the Front Page and any other place where a derived image is needed.