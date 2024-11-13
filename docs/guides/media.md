---
sidebar_position: 10
---

# Managing Media

## Overview

Webmaker+ comes equipped with a robust and flexible media management system, designed to streamline the process of adding, configuring, and displaying media within your content. This guide will introduce you to the various media functionalities available in Webmaker+ and walk you through how to upload, organize, and customize media on your pages.

Webmaker+ supports media sourced from multiple options:
- Direct file uploads from your system.
- Seamless integration with Pexels and Unsplash for high-quality stock images.
- AI-generated images, as detailed in our [AI Image Generation Guide](https://docs.webmaker.plus/docs/guides/ai#generate-ai-images).

## Configuring Pexels and Unsplash

To enable the Pexels and Unsplash integrations in Webmaker+, you need to generate API keys for each service and configure them in your installation. These integrations are powered by the **Media External** module in Drupal, which supports various external media sources. Additional documentation and configuration details are available on the module’s [official page](https://www.drupal.org/project/media_external).

### 1. Generate Your API Keys

- **Pexels API Key**: 
  - Go to the [Pexels API Key Page](https://www.pexels.com/api/key/).
  - Log in or create a new account if needed.
  - Complete the fields for **Project Name**, **Project Category**, and a brief description (at least 50 characters).
  - Agree to the terms of service and click **Generate API Key**.
  - Copy the generated API key.

- **Unsplash API Key**:
  - Go to the [Unsplash API Key Page](https://unsplash.com/oauth/applications).
  - Log in or create a new account if needed.
  - Click **New Application** and fill out the fields for **Application Name** and **Description**.
  - Accept the terms and click **Create Application**.
  - Copy the **Access Key** and **Secret Key**.


### 2. Configure API Keys in Webmaker+

To enable the Pexels and Unsplash integrations, you need to add the generated API keys to the `settings.php` configuration file in your Webmaker+ installation. Here’s how:

1. **Locate the settings.php File**:
   - Navigate to your Drupal installation directory and locate the `sites/default/settings.php` file.

2. **Open settings.php**:
   - Open the `settings.php` file in a text editor with write permissions.

3. **Add API Key Configuration**:
   - Scroll to the end of the file and add the following configuration, replacing `'your_unsplash_access_key'` and `'your_pexels_api_key'` with the actual keys you generated:

   ```php
   $settings['media.external_provider.unsplash.access_key'] = 'your_unsplash_access_key';
   $settings['media.external_provider.pexels.api_key'] = 'your_pexels_api_key';
   ```

   For example:

   ```php
   $settings['media.external_provider.unsplash.access_key'] = '0MCxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
   $settings['media.external_provider.pexels.api_key'] = 'oJxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
   ```

4. **Save and Close the File**:
   - Save the changes to the `settings.php` file and close it.

### 3. Verify Configuration

Once the API keys are configured, return to your Webmaker+ interface and test the Pexels and Unsplash integrations by following the steps outlined in the **Adding Media to Your Content** section. You should now be able to access Pexels and Unsplash images directly from the media library.

For additional options and advanced configuration, refer to the **Media External** module’s [documentation on Drupal.org](https://www.drupal.org/project/media_external). This module provides comprehensive support for external media sources and may offer additional settings that enhance your integration with Pexels and Unsplash.

## Adding Media to Your Content

Webmaker+ allows users to upload images directly or select from popular stock image platforms. Here’s how to add media to your content:

1. **Edit or Create a New Node**: For example, start with the Post content type.
2. **Locate the In-page Image(s) Field**: In the editor, locate the "In-page Image(s)" field and click the **Add Media** button to upload media from your device or access the media library.

When the media dialog opens, you will see the following options:

- **Upload Image**
- **Select Image from Unsplash**
- **Select Image from Pexels**

Each option is detailed below to help you select and configure media effectively.

### Upload Image

To upload a new image directly from your device, follow these steps:

1. **Select “Upload Image” from the Sidebar**: In the media dialog, select **Upload Image** from the sidebar on the left.
   
   ![image](https://github.com/user-attachments/assets/a6e33fa9-ebc0-4daf-bb99-de01b1a79407)

2. **Choose Files**: In the "Add files" section, click the **Choose Files** button to select an image from your computer.

3. **Upload the Image**: Select the desired image from your computer, and it will begin uploading.

4. **Set Name and Alternative Text**: Once the image is uploaded, you will see a form where you can enter a **Name** and **Alternative Text** for the image. The Name is the file's identifier in the media library, and the Alternative Text improves accessibility by describing the image content.

5. **Save the Image**: After setting the Name and Alternative Text, click **Save**. The image is now added to the media library and selected automatically.

6. **Insert the Selected Image**: With the image still selected, click on the **Insert selected** button at the bottom right to add the image to your content.

> **Note**: After selecting "Upload Image," users can also choose an existing image from the library instead of uploading a new one. Simply scroll through the available images and select any image from the library.

### Select Image from Unsplash or Pexels

Webmaker+ integrates with both Unsplash and Pexels, giving you access to a vast library of high-quality, free images directly within the platform. Follow these steps to add images from either source:

1. **Select “Unsplash” or “Pexels” from the Sidebar**: In the media dialog, choose either **Unsplash** or **Pexels** from the sidebar on the left, depending on your preferred image source.

2. **Search for Images**: In the **Add by keyword** field, enter a keyword describing the type of image you’re looking for. Click the **Search** button to generate relevant image results.

3. **Select Images**: Browse through the search results and click on the images you wish to add. Each selected image will be highlighted with a checkmark. You can select multiple images at once.

   ![image](https://github.com/user-attachments/assets/1580c409-d2ca-4910-9727-efd8bb0aee84)

4. **Import Selected Images**: Once you've made your selections, click the **Import** button at the bottom right. This will add the selected images to the media library, allowing you to configure their properties before finalizing.

5. **Set Image Properties**: For each imported image, specify a **Name**, **Description**, and **Alternative Text** to improve accessibility and SEO. When done, click **Save** to add the images to the library.

   ![image](https://github.com/user-attachments/assets/90998a75-9ab8-403a-9d02-15452a8381aa)

6. **Insert Selected Images**: After saving, the images will appear in the media library, ready for insertion. Ensure the images you want to add are selected, and then click **Insert selected** to add them to your content.

   ![image](https://github.com/user-attachments/assets/ab7eb7d7-79de-4688-af3d-5f582863ed67)


---

With these options, Webmaker+ makes it easy to add and manage high-quality media from various sources, enabling you to create visually engaging and responsive content. Use these tools to bring your pages to life and enhance your readers' experience.
