# Dashboard page

To use PA dashboards within a configurable workspace first we need to make a dashboard page.
Servicenow provides the option to make a dashboard page from a template within the Create a new page, using this is fine (and recommended).
Give the page and the variant any name/URL path you prefer.
You will not need to add/modify any parameters, leave these as default.

**Scope**: Please note that although you can make these pages in any scope it is recommended to pick an appropriate scope for your workspace. In this case Service Operations Workspace Core was chosen.

## Notes for instances on older releases than washington

On our Utah instances we did not have the new dashboard template yet in UIB just the legacy template, if this happens you will need to make some modifications, namely:

- Copy the contents of the base page rather than using the original page
- After creating the dashboard page you will need to add some optional parameters to the settings under general
  - sysId
  - tabSysId
  - filter
  - edit
  - element

## Making the dashboard page visible in the sidebar

To make sure your Dashboard page is accesible in your workspace's sidebar you need to add it to the Side navigation.
For this go to the Experience record of your workspace and select settings.
Here you will find the Side navigations options where you can add your page, an icon and a label.

## Modifications to dashboard page

After using the template some elements need to be modified to fit our purpose, these are detailed below

### Dashboard Component

#### Config

Within the config tab of the dashboard component the options `Use default redirections` should be disabled and `Use as embedded` should be enabled, besides that you should check if the following fields are filled accordingly

| Field                                   | Value                                                    |
| --------------------------------------- | -------------------------------------------------------- |
| Tab Sys id                              | @context.props.tabSysId                                  |
| Default Dashboard                       | _Blank_ **or** any dashboard you want to show by default |
| Shareable Filter Sys ID                 | @context.props.filter                                    |
| Global filters _(washington and later)_ | @context.props.unifiedFilters                            |

#### Events

Within the events make sure to create the Dashboard widget Clicked event mapping if it isnt there yet and add an event handle to `Link to destination`.
Set this event handler to Mode Script in the top right and enter the script included in this folder.
