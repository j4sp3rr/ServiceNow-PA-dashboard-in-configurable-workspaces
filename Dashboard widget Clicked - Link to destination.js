/**
 * @param {params} params
 * @param {api} params.api
 * @param {any} params.event
 */
function evaluateEvent({
    api,
    event
}) {
    var listTableEvent = event.payload.eventOrigin; 

    //Handle clicks on a row/view all from a simple list
    if (listTableEvent == "NOW_RECORD_LIST_CONNECTED#ROW_CLICKED") {
        return {
            route: 'record',
            fields: {
                'table': event.payload.table,
                'sysId': event.payload.sys_id
            },
            params: {},
            redirect: null,
            passiveNavigation: null,
            title: null,
            multiInstField: null,
            targetRoute: null,
            external: null,
            navigationOptions: null
        };
    } else if (listTableEvent == "NOW_RECORD_LIST_CONNECTED#VIEW_ALL_CLICKED") {
        return {
            route: 'simplelist',
            fields: {
                'table': event.payload.table,

            },
            params: {
                'listTitle': event.payload.listTitle,
                'query': event.payload.query
            },
            redirect: null,
            passiveNavigation: null,
            title: null,
            multiInstField: null,
            targetRoute: null,
            external: null,
            navigationOptions: null
        };
    } else {
        // Handle clicks from Data visualisations
        var datasourceType = event.payload.params.dataSourceType;
        var indicatorId = event.payload.params.indicatorSysid;

        if (datasourceType === 'indicator') {
            return {
                route: 'kpi_details',
                fields: {
                    'uuid': indicatorId
                },
                params: null,
                redirect: null,
                passiveNavigation: null,
                title: event.payload.title || event.payload.data.elements[0] || 'KPI Details',
                multiInstField: null,
                targetRoute: null,
                external: null,
                navigationOptions: null
            };
        } else if (datasourceType === 'table') {
            return {
                route: 'simplelist',
                fields: {
                    'table': event.payload.params.table
                },
                params: {
                    'listTitle': event.payload.title || event.payload.data.elements[0] || event.payload.params.table || null,
                    'query': event.payload.params.query,
                },
                redirect: null,
                passiveNavigation: null,
                title: event.payload.title || event.payload.data.elements[0] || event.payload.params.table || null,
                multiInstField: null,
                targetRoute: null,
                external: null,
                navigationOptions: null
            };
        }
    }
}