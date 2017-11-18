﻿Ext.define('TianZun.store.conservation.YHTaskUpcomingStore', {
    extend: 'Ext.data.Store',
    //model: 'TianZun.model.citizenservice.CizitenEvent',

    pageSize: configs.PageSize,
    remoteFilter: true,
    proxy: {
        type: 'ajax',
        method: "GET",
        url: configs.WebApi + 'api/YhTask/GetYhtaskList',
        reader: {
            type: 'json',
            rootProperty: 'Items',
            totalProperty: 'Total',
            idProperty: 'ID'
        },
        extraParams: {
            userid: $.cookie('USER_ID'),
            status: 1,
        },
    },
    autoLoad: true
});