---
sidebar_position: 3
---

# Configure Font Awesome Library for Themes Using Font Awesome Kits

This guide is specifically for configuring themes that rely on the **Font Awesome Kit**, such as the **Tourism+** or **News+** theme. If your theme uses interchangeable Webmaker+ themes, this configuration does not apply.

Themes like News+ include a pre-configured Font Awesome Kit that you can replace with your own to gain full control and personalization over the Font Awesome library.

---

## Why Configure Your Own Font Awesome Kit?

Using your own Font Awesome kit ensures:
- **Full control** over the icons and features available to your website.
- **Personalized configuration** to match your website’s unique style and requirements.
- Avoiding potential limitations or usage caps associated with shared kits.

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

For detailed guidance on creating a Font Awesome kit, refer to the [official guide](https://docs.fontawesome.com/web/setup/use-kit).

---

### 2. Update the Tourism+ Theme with Your Kit
1. Access your website’s file system and navigate to the Tourism+ theme configuration file:
   ```
   themes/custom/newsplus/newsplus.libraries.yml
   ```
2. Open the file in a text editor.
3. Locate the `fontawesome` library section. It should look like this:
   ```yaml
   fontawesome:
     version: 4.7.0
     remote: //kit.fontawesome.com/
     js:
       //kit.fontawesome.com/460xxxxxx.js: {}
     license:
       name: MIT
       url: //opensource.org/licenses/mit-license.html
       gpl-compatible: true
   ```
4. Replace the `js` line with the URL of your new Font Awesome kit:
   ```yaml
   fontawesome:
     version: 4.7.0
     remote: //kit.fontawesome.com/
     js:
       //kit.fontawesome.com/<your_kit_id>.js: {}
     license:
       name: MIT
       url: //opensource.org/licenses/mit-license.html
       gpl-compatible: true
   ```

---

### 3. Save Changes and Refresh the Site
1. Save the updated `tourismplus.libraries.yml` file.
2. Log in to your Drupal website’s admin panel.
3. Clear all caches by navigating to:
   **Configuration > Performance > Clear all caches**.

---

### 4. Verify Your Configuration
1. Reload your website to apply the changes.
2. Confirm that the Font Awesome icons are displaying as expected.

---

## Benefits of Using Your Own Kit

By setting up and using your own Font Awesome kit, you:
- Ensure consistent performance and availability of icons.
- Gain flexibility to update your icon set independently.
- Avoid usage limitations that may apply to shared or pre-configured kits.


