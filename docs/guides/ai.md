---
sidebar_position: 9
---

# AI Features

## Overview

Webmaker+ comes with a cherry-picked and well-configured suite of AI modules that enhance the overall authoring experience. The Intelligent Webmaker+ enables you to:

1. Suggest a node title or taxonomy terms based on your content.
2. Prepare a summary of your content.
3. Analyze your text for compliance with various policies.
4. Generate Metatags for better SEO performance.
5. Generate images for your posts.

The following instructions will guide you on how to:
1. Set up your installation and enable the AI features.
2. Use the AI features to improve your productivity.

## Enable OpenAI Integration
Webmaker+ AI features are powered by OpenAI, so you first need to create an OpenAI account and link your installation to it. Webmaker+ requires access to the OpenAI API.

### Create OpenAI API Key
The OpenAI API key is required for the AI-related modules to work.

To get the API key, log in to your [OpenAI account](https://platform.openai.com/login?launch) (or create a new one), select the [API keys](https://platform.openai.com/api-keys) section, and click "Create new secret key" in the top right corner.

Keep this generated key, as you will need to set it in your Webmaker+ installation.

### Set the OpenAI API Key
Switch to your Webmaker+ installation and:
1. Navigate to the path `admin/config/openai/settings`.
2. Enter or paste the API Key you generated before and submit the form.

![image](https://github.com/morethanthemes/docs/assets/690575/a1b4ea49-5b46-4052-b3aa-e35fed6678c4)


Similarly, you need to configure the Metatag AI Generator module:
1. Navigate to the path `admin/config/content/metatag-ai`.
2. Enter or paste the API Key and submit the form.

![image](https://github.com/morethanthemes/docs/assets/690575/b23378ff-173f-4b25-86ad-7815900b129d)

Your Webmaker+ is now ready to take advantage of all the AI-powered features.

## How to Use the AI Features
This section will guide you through all the AI-powered features available in your installation.

### AI Generated Content
Every time you create or edit a node, a collection of AI-powered options is available in the right sidebar.

![image](https://github.com/morethanthemes/docs/assets/690575/bd99d95d-3e07-4143-88f5-7d5345b84c69)


#### Suggest Taxonomy
Select a field and the "Suggest Taxonomy" button will generate terms derived from your content.

![image](https://github.com/morethanthemes/docs/assets/690575/5a6100c7-95f9-4abb-9c8b-7b4a868e59ac)

#### Suggest Content Title
Select a field, usually the `body`, and the "Suggest title" button will generate a node title for you.

![image](https://github.com/morethanthemes/docs/assets/690575/54a9815d-8238-4c67-874a-43e4a57f53cf)

#### Summarize
Select a field, usually the `body`, and the "Summarize" button will prepare an elegant and precise summary for you.

You can use this summary for the `Summary` part of the `body` field, social media posts, or anywhere else you need to reference this node/content.

![image](https://github.com/morethanthemes/docs/assets/690575/b481abe6-39ae-49b0-b89d-9c4578f12719)


#### Adjust Content Tone
Select a field and the "Adjust tone" button will improve your text according to your selection. For example, it will make it more "friendly".

#### Analyze Text
Select a field, usually the `body`, and the "Analyze" button will inform you of any content policies your text may violate.

![image](https://github.com/morethanthemes/docs/assets/690575/3807f346-db7e-4c13-9f5b-536ad669e862)

### Generate AI Metatag
In the create or edit node form, you will find a new button "Generate Metatag" at the bottom of the form, next to the "Save", "Preview", and "Delete" buttons.

1. First, finish with the content of your node using all its fields.
2. Click on the "Generate Metatag" button.
3. Review the results in the right sidebar in the section "AI Post Metatags".
4. Save the node.

![image](https://github.com/morethanthemes/docs/assets/690575/b03254f3-1d9b-4aeb-9492-9eb6da73f919)

![image](https://github.com/morethanthemes/docs/assets/690575/811caf11-0f5f-414c-a8ae-356056941a7c)


### Generate AI Images
The `Post` content type comes preconfigured so you can use AI-generated images. OpenAI takes into account the text in the body field to prepare its prompts.

![image](https://github.com/morethanthemes/docs/assets/690575/4792c44d-0a6e-4cc8-9afa-1edf606d88a4)

1. Edit or create a new Post node.
2. Fill in the body fields.
3. Leave the `In-page Image(s)` field empty.
4. Save your node, and OpenAI will generate an image for this field.

![image](https://github.com/morethanthemes/docs/assets/690575/bce850b1-1e18-4fea-8935-fc10b9332fe8)


Important notes:
1. AI will generate images only when the corresponding image field is empty.
2. You can override the prompt that controls the creation of the images by adjusting the `Pre-prompt` field.

![image](https://github.com/morethanthemes/docs/assets/690575/d90d97db-839e-40af-9817-bdf9d847be8a)

Here is the revised and extended section on disabling the AI image generation feature for the Post content type, with improved clarity and consistent language:

---

## Disable AI Image Generation for the Post Content Type
As the OpenAPI image generation feature is currently in beta, you may wish to disable it within your Webmaker+ (Drupal) installation. The following instructions will guide you through the process.

### Disable the `In-page` Image Field

1. Navigate to `admin/structure/types/manage/mt_post/fields`.
2. Locate the **In-page Image(s)** (`field_mt_pst_image`) field and click the edit button.
3. Deactivate the **Enable AI Interpolator** option.

![image](https://github.com/user-attachments/assets/17314e93-575f-4f18-b2a7-f0ce60b1c1e1)


### Disable the `Pre-prompt` Field

1. Navigate to `admin/structure/types/manage/mt_post/fields`.
2. Locate the **Pre-prompt** (`field_mt_post_pre_prompt`) field and click the edit button.
3. Deactivate the **Enable AI Interpolator** option.

![image](https://github.com/user-attachments/assets/39df5f05-4097-4c34-8b86-0f8d9e5b0264)

### Uninstall Modules (Optional)

If you prefer, you can uninstall the related modules. However, we suggest keeping the modules enabled for easier reactivation in the future.

1. Navigate to `admin/modules/uninstall`.
2. Uninstall the **AI Interpolator OpenAI** module.
3. Uninstall the **AI Interpolator** module.

### Delete the `Pre-prompt` Field (Optional)

If you decide that you no longer need this feature, you can clean up your installation by removing the related field.

1. Navigate to `admin/structure/types/manage/mt_post/fields`.
2. Locate the **Pre-prompt** (`field_mt_post_pre_prompt`) field and click the delete button.
