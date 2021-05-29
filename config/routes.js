const async_input = 'input';
const async_data = 'data';
const async_action = 'action';

const actionCommunicatorRouteNotify = 'actionCommunicator/notify';

const actionManagerRouteSave = 'actions/inscribe';
const actionManagerRouteGetActionsByUuid = 'actions';
const actionManagerRouteGetAll = 'actions';
const actionManagerRouteNotifyActionCommunicator = 'actions/notify';

const deviceManagerRouteSave = 'resources/inscribe';
const deviceManagerRouteUpdate = 'resources/update';
const deviceManagerRouteGetAll = 'resources';
const deviceManagerRouteFind = 'resources';
const deviceManagerRouteCheck = 'resources/verify';
const deviceManagerRouteDelete = 'resources/delete';

const dataManagerRouteSave = 'datas/persist';
const dataManagerRouteGetDataByUuid = 'datas';
const dataManagerRouteGetAll = 'datas';
const dataManagerRouteGetLastByUuid = 'datas/last';
const dataManagerRouteDelete = 'datas/delete';

const inputCommunicatorRoute = 'inputCommunicator';

exports.actionCommunicatorRouteNotify = actionCommunicatorRouteNotify;

exports.actionManagerRouteSave = actionManagerRouteSave;
exports.actionManagerRouteGetActionsByUuid = actionManagerRouteGetActionsByUuid;
exports.actionManagerRouteGetAll = actionManagerRouteGetAll;
exports.actionManagerRouteNotifyActionCommunicator = actionManagerRouteNotifyActionCommunicator;

exports.deviceManagerRouteSave = deviceManagerRouteSave;
exports.deviceManagerRouteUpdate = deviceManagerRouteUpdate;
exports.deviceManagerRouteDelete = deviceManagerRouteDelete;
exports.deviceManagerRouteGetAll = deviceManagerRouteGetAll;
exports.deviceManagerRouteFindDevice = deviceManagerRouteFind;
exports.deviceManagerRouteCheckDevice = deviceManagerRouteCheck;

exports.dataManagerRouteSave = dataManagerRouteSave;
exports.dataManagerRouteGetDataByUuid = dataManagerRouteGetDataByUuid;
exports.dataManagerRouteGetAll = dataManagerRouteGetAll;
exports.dataManagerRouteGetLastByUuid = dataManagerRouteGetLastByUuid;
exports.dataManagerRouteDelete = dataManagerRouteDelete;

exports.inputCommunicatorRoute = inputCommunicatorRoute;

exports.async_input = async_input;
exports.async_data = async_data;
exports.async_action = async_action;
