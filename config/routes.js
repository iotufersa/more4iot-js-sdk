const async_input = 'input';
const async_data = 'data';
const async_action = 'action';

const actionCommunicatorRouteNotify = 'actionCommunicator/notify';

const actionManagerRouteSave = 'actions/inscribe';
const actionManagerRouteGetActionsByUuid = 'actions';
const actionManagerRouteGetAll = 'actions';
const actionManagerRouteNotifyActionCommunicator = 'actions/notify';

const resourceManagerRouteSave = 'resources/inscribe';
const resourceManagerRouteUpdate = 'resources/update';
const resourceManagerRouteGetAll = 'resources';
const resourceManagerRouteFind = 'resources';
const resourceManagerRouteCheck = 'resources/verify';
const resourceManagerRouteDelete = 'resources/delete';

const dataManagerRouteSave = 'datas/persist';
const dataManagerRouteGetDataByUuid = 'datas';
const dataManagerRouteGetAll = 'datas';
const dataManagerRouteGetLastByUuid = 'datas/last';
const dataManagerRouteDelete = 'datas/delete';

const inputCommunicatorRoute = 'inputCommunicator';

const serviceRegistryRouteInscribe = "registry";
const serviceRegistryRouteGet = "registry"

exports.actionCommunicatorRouteNotify = actionCommunicatorRouteNotify;

exports.actionManagerRouteSave = actionManagerRouteSave;
exports.actionManagerRouteGetActionsByUuid = actionManagerRouteGetActionsByUuid;
exports.actionManagerRouteGetAll = actionManagerRouteGetAll;
exports.actionManagerRouteNotifyActionCommunicator = actionManagerRouteNotifyActionCommunicator;

exports.resourceManagerRouteSave = resourceManagerRouteSave;
exports.resourceManagerRouteUpdate = resourceManagerRouteUpdate;
exports.resourceManagerRouteDelete = resourceManagerRouteDelete;
exports.resourceManagerRouteGetAll = resourceManagerRouteGetAll;
exports.resourceManagerRouteFind = resourceManagerRouteFind;
exports.resourceManagerRouteCheck = resourceManagerRouteCheck;

exports.dataManagerRouteSave = dataManagerRouteSave;
exports.dataManagerRouteGetDataByUuid = dataManagerRouteGetDataByUuid;
exports.dataManagerRouteGetAll = dataManagerRouteGetAll;
exports.dataManagerRouteGetLastByUuid = dataManagerRouteGetLastByUuid;
exports.dataManagerRouteDelete = dataManagerRouteDelete;

exports.inputCommunicatorRoute = inputCommunicatorRoute;

exports.serviceRegistryRouteGet = serviceRegistryRouteGet;
exports.serviceRegistryRouteInscribe = serviceRegistryRouteInscribe;

exports.async_input = async_input;
exports.async_data = async_data;
exports.async_action = async_action;
