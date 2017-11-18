﻿Ext.define('TianZun.model.reportcenter.scaleFarmsControlModel', {
    extend: 'Ext.data.Model',
    idProperty: 'taskId',
    fields: [
               { name: 'projectId', type: 'int' },
               { name: 'project', type: 'string' },
               { name: 'taskId', type: 'int' },
               { name: 'name', type: 'string' },
               { name: 'xmsj', type: 'string' },
               { name: 'szcyl', type: 'int', convert: function (value) { return value == null ? 0 : value } },
               { name: 'szzfjccs', type: 'int', convert: function (value) { return value == null ? 0 : value } },
               { name: 'szzfjcjl', type: 'int', convert: function (value) { return value == null ? 0 : value } },
               { name: 'szxqzgtzs', type: 'int', convert: function (value) { return value == null ? 0 : value } },
               { name: 'szzgyzwt', type: 'int', convert: function (value) { return value == null ? 0 : value } },
               { name: 'szla', type: 'int', convert: function (value) { return value == null ? 0 : value } },
               { name: 'szja', type: 'int', convert: function (value) { return value == null ? 0 : value } },
               { name: 'szsjjffmk', type: 'int', convert: function (value) { return value == null ? 0 : value } },
               { name: 'szyjsfjg', type: 'int', convert: function (value) { return value == null ? 0 : value } },
               { name: 'qtj', type: 'int', convert: function (value) { return value == null ? 0 : value } },
               { name: 'qty', type: 'int', convert: function (value) { return value == null ? 0 : value } },
               { name: 'qtry', type: 'int', convert: function (value) { return value == null ? 0 : value } },
               { name: 'qtqt', type: 'int', convert: function (value) { return value == null ? 0 : value } },
               { name: 'qtzfjccs', type: 'int', convert: function (value) { return value == null ? 0 : value } },
               { name: 'qtzfjcjl', type: 'int', convert: function (value) { return value == null ? 0 : value } },
               { name: 'qtkjxqzgtzs', type: 'int', convert: function (value) { return value == null ? 0 : value } },
               { name: 'qtla', type: 'int', convert: function (value) { return value == null ? 0 : value } },
               { name: 'qtsjsjfmk', type: 'int', convert: function (value) { return value == null ? 0 : value } },
               { name: 'qtts', type: 'int', convert: function (value) { return value == null ? 0 : value } },
               { name: 'tqts', type: 'int', convert: function (value) { return value == null ? 0 : value } },
               { name: 'tqgb', type: 'int', convert: function (value) { return value == null ? 0 : value } },
               { name: 'qtcc', type: 'int', convert: function (value) { return value == null ? 0 : value } },
               { name: 'qtccwjmj', type: 'int', convert: function (value) { return value == null ? 0 : value } },
                { name: 'zygzld', type: 'string' },
               { name: 'czdzywt', type: 'string' },
               { name: 'mldzykn', type: 'string' },
               { name: 'xgdyjjy', type: 'string' },
    ],
})