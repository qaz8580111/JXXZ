﻿Ext.define('TianZun.store.citizenservice.ReviewStore', {
    extend: 'Ext.data.Store',
    model: 'TianZun.model.citizenservice.CizitenEvent',

    pageSize: configs.PageSize,
    remoteFilter: true,
    proxy: {
        type: 'ajax',
        method: "GET",
        url: configs.WebApi + 'api/CitizenEvent/GetAllCitizenServicesReviewList',
        reader: {
            type: 'json',
            rootProperty: 'Items',
            totalProperty: 'Total',
            idProperty: 'ID'
        }
    },
    autoLoad: true
});