---
sidebar_position: 3
---

# Configure Font Awesome Library for Webmaker+

Webmaker+ is designed to provide flexibility and customization options for your website. To personalize and maintain full control over the Font Awesome icons used on your site, you can configure the theme to load the Font Awesome library from your own account.

This guide explains how to set up your own Font Awesome kit and integrate it into the Webmaker+ theme.

---

## Why Use Your Own Font Awesome Kit?

Using your own Font Awesome kit provides several advantages:
- **Full control** over the icons and features available.
- **Personalized configuration** of your icon set to match your needs.
- Avoid potential limitations or restrictions from shared kits.

---

## Steps to Configure Font Awesome

### 1. Create a Font Awesome Account and Kit
1. Visit the [Font Awesome website](https://fontawesome.com).
2. Create an account or log in if you already have one.
3. Go to the **Kits** section in your Font Awesome dashboard and click **Create a Kit**.
4. Configure your kit with the following settings:
   - Select the version: **Latest 5.x**.
   - Enable the option: **Enable Compatibility with Older Versions**.
5. Once your kit is created, locate the **Embed Code** and copy the provided JavaScript URL (e.g., `//kit.fontawesome.com/<your_kit_id>.js`).

For more details on creating a Font Awesome kit, refer to the [official guide](https://docs.fontawesome.com/web/setup/use-kit).

---

### 2. Update the Webmaker+ Theme
1. Access your website’s file system and navigate to the theme directory:
   ```
   themes/custom/webmakerplus/webmakerplus.libraries.yml
   ```
2. Open the file in a text editor.
3. Locate the `fontawesome` library configuration.
4. Replace the existing Font Awesome URL with your new kit URL:
   ```yaml
   js:
     //kit.fontawesome.com/<your_kit_id>.js: {}
   ```

### 3. Save Changes and Refresh the Site
1. Save the updated `webmakerplus.libraries.yml` file.
2. Log in to your Drupal website’s admin panel.
3. Clear all caches by navigating to:
   **Configuration > Performance > Clear all caches**.

---

### 4. Verify Your Configuration
1. Reload your website to apply the changes.
2. Confirm that your Font Awesome icons are displaying as expected.

---

## Benefits of Using Your Own Kit

By setting up and using your own Font Awesome kit, you:
- Ensure consistent performance and availability of icons.
- Gain flexibility to update your icon set independently.
- Avoid usage limitations that may apply to shared or pre-configured kits.

This configuration helps you fully personalize your website while maintaining seamless functionality of the Webmaker+ theme.
