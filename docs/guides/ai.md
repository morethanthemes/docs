---
sidebar_position: 9
---

# AI features

## Overview

Webmaker+ comes with a chery picked and well configure suite of AI modules that improve the overal authoring experience. In short the Inteligent Webmaker enables you to:
1. Suggest a node title or taxonomy terms based on your content.
2. Prepare a summary of your content
3. Analize your text for compliance with various policies
4. Generate Metatags for better SEO performance
5. Generate Images for your posts. 

The following instruction will guide you how to 
1. Setup your installation and enable tha AI Features
2. Use the AI features and improve your productivity.

## Enable OpenAI integration 
Webmakers+ AI features are powered by OpenAI so you need first create an OpenAI account link your installation with it. Webmaker+ needs access to the OpenAI API.

### Create OpenAI API key
The Open AI API key is required for the AI related modules to work.

To get the API key, log in to your [Open AI account](https://platform.openai.com/login?launch) (or create a new one), select the [API keys](https://platform.openai.com/api-keys) section, from the top right corner click "Create new secret key".

Keep this generated key so you will need to set it in your Webmaker+ installation

### Set the OpenAI API Key
Switch to your Webmaker+ installation and 
1. Navigate to the path `admin/config/openai/settings`
2. Enter, or paste, the API Key you generated before and sumbit the form.

Similarly you need to configure the Metatag AI Generator module:
1. Navigate to the path `admin/config/content/metatag-ai`
2. Enter, or paste, the API Key  and sumbit the form. 

Your Webmaker+ is now ready to take advandance of all the AI powered features. 


## How to Use the AI features
This section will guide you through all the AI powered features available in your installation 

### AI Generated Content
Every time you create or edit a node as collection of AI powered options are availabel in the right sidebar.

#### Suggest Taxonomy
Select a field and the "Suggest Taxonomy" button will generate terms derived from your content 

#### Suggest Content Title
Select a field, usualy the `body` and the "Suggest title" button will generate a node title for you.

#### Summarize
Select a field, usualy the `body` and the "Summarize" button will prepare a elegant and precise summary for you. 

You can use this summary for the `Summary` part of the `body` field, social media post, or everywhere else you need to make a reference to this node/content.

#### Adjust content tone
Select a field and the "Adjust tone" button will improve your text according to your selection. For example it will make it more "friendly". 

#### Analyze text
Select a field, usualy the `body` and the "Analyze" button will tell you content policies you text may violates. 

### Generate AI Metatag
I the create or edit node form you will find a new button "Generate Metatag" at the bottom of the form, next to the "Save", "Preview" and "Delete" 

1. First finish with the content of your node using all its fields
2. Click on the "Generate Metatag" button
3. Review the resuts in the right sidebar in the section "AI Post Metatags" 
4. Save the node. 


### Generate AI Images
The `Post` content type comes with everything preconfigured so you can use AI generated images. OpenAI takes into account the text in the body field to prepare its prompts.

1. Edit or Create a new Post node
2. Fill in the body fields
3. Leave the `In-page Image(s)` field empty
4. Save your node and OpenAI will generate and image for the this field.

Important notes

1. AI will generate images only when the corespong image field is empty.
2. You can override the prompt that controls the creation of the images adjusting the `Pre-prompt` field.



