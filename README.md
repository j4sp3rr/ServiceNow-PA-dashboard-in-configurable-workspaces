# PA Dashboards within Configurable Workspaces
Within Configurable Workspaces it's possible to add a **Platform** Analytics (referred to as PA after this point) page _(not to be confused with Performance Analytics)_

This GitHub repository serves to allow quick access to the scripts and explanations needed to set up the redirects for PA dashboards to stay within a workspace.
This was built with Service Operations Workspace (SOW) in mind but should work for other workspaces, you might need to modify the redirection script in some ways however.
The respository also assumes you have some knowledge about workspaces, UI Builder and how they tie together.
This repository was built based on a Washington Developer instance (PDI), if you are on a different family release some things may be different.

## Why make these modifications
As of the Washington release, when a visualization is set to `Go to Data` this goes to CORE UI and does not open a workspace embedded list [as noted here](https://docs.servicenow.com/bundle/washingtondc-now-intelligence/page/use/par-for-workspace/concept/dv-chart-interactions.html#visualization-drilldown-in-config-ws).
Previously in Utah instances this did work for us, so this was fairly confusing.

Upon further investigation however it seemed that for some PA dashboards intergrated within pages (Admin dashboard within /nav/ui) the ability to redirect elsewhere was retained succesfully.
This is because the Admin dashboard had a diffferent action attached to the dashboard widget clicked event in UI Builder.
In an effort to retain functionality of being able to open PA indicators/reports within a workspace (SOW in this case), the modifications in this GitHub repository set out to replicate this functionality for the time being until ServiceNow officially adresses this issue.

## Contents
* Documentation and Configuration on how to create and modify a full page PA dashboard display
* Documentation and configuration on how to create a KPI Details page to handle whenever a user clicks on a KPI within a PA dashboard

### Bonus content
*  Documentation and configuration on how to add a PA dashboard as a component to a page rather than a seperate page.

## Disclaimer
1. **Use at your own Risk**: Please thoroughly review the code before implementing it in your ServiceNow instances.
2. **Reporting Issues and Mistakes**: If you find any mistakes or issues please make sure to report them and consider contributing to this repository by submitting corrections or enhancements
3. **No Warranty or Support**: This repository is provided as-is, without any warranties or gurantees. It does not come with any official support from ServiceNow or repository owners/contributors.

## Known issues
### My dashboards don't show up in my workspace
This is a more general issue, but if you're trying to use a PA dashboard within a workspace please make sure your dashboard is shared with that workspace.
You will need to share your dashboard with every workspace where you want to use the dashboard. 
You can do this by going to the dashboard visibility section within the dashboard's details.
