/**
* @param {params} params
* @param {api} params.api
* @param {any} params.event
*/
function evaluateEvent({api, event}) {
	return {
		route: 'record',
            fields: {
                'table': event.payload.table,
                'sysId': event.payload.sys_id || '-1'
            },
		params: null,
		redirect: null,
		passiveNavigation: null,
		title: null,
		multiInstField: null,
		targetRoute: null,
		external: null,
		navigationOptions: null
	};
}