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

Similarly, you need to configure the Metatag AI Generator module:
1. Navigate to the path `admin/config/content/metatag-ai`.
2. Enter or paste the API Key and submit the form.

Your Webmaker+ is now ready to take advantage of all the AI-powered features.

## How to Use the AI Features
This section will guide you through all the AI-powered features available in your installation.

### AI Generated Content
Every time you create or edit a node, a collection of AI-powered options is available in the right sidebar.

#### Suggest Taxonomy
Select a field and the "Suggest Taxonomy" button will generate terms derived from your content.

#### Suggest Content Title
Select a field, usually the `body`, and the "Suggest title" button will generate a node title for you.

#### Summarize
Select a field, usually the `body`, and the "Summarize" button will prepare an elegant and precise summary for you.

You can use this summary for the `Summary` part of the `body` field, social media posts, or anywhere else you need to reference this node/content.

#### Adjust Content Tone
Select a field and the "Adjust tone" button will improve your text according to your selection. For example, it will make it more "friendly".

#### Analyze Text
Select a field, usually the `body`, and the "Analyze" button will inform you of any content policies your text may violate.

### Generate AI Metatag
In the create or edit node form, you will find a new button "Generate Metatag" at the bottom of the form, next to the "Save", "Preview", and "Delete" buttons.

1. First, finish with the content of your node using all its fields.
2. Click on the "Generate Metatag" button.
3. Review the results in the right sidebar in the section "AI Post Metatags".
4. Save the node.

### Generate AI Images
The `Post` content type comes preconfigured so you can use AI-generated images. OpenAI takes into account the text in the body field to prepare its prompts.

1. Edit or create a new Post node.
2. Fill in the body fields.
3. Leave the `In-page Image(s)` field empty.
4. Save your node, and OpenAI will generate an image for this field.

Important notes:
1. AI will generate images only when the corresponding image field is empty.
2. You can override the prompt that controls the creation of the images by adjusting the `Pre-prompt` field.
