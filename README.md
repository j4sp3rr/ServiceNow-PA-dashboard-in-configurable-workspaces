# PA Dashboards within Configurable Workspaces
Within Configurable workspaces it's possible to add a **Platform** analytics page _(not to be confused with Performance analytics)_

## Disclaimer
1. **Use at your own Risk**: Please thoroughly review the code before implementing it in your ServiceNow instances.
2. **Reporting Issues and Mistakes**: If you find any mistakes or issues please make sure to report them and consider contributing to this repository by submitting corrections or enhancements
3. **No Warranty or Support**: This repository is provided as-is, without any warranties or gurantees. It does not come with any official support from ServiceNow or repository owners/contributors.

## Contents
1. Documentation and Configuration on how to create and modify a full page PA dashboard display
2. Documentation and configuration on how to create a KPI Details page to handle whenever a user clicks on a KPI within a PA dashboard

### Bonus content
1.  Documentation and configuration on how to add a PA Dashboard as a component to a page rather than a seperate page.

## Why make modifications
As of the Washington release when a visualization is set to `Go to Data` this goes to CORE UI and does not open a workspace embedded list [as noted here](https://docs.servicenow.com/bundle/washingtondc-now-intelligence/page/use/par-for-workspace/concept/dv-chart-interactions.html#visualization-drilldown-in-config-ws).
We were confused by this as this previously worked in our Utah instances where we make custom workspaces for example.

Upon further investigation however it seemed that for some PA dashboards intergrated within pages (Admin dashboard within /nav/ui) the ability to redirect elsewhere was retained succesfully.
We discovered that was because this dashboard had a diffferent action attached to the Dashboard widget clicked event in UI Builder.
In an effort to retain functionality of being able to open PA indicators/reports within a workspace (SOW in this case) We've set out to replicate this functionality for the time being until Service Now officially adresses this issue.

This github repository serves to allow quick access to the scripts and explanations needed to set up the redirects for PA dashboards to stay within a workspace.
This was built with SOW in mind but should work for other workspaces, you might need to modify the redirection script in some ways however.
The respository also assumes some knowledge about workspaces, ui builder, and how they tie together.
