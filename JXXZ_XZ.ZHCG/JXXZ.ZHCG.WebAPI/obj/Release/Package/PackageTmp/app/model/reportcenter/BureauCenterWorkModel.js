﻿Ext.define('TianZun.model.reportcenter.BureauCenterWorkModel', {
    extend: 'Ext.data.Model',
    idProperty: 'taskId',
    fields: [
               { name: 'projectId', type:'float' },
               { name: 'project', type: 'string' },
               { name: 'taskId', type:'float'},
               { name: 'name', type: 'string' },
               { name: 'xmsj', type: 'string' },
               { name: 'czczmj', type: 'float', convert: function (value) { return value == null ? 0 : value } },
               { name: 'czccmj', type:'float', convert: function (value) { return value == null ? 0 : value } },
               { name: 'czla', type:'float', convert: function (value) { return value == null ? 0 : value } },
               { name: 'czja', type:'float', convert: function (value) { return value == null ? 0 : value } },
               { name: 'czsjsjfmk', type:'float', convert: function (value) { return value == null ? 0 : value } },
               { name: 'czxzccmj', type:'float', convert: function (value) { return value == null ? 0 : value } },
               { name: 'czzsmj', type:'float', convert: function (value) { return value == null ? 0 : value } },
               { name: 'kzzfcs', type:'float', convert: function (value) { return value == null ? 0 : value } },
               { name: 'zlxqzgtzs', type:'float', convert: function (value) { return value == null ? 0 : value } },
               { name: 'qlczmj', type:'float', convert: function (value) { return value == null ? 0 : value } },
               { name: 'qlczsl', type:'float', convert: function (value) { return value == null ? 0 : value } },
               { name: 'fzhdmc', type:'string' },
               { name: 'xccs', type: 'string' },
               { name: 'fxzghdwt', type: 'string' },
               { name: 'gmczf', type: 'string' },
               { name: 'shzf', type: 'string' },
               { name: 'jgcsljfs', type: 'string' },
               { name: 'dlczzwt', type:'float', convert: function (value) { return value == null ? 0 : value } },
               { name: 'dlcztsjb', type:'float', convert: function (value) { return value == null ? 0 : value } },
               { name: 'dlla', type:'float', convert: function (value) { return value == null ? 0 : value } },
               { name: 'dlsjsjfmk', type:'float', convert: function (value) { return value == null ? 0 : value } },
               { name: 'ccyyczzwt', type:'float', convert: function (value) { return value == null ? 0 : value } },
               { name: 'cccztsjb', type:'float', convert: function (value) { return value == null ? 0 : value } },
               { name: 'ccyyla', type:'float', convert: function (value) { return value == null ? 0 : value } },
               { name: 'ccsjsjfmk', type:'float', convert: function (value) { return value == null ? 0 : value } },
                { name: 'zygzld', type: 'string' },
               { name: 'czdzywt', type: 'string' },
               { name: 'mldzykn', type: 'string' },
               { name: 'xgdyjjy', type: 'string' },
    ],
})