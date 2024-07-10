# KPI Details page

To make sure we can handle Indicators from PA Dashboards as well we need a page with KPI Details.
Unfortunately there is no template for this so we'll need to make it manually from scratch.

## 1. Page creation

**Scope**: Please note that although you can make these pages in any scope it is recommended to pick an appropriate scope for your workspace. In this case Service Operations Workspace Core was chosen.

Create a new page and select `Create from scratch instead` in the top right
Choose and page name you'd like but set the url path to `kpi_details` to make sure our script from the PA Dashboard page works (if you need to use a different url path make sure to change it there as well.)
For parameters set up the following:

| Required parameters | Optional parameters |
| ------------------- | ------------------- |
| uuid                | scoreDate           |
|                     | breakdowns          |
|                     | domain              |
|                     | aggregate           |

Set any variant name you'd prefer.

## 2. Page contents

This page only needs to serve the KPI Details component, and this is included in the out of the box components so add it to the page or drag it in from the component overview.

## 3. Component setup

To set up the compontent follow the following setps

### Config tab

The fields displayed below should be set up as data so we can enter the value as a reference, any other sections can be left as default

#### KPI Config

| Field                               | Value                     |
| ----------------------------------- | ------------------------- |
| Indicator                           | @context.props.uuid       |
| Breakdowns                          | @context.props.breakdowns |
| Aggregate                           | @context.props.aggregate  |
| Domain                              | @context.props.domain     |
| Side panel _(washington and later)_ | @context.props.panel      |

#### Date

| Field                  | Value                    |
| ---------------------- | ------------------------ |
| Score date             | @context.props.scoreDate |
| Date range: Start date | @context.props.startDate |
| Date range: End date   | @context.props.endDate   |

### Style tab

Set the Height to 100%, leave the rest default

### Events tab

Set up two event mappings

#### Record list row clicked

Set this up with an event handler `Link to destination`, choose the script mode in the top right and add the script included in this folder.

#### Formula component clicked

Set up another event handler `Link to destination` in the form mode.

Set Title as static to KPI Details then set a destination.
When in the Select destination page, on the left open Pages and choose the `KPI Details` page.
Then on the right choose the following values

| Field      | type | Value                   |
| ---------- | ---- | ----------------------- |
| uuid       | data | @payload.indicatorSysid |
| scoreDate  | data | @payload.scoreDate      |
| breakdowns | data | @payload.breakdowns     |
| domain     | data | @payload.domain         |
| aggregate  | N/A  | _leave blank_           |
