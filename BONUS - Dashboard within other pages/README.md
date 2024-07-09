# PA Dashboard as a component on a page
_Officially_ Service Now no longer supports adding a PA dashboard as a component to a regular UIB page.
However this component does exist and is being used in the template, so we can reuse it for other pages.
This does mean you'll have to do it manually by diving into the page definition (sys_ux_macrocomponent) and amnually adding it to the Composition JSON.

Since theres no official support use this at your own risk, and please note you **CANNOT** add more than one PA Dashboard component to a page otherwise you get issues.

This also assumes you've already set up the PA Dashboard page on your workspace on your instance, as you can copy the Component from the composition section of that page to ensure sys_id's are correct.

I've added an example JSON to this folder, but please make sure to copy your own from your own workspace.

## 1. Open page definition of your PA Dashboard page
Navigate to your PA Dashboard page and head to the settings tab.
Then on your variant click on Open records and choose Page definition

## 2. UX Macrocomponent Definition
After accessing the UX Macrocomponent Definition of your page copy the Componsition (preferably to your JSON editor of choice) and scan it for your element (look for elementId).
If you cannot find it please check the example JSON for reference.

## 3. Transfering component
After you've found your component make sure to copy everything related to the PA Dashboard component (including the definition) and paste it somewhere in the composition of your page (take care to ensure your end result is a valid JSON file). You do not have to worry about its placement yet as after you've put it on the page you can then use UI Builder to move it around/put it in a container if you'd like and it'll work fine.

## 4. Configuring the dashboard component
If you've copied your PA Dashboard component from your PA Dashboard page it should already be set up, except for the event handler (this can be copied from your Dashboard page).
if it doesnt work like expected you can reference the Dashboard page folder for information on how to set it up.