﻿Ext.define('TianZun.view.reportcenter.reportlist.XZscaleFarmsControlReportDetail', {
    extend: 'TianZun.ux.Window',
    alias: 'widget.XZscaleFarmsControlReportDetail',
    title: '秀洲区综合行政执法局规模养殖场执法管控情况报表',
    layout: 'fit',
    requires: ['TianZun.ux.ExportExcelButton'],
    initComponent: function ()
    {
        Ext.tip.QuickTipManager.init();
        var me = this;
        var reportdate = this.record.get("reportdate");
        var date = new Date(reportdate);
        var month = parseInt(date.getMonth()) + 1;
        var year = parseInt(date.getFullYear());
        var date = parseInt(date.getDate());
        var width = window.innerWidth * 0.936;
        var store = Ext.create('TianZun.store.reportcenter.scaleFarmsControlStore');
        store.getProxy().url = "api/ReportCenter/GetScaleFarmsControl?reportdate=" + this.record.get("reportdate");
        var showSummary = true;
        this.cellEditing = new Ext.grid.plugin.CellEditing({
            clicksToEdit: 1
        });
        Ext.Ajax.request({
            url: 'api/ReportCenter/GetScaleFarmsControl?reportdate=' + this.record.get("reportdate"),
            method: 'get',
            async: false,
            success: function (response)
            {
                jsonstr = Ext.decode(response.responseText);
            }
        });
        var remark = jsonstr[0].remark;
        var isstatistics = jsonstr[0].isstatistics;
        var me = this;
        this.items = [{
            xtype: 'form',
            bordor: false,
            bodyPadding: 10,
            autoScroll: true,
            width: width,
            //height: 1200,
            items: [
                {
                    layout: 'fit',
                    border: false,
                    xtype: 'panel',
                    name: '',
                    margin: '10 0 0 0',
                    layout: {
                        type: 'table',
                        columns: 2,
                    },
                    fieldDefaults: {
                        labelAlign: 'right',
                        labelWidth: 45,
                    },
                    defaults: {
                        xtype: 'textfield',
                        allowBlank: false,
                    },
                    items: [
                        {
                            xtype: 'exportbtn',
                            id: 'exportbtn',
                            text: '导出',
                            margin: '0 10 5 0',
                            width: 90,
                            webapi: 'api/ReportCenter/ExportExcel',
                            excelname: me.title,
                            exceltitle: me.title,
                            formsubmit: true,
                            extrapra: { reportid: 4, reportdate: reportdate, type: 1 },
                        },
                        //{
                        //    xtype: 'button',
                        //    text: '打印',
                        //    margin: '0 10 5 0',
                        //    handler: '',
                        //},
                    ],
                    listeners:
                       {
                           beforerender: function (obj)
                           {
                               if (isstatistics == 0 || isstatistics == null)
                               {
                                   Ext.getCmp('exportbtn').hidden = true;
                               }
                           },
                       }
                },
                {
                layout: 'fit',
                border: false,
                name: '',
                items: [
                    {
                        columnLines: true,
                        xtype: 'gridpanel',
                        gridautoScroll: true,
                        region: 'center',
                        store: store,
                        //enableColumnMove: false, //禁止拖放列 
                        //enableColumnResize: false, //禁止改变列宽度 
                        title: '<div style="text-align:center">秀洲区综合行政执法局规模养殖场执法管控情况报表</div>',
                        viewConfig: {
                            stripeRows: false,
                            forceFit: true,
                            scrollOffset: 0,
                        },
                        plugins: [this.cellEditing],
                        selModel: {
                            selType: 'cellmodel'
                        },
                        fieldDefaults: {
                            labelAlign: 'center',
                            align: 'center',
                        },
                        features: [{
                            id: 'group',
                            ftype: 'groupingsummary',
                            groupHeaderTpl: '{name}',
                            hideGroupedHeader: true,
                            enableGroupingMenu: false,
                        }],
                        columns: [
                               {
                                   header: '<div style="text-align:left">填表单位：秀洲区综合行政执法局</div>',
                                   hideable: false,
                                   dataIndex: 'rate',
                                   columns: [
                                       {
                                           header: '中队名称',
                                           hideable: false,
                                           dataIndex: 'unitname',
                                           sortable: false,
                                           menuDisabled: true,
                                           summaryType: 'sum',
                                           align: 'center',
                                           width: 100,
                                           summaryRenderer: function (value, summaryData, dataIndex)
                                           {
                                               return "<font color='red' size='2'>累计：</font>";
                                           },
                                       },
                                       {
                                           header: '项目时间', dataIndex: 'classname', hideable: false, sortable: false, align: 'center',
                                           menuDisabled: true,
                                           summaryRenderer: function (value, summaryData)
                                           {
                                               var sumValue = parseInt(value);
                                               return "<font color='red' size='2'>-</font>";
                                           },
                                       },
                                       {
                                           header: '生猪',  hideable: false, sortable: false, align: 'center',
                                           menuDisabled: true,
                                           columns: [
                                               {
                                                   header: '执法情况',  hideable: false, sortable: false, align: 'center',
                                                   menuDisabled: true,
                                                   columns: [
                                                       {
                                                           header: '存有量<br/>(家)', dataIndex: 'szcyl', hideable: false, sortable: false, align: 'center',
                                                           
                                                           menuDisabled: true,
                                                           summaryType: 'sum',
                                                           summaryRenderer: function (value, summaryData)
                                                           {
                                                               var sumValue = parseInt(value);
                                                               return "<font color='red' size='2'>" + value + "</font>";
                                                           },
                                                           field: {
                                                               xtype: 'displayfield', decimalPrecision: 5, minValue: 0,editable:false
                                                           }
                                                       },
                                                       {
                                                           header: '执法<br/>检查<br/>次数', dataIndex: 'szzfjccs', hideable: false, sortable: false, align: 'center',
                                                           
                                                           menuDisabled: true,
                                                           summaryType: 'sum',
                                                           summaryRenderer: function (value, summaryData)
                                                           {
                                                               var sumValue = parseInt(value);
                                                               return "<font color='red' size='2'>" + value + "</font>";
                                                           },
                                                           field: {
                                                               xtype: 'displayfield', decimalPrecision: 5, minValue: 0,editable:false
                                                           }
                                                       },
                                                       {
                                                           header: '执法<br/>检查<br/>记录', dataIndex: 'szzfjcjl', hideable: false, sortable: false, align: 'center',
                                                           
                                                           menuDisabled: true,
                                                           summaryType: 'sum',
                                                           summaryRenderer: function (value, summaryData)
                                                           {
                                                               var sumValue = parseInt(value);
                                                               return "<font color='red' size='2'>" + value + "</font>";
                                                           },
                                                           field: {
                                                               xtype: 'displayfield', decimalPrecision: 5, minValue: 0,editable:false
                                                           }
                                                       },
                                                       {
                                                           header: '限期<br/>整改<br/>通知<br/>书', dataIndex: 'szxqzgtzs', hideable: false, sortable: false, align: 'center',
                                                           
                                                           menuDisabled: true,
                                                           summaryType: 'sum',
                                                           summaryRenderer: function (value, summaryData)
                                                           {
                                                               var sumValue = parseInt(value);
                                                               return "<font color='red' size='2'>" + value + "</font>";
                                                           },
                                                           field: {
                                                               xtype: 'displayfield', decimalPrecision: 5, minValue: 0,editable:false
                                                           }
                                                       },
                                                       {
                                                           header: '整改<br/>养殖<br/>问题<br/>（个）', dataIndex: 'szzgyzwt', hideable: false, sortable: false, align: 'center',
                                                           
                                                           menuDisabled: true,
                                                           summaryType: 'sum',
                                                           summaryRenderer: function (value, summaryData)
                                                           {
                                                               var sumValue = parseInt(value);
                                                               return "<font color='red' size='2'>" + value + "</font>";
                                                           },
                                                           field: {
                                                               xtype: 'displayfield', decimalPrecision: 5, minValue: 0,editable:false
                                                           }
                                                       },
                                                   ]
                                               },
                                               {
                                                   header: '办案情况',  hideable: false, sortable: false, align: 'center',
                                                   menuDisabled: true,
                                                   columns: [
                                                       {
                                                           header: '立案<br/>(起)', dataIndex: 'szla', hideable: false, sortable: false, align: 'center',
                                                           
                                                           menuDisabled: true,
                                                           summaryType: 'sum',
                                                           summaryRenderer: function (value, summaryData)
                                                           {
                                                               var sumValue = parseInt(value);
                                                               return "<font color='red' size='2'>" + value + "</font>";
                                                           },
                                                           field: {
                                                               xtype: 'displayfield', decimalPrecision: 5, minValue: 0,editable:false
                                                           }
                                                       },
                                                       {
                                                           header: '结案<br/>(起)', dataIndex: 'szja', hideable: false, sortable: false, align: 'center',
                                                           
                                                           menuDisabled: true,
                                                           summaryType: 'sum',
                                                           summaryRenderer: function (value, summaryData)
                                                           {
                                                               var sumValue = parseInt(value);
                                                               return "<font color='red' size='2'>" + value + "</font>";
                                                           },
                                                           field: {
                                                               xtype: 'displayfield', decimalPrecision: 5, minValue: 0,editable:false
                                                           }
                                                       },
                                                        {
                                                            header: '实际收<br/>缴罚<br/>没款<br/>(起)', dataIndex: 'szsjjffmk', hideable: false, sortable: false, align: 'center',
                                                            
                                                            menuDisabled: true,
                                                            summaryType: 'sum',
                                                            summaryRenderer: function (value, summaryData)
                                                            {
                                                                var sumValue = parseInt(value);
                                                                return "<font color='red' size='2'>" + value + "</font>";
                                                            },
                                                            field: {
                                                                xtype: 'displayfield', decimalPrecision: 5, minValue: 0,editable:false
                                                            }
                                                        },
                                                        {
                                                            header: '移交<br/>司法<br/>机关<br/>(起)', dataIndex: 'szyjsfjg', hideable: false, sortable: false, align: 'center',
                                                            
                                                            menuDisabled: true,
                                                            summaryType: 'sum',
                                                            summaryRenderer: function (value, summaryData)
                                                            {
                                                                var sumValue = parseInt(value);
                                                                return "<font color='red' size='2'>" + value + "</font>";
                                                            },
                                                            field: {
                                                                xtype: 'displayfield', decimalPrecision: 5, minValue: 0,editable:false
                                                            }
                                                        }
                                                   ]
                                               },
                                           ]
                                       },
                                   ]
                               },
                               {
                                   header: '<div style="text-align:left">填报时间：' + year + '年' + month + '月25日</div>',
                                   hideable: false,
                                   dataIndex: 'rate',
                                   columns: [
                                       {
                                           header: '存有量', hideable: false, sortable: false, align: 'center',
                                           menuDisabled: true,
                                           columns: [
                                               {
                                                   header: '鸡<br/>（家）', dataIndex: 'qtj', hideable: false, sortable: false, align: 'center',
                                                   
                                                   menuDisabled: true,
                                                   summaryType: 'sum',
                                                   summaryRenderer: function (value, summaryData)
                                                   {
                                                       var sumValue = parseInt(value);
                                                       return "<font color='red' size='2'>" + value + "</font>";
                                                   },
                                                   field: {
                                                       xtype: 'displayfield', decimalPrecision: 5, minValue: 0,editable:false
                                                   }
                                               },
                                               {
                                                   header: '鸭<br/>（家）', dataIndex: 'qty', hideable: false, sortable: false, align: 'center',
                                                   
                                                   menuDisabled: true,
                                                   summaryType: 'sum',
                                                   summaryRenderer: function (value, summaryData)
                                                   {
                                                       var sumValue = parseInt(value);
                                                       return "<font color='red' size='2'>" + value + "</font>";
                                                   },
                                                   field: {
                                                       xtype: 'displayfield', decimalPrecision: 5, minValue: 0,editable:false
                                                   }
                                               },
                                               {
                                                   header: '肉羊<br/>（家）', dataIndex: 'qtry', hideable: false, sortable: false, align: 'center',
                                                   
                                                   menuDisabled: true,
                                                   summaryType: 'sum',
                                                   summaryRenderer: function (value, summaryData)
                                                   {
                                                       var sumValue = parseInt(value);
                                                       return "<font color='red' size='2'>" + value + "</font>";
                                                   },
                                                   field: {
                                                       xtype: 'displayfield', decimalPrecision: 5, minValue: 0,editable:false
                                                   }
                                               },
                                               {
                                                   header: '其他<br/>（家）', dataIndex: 'qtqt', hideable: false, sortable: false, align: 'center',
                                                   
                                                   menuDisabled: true,
                                                   summaryType: 'sum',
                                                   summaryRenderer: function (value, summaryData)
                                                   {
                                                       var sumValue = parseInt(value);
                                                       return "<font color='red' size='2'>" + value + "</font>";
                                                   },
                                                   field: {
                                                       xtype: 'displayfield', decimalPrecision: 5, minValue: 0,editable:false
                                                   }
                                               },
                                           ]
                                       },
                                       {
                                           header: '执法情况',  hideable: false, sortable: false, align: 'center',
                                           
                                           menuDisabled: true,
                                           columns: [
                                               {
                                                   header: '执法<br/>检查<br/>次数<br/>（次）', dataIndex: 'qtzfjccs', hideable: false, sortable: false, align: 'center',
                                                   
                                                   menuDisabled: true,
                                                   summaryType: 'sum',
                                                   summaryRenderer: function (value, summaryData)
                                                   {
                                                       var sumValue = parseInt(value);
                                                       return "<font color='red' size='2'>" + value + "</font>";
                                                   },
                                                   field: {
                                                       xtype: 'displayfield', decimalPrecision: 5, minValue: 0,editable:false
                                                   }
                                               },
                                               {
                                                   header: '执法<br/>检查<br/>记录<br/>（份）', dataIndex: 'qtzfjcjl', hideable: false, sortable: false, align: 'center',
                                                   
                                                   menuDisabled: true,
                                                   summaryType: 'sum',
                                                   summaryRenderer: function (value, summaryData)
                                                   {
                                                       var sumValue = parseInt(value);
                                                       return "<font color='red' size='2'>" + value + "</font>";
                                                   },
                                                   field: {
                                                       xtype: 'displayfield', decimalPrecision: 5, minValue: 0,editable:false
                                                   }
                                               },
                                               {
                                                   header: '开具期<br/>限整改<br/>通知书<br/>（份）', dataIndex: 'qtkjxqzgtzs', hideable: false, sortable: false,
                                                   align: 'center',
                                                   
                                                   menuDisabled: true,
                                                   summaryType: 'sum',
                                                   summaryRenderer: function (value, summaryData)
                                                   {
                                                       var sumValue = parseInt(value);
                                                       return "<font color='red' size='2'>" + value + "</font>";
                                                   },
                                                   field: {
                                                       xtype: 'displayfield', decimalPrecision: 5, minValue: 0,editable:false
                                                   }
                                               },
                                               {
                                                   header: '立案<br/>（起）', dataIndex: 'qtla', hideable: false, sortable: false,
                                                   align: 'center',
                                                   
                                                   menuDisabled: true,
                                                   summaryType: 'sum',
                                                   summaryRenderer: function (value, summaryData)
                                                   {
                                                       var sumValue = parseInt(value);
                                                       return "<font color='red' size='2'>" + value + "</font>";
                                                   },
                                                   field: {
                                                       xtype: 'displayfield', decimalPrecision: 5, minValue: 0,editable:false
                                                   }
                                               },
                                               {
                                                   header: '实际收<br/>缴罚没<br/>款（元）', dataIndex: 'qtsjsjfmk', hideable: false, sortable: false,
                                                   align: 'center',
                                                   
                                                   menuDisabled: true,
                                                   summaryType: 'sum',
                                                   summaryRenderer: function (value, summaryData)
                                                   {
                                                       var sumValue = parseInt(value);
                                                       return "<font color='red' size='2'>" + value + "</font>";
                                                   },
                                                   field: {
                                                       xtype: 'displayfield', decimalPrecision: 5, minValue: 0,editable:false
                                                   }
                                               }
                                           ]
                                       },
                                       {
                                           header: '执法成效', dataIndex: 'qtts', hideable: false, sortable: false, align: 'center',
                                           menuDisabled: true,
                                           columns: [
                                               {
                                                   header: '提升<br/>（家）', dataIndex: 'tqgb', hideable: false, sortable: false, align: 'center',
                                                   menuDisabled: true,
                                                   summaryType: 'sum',
                                                   summaryRenderer: function (value, summaryData)
                                                   {
                                                       var sumValue = parseInt(value);
                                                       return "<font color='red' size='2'>" + value + "</font>";
                                                   },
                                                   field: {
                                                       xtype: 'displayfield', decimalPrecision: 5, minValue: 0,editable:false
                                                   }
                                               },
                                               {
                                                   header: '关闭<br/>（家）', dataIndex: 'tqgb', hideable: false, sortable: false, align: 'center',
                                                   menuDisabled: true,
                                                   summaryType: 'sum',
                                                   summaryRenderer: function (value, summaryData)
                                                   {
                                                       var sumValue = parseInt(value);
                                                       return "<font color='red' size='2'>" + value + "</font>";
                                                   },
                                                   field: {
                                                       xtype: 'displayfield', decimalPrecision: 5, minValue: 0,editable:false
                                                   }
                                               },
                                               {
                                                   header: '拆除<br/>（家）', dataIndex: 'qtcc', hideable: false, sortable: false, align: 'center',
                                                   
                                                   menuDisabled: true,
                                                   summaryType: 'sum',
                                                   summaryRenderer: function (value, summaryData)
                                                   {
                                                       var sumValue = parseInt(value);
                                                       return "<font color='red' size='2'>" + value + "</font>";
                                                   },
                                                   field: {
                                                       xtype: 'displayfield', decimalPrecision: 5, minValue: 0,editable:false
                                                   }
                                               },
                                               {
                                                   header: '拆除<br/>违建<br/>面积<br/>（m²）', dataIndex: 'qtccwjmj', hideable: false, sortable: false, align: 'center',
                                                   
                                                   menuDisabled: true,
                                                   summaryType: 'sum',
                                                   summaryRenderer: function (value, summaryData)
                                                   {
                                                       var sumValue = parseInt(value);
                                                       return "<font color='red' size='2'>" + value + "</font>";
                                                   },
                                                   field: {
                                                       xtype: 'displayfield', decimalPrecision: 5, minValue: 0,editable:false
                                                   }
                                               },
                                           ]
                                       },
                                    {
                                        header: '简要说明下列情况',  menuDisabled: true, hideable: false, sortable: false, columns: [{
                                            text: '主要工作<br/>亮点',
                                             menuDisabled: true, align: 'center', sortable: false,
                                            editor: { allowBlank: true, xtype: 'textarea', minValue: 0, height: 60, editable: false, readOnly: true, }, dataIndex: 'zygzld',
                                        }, {
                                            text: '存在的主<br/>要问题', sortable: false,
                                             menuDisabled: true, align: 'center', editor: { allowBlank: true, xtype: 'textarea', minValue: 0, height: 60, editable: false, readOnly: true, }, dataIndex: 'czdzywt',
                                        }, {
                                            text: '面临的主<br/>要困难', sortable: false,
                                             menuDisabled: true, align: 'center', editor: { allowBlank: true, xtype: 'textarea', minValue: 0, height: 60, editable: false, readOnly: true, }, dataIndex: 'mldzykn',
                                        }, {
                                            text: '相关的意<br/>见建议', sortable: false,
                                             menuDisabled: true, align: 'center', editor: { allowBlank: true, xtype: 'textarea', minValue: 0, height: 60, editable: false, readOnly: true, }, dataIndex: 'xgdyjjy',
                                        }, ]
                                    },
                                   ]
                               }
                        ]
                    },
                {
                }]
            },
            {
                layout: 'fit',
                border: false,
                xtype: 'form',
                name: '',
                margin: '10 0 0 0',
                layout: {
                    type: 'table',
                    columns: 3,
                },
                fieldDefaults: {
                    labelAlign: 'right',
                    labelWidth: 45,
                },
                defaults: {
                    xtype: 'textfield',
                    allowBlank: false,
                    width: 500,
                },
                items: [
                    {
                        fieldLabel: '备注',
                        colspan: 3,
                        xtype: 'textarea',
                        width: width * 0.97,
                        height: 50,
                        editable: false,
                        name: 'remark',
//                        value: '1.存有量：达到嘉兴市规模养殖标准，各地各种类养殖场的实际数量；\r\n' +
//'2.执法检查记录：对规模养殖场开展执法检查，要求检查情况予以书面性记录并负责人签字确认；\r\n' +
//'3.结案：跨年度案件结案不计入，以当年立案案件结案为准；\r\n' +
                        //'4.实际收缴罚没款：实际收缴的罚没款总额。',
                        value: remark,
                    }
                ]
            }
            ], buttons: [{
                text: '确定',
                handler: 'onClose'
            }, {
                text: '取消',
                handler: 'onClose'
            }]
        }]
        this.callParent();
    },
})