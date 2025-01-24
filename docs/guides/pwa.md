---
sidebar_position: 10
---

# Progressive Web App (PWA)

Webmaker+ brings the power of Progressive Web Apps (PWA) to your website, enabling seamless, app-like experiences that enhance user engagement and accessibility on any modern mobile device. With PWA functionality, your site can offer faster load times, offline access, and an immersive experience that feels like a native app. This guide walks you through enabling and configuring these features, ensuring you unlock the full potential of your Webmaker+ site.

## Enabling PWA in Webmaker+

![image](https://github.com/user-attachments/assets/3dc37793-0ae8-48ff-8ef4-0ec389bf57f0)

To enable the PWA functionality in Webmaker+, follow these steps:

1. **Log in as Administrator:**
   - Ensure you are logged in to your Drupal site with administrator privileges.

2. **Go to Theme Settings:**
   - Navigate to the **Appearance** section in the Drupal admin panel.
   - Open the settings for the enabled theme (e.g., Base+).

3. **Enable PWA:**
   - Scroll to the "3rd Party Integrations" section.
   - Check the box labeled **Enable PWA**.

4. **Save Configuration:**
   - Click **Save configuration** to apply the changes.

Once you enable PWA, the service worker and associated functionality are activated.

## Installing the PWA

![image](https://github.com/user-attachments/assets/0e21af99-ee13-434f-beea-2b24e89bdc47)

1. **See the Installation Prompt:**
   When you visit the site, you will see an **"Install App" button.**

2. **Trigger the Installation Dialog:**
   Click the button to open the browser's native installation dialog.

3. **Choose Shortcut Options:**
   During installation, select where you want to create shortcuts for the app, such as on your desktop, taskbar, or start menu.

4. **Launch the App:**
   Once installed, you can launch the app in a standalone window, just like a native application.

## Verifying PWA Functionality

![image](https://github.com/user-attachments/assets/81eb83ac-52c0-4de9-9fb1-7c3aea70d0c7)


### 1. Check Service Worker in Developer Tools

- Open **Developer Tools** by pressing F12 and go to the **Application** tab.
- Under **Service Workers**, confirm that the service worker is registered and running.

### 2. Verify Asset Caching

- Navigate to the **Network** tab in Developer Tools.
- Reload the page and filter assets (e.g., `.css`, `.js`).
- Ensure that the **"Fulfilled by"** column shows `ServiceWorker` for cached assets.

### 3. Test Offline Functionality

- Simulate being offline by enabling **Offline mode** in the Application tab under Service Workers.
- Reload the page to confirm cached resources are served and the offline page is displayed.

## Uninstalling the PWA

### For Microsoft Edge:

1. Open Edge.
2. Navigate to **Apps** -> **Manage apps**.
3. Locate the app, click the three-dot menu, and select **Uninstall**.

### For Google Chrome:

1. Open Chrome.
2. Navigate to **More tools** -> **Extensions**.
3. Locate the app and click **Remove**.

### For Firefox:

1. Open Firefox.
2. Navigate to **Add-ons and Themes**.
3. Locate the app and click **Remove**.

### Clearing Service Worker and Cache

1. Open **Developer Tools** by pressing F12 and go to the **Application** tab.
2. Under **Service Workers**, click **Unregister**.
3. Under **Storage**, click **Clear site data** to remove cached assets.


## Local Development 

### Setup DDEV for HTTPS

PWA features require your site to be served over HTTPS. For local development using DDEV, follow these steps:

1. **Configure HTTPS in DDEV:**

   ```bash
   ddev config global --instrumentation-opt-in=true
   ddev start
   ```

2. **Resolve Certificate Issues:**
   If DDEV displays an error about `mkcert`, install certificates manually:

   ```bash
   sudo apt update
   sudo apt install libnss3-tools
   wget -O mkcert https://github.com/FiloSottile/mkcert/releases/download/v1.4.3/mkcert-v1.4.3-linux-amd64
   chmod +x mkcert
   sudo mv mkcert /usr/local/bin/

   mkcert -install
   ```

3. **Copy Certificates to Windows:**
   If you are using WSL, copy the certificates to Windows:

   ```bash
   cp $(mkcert -CAROOT)/rootCA.pem /mnt/c/Users/<YourWindowsUsername>/rootCA.pem
   ```

4. **Install Certificates on Windows:**

   - Open **MMC** by pressing **Win + R**, typing `mmc`, and pressing **Enter**.
   - Add the **Certificates Snap-in:**
     1. Go to **File** -> **Add/Remove Snap-in...**.
     2. Select **Certificates** and click **Add**.
     3. Choose **Computer account** and click **Next**.
     4. Select **Local Computer** and click **Finish**.
   - Import the Certificate:
     1. In the MMC console, expand **Certificates (Local Computer)** -> **Trusted Root Certification Authorities**.
     2. Right-click on **Certificates**, then select **All Tasks** -> **Import...**.
     3. Use the wizard to import the `rootCA.pem` file you copied earlier into the **Trusted Root Certification Authorities** store.


### Key PWA Implementation Files

Webmaker+ uses two key files to manage the PWA functionality:

#### 1. `pwa-service-worker.js`

- **Location:** : Located at the root of the site.
- **Purpose:**
  - Caches assets for offline use.
  - Manages network requests to provide reliable performance.
  - Handles updates to cached resources, ensuring users always have the latest versions.
- **Key Features:**
  - Intercepts `fetch` requests to serve cached assets.
  - Displays a friendly offline page when the network is unavailable.

#### 2. `themes/contrib/baseplus/js/custom/pwa.js`

- **Location:** Part of the theme's custom JavaScript directory (e.g. Base+)
- **Purpose:**
  - Registers the service worker with the browser.
  - Manages the installation prompt using the `beforeinstallprompt` event.
  - Tracks user actions for PWA installation and triggers the browser's native installation dialog.

These files work together to deliver the seamless user experience expected of a PWA.


## Extending the PWA Functionality

**Note:** The configuration described above provides a basic foundation for enabling PWA functionality. Once this is in place, you can extend and enhance the user experience with additional features.

### Suggestions for Enhancements:

1. **Push Notifications:**
   - Implement push notifications to engage users with real-time updates and alerts.
   - Integrate with services like Firebase Cloud Messaging (FCM) for easy setup.

2. **Dynamic Caching Strategies:**
   - Extend caching strategies to support more complex use cases, such as caching API responses dynamically for offline access.

3. **Custom Offline Pages:**
   - Design custom offline pages tailored to the website’s audience, with helpful instructions or interactive elements.

By building on this foundation, you can create a more engaging, reliable, and feature-rich PWA experience for your users.

### More Advanced Customizations
For more advanced customizations, you can modify `pwa-service-worker.js` and `pwa.js` to tailor the experience further.


## Closing

The PWA features in Webmaker+ offer significant enhancements, including offline access, improved performance, and seamless user experiences. By following this guide, you can enable, configure, and verify the PWA functionality on your Webmaker+ powered website. 
