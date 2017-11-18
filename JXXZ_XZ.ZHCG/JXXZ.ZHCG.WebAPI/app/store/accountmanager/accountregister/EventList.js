﻿Ext.define('TianZun.store.accountmanager.accountregister.EventList', {
    extend: 'Ext.data.Store',

    pageSize: configs.PageSize,
    remoteFilter: true,
    proxy: {
        type: 'ajax',
        method: "GET",
        url: configs.WebApi + 'api/AccountRegister/GetEvent',
        reader: {
            type: 'json',
            rootProperty: 'Items',
            //totalProperty: 'Total',
            idProperty: 'citizenid'
        }
    },
    autoLoad: true
});