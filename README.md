# Contentful AI Toolkit

The Contentful AI Toolkit provides a set of features powered by OpenAI:

- Content summarization
- Content translation (field-level and entry-level)
- Content tagging

## Related

- [SDK](https://github.com/focusreactive/contentful-ai-sdk)

## Installation

The toolkit requires an OpenAI API key to work. If you don’t provide your own, it will use a built-in demo key with limited usage. Once the limit is reached, you’ll need to add your own key to continue using the features (please refer to [OpenAI docs](https://platform.openai.com/docs/quickstart) for more details).

After the app is installed, configure the sidebar by adding the toolkit to your extensions list for the necessary entries.

![configuration](https://github.com/user-attachments/assets/4b86c1b3-49f7-4543-8b14-70a6fe213afe)

---

## Usage

Let's look through each of the supported features.


### Summary

The tool allows you to quickly summarize information in your entry, so you can use it for SEO descriptions or other purposes, such as a brief blog post description to display its business card.

Select the Summary tab, enter the entry title, and press the button, we will prepare the rest for you.

https://github.com/user-attachments/assets/29033097-9dbd-413f-9111-5035d1b09446


### Translation

The plugin offers OpenAI-powered translations of your entries into various languages. Field-level and entry-level [localization strategies](https://www.contentful.com/help/localization/field-and-entry-localization/) are supported.

To perform field-level translation, open the plugin, select the Field level, select the language you want to translate the content into, and click the button. Within 10-20 seconds we will prepare a translation of the page, taking into account the context and topic discussed in it.

Important notes:

1. Ensure the target language is added to your environment’s Locales.
2. Enable localization for the relevant fields in your content model settings.

https://github.com/user-attachments/assets/9c7f547c-9372-4121-92f2-38d6e3d799ea


For entry-level you need to have both container and content entry in your default locale (as data source for the translation). The tool will automatically detect their types, so you can open any of these. Once localization is completed, we will create a new entry and add it to the container.

❗  **Your container entry should have localization enabled on the reference to the content entry.**

https://github.com/user-attachments/assets/eb69bdb0-1aef-4ab6-b897-9781963a8541


### Tags

The toolkit can help you assign relevant tags to entries based on their actual content. It pulls tags from your environment settings, so make sure they’re set up correctly.

Once the AI generates tag suggestions, simply pick the ones you want and apply them.

https://github.com/user-attachments/assets/955008c7-26d3-4bc8-bbd7-f41ce87be725


