Ext.Loader.setConfig({
    enabled: true,
    disableCaching: true, // For debug only
    paths: {
        // 'Chart' : HOME + '/highcharts_extjs4'     // For website
        'Chart': '../Chart',
        'ECharts': '../ECharts'
    }
});

Ext.require('Chart.ux.Highcharts');
Ext.require('Chart.ux.Highcharts.Serie');
Ext.require('Chart.ux.Highcharts.AreaRangeSerie');
Ext.require('Chart.ux.Highcharts.AreaSerie');
Ext.require('Chart.ux.Highcharts.AreaSplineRangeSerie');
Ext.require('Chart.ux.Highcharts.AreaSplineSerie');
Ext.require('Chart.ux.Highcharts.BarSerie');
Ext.require('Chart.ux.Highcharts.BoxPlotSerie');
Ext.require('Chart.ux.Highcharts.BubbleSerie');
Ext.require('Chart.ux.Highcharts.ColumnRangeSerie');
Ext.require('Chart.ux.Highcharts.ColumnSerie');
Ext.require('Chart.ux.Highcharts.ErrorBarSerie');
Ext.require('Chart.ux.Highcharts.FunnelSerie');
Ext.require('Chart.ux.Highcharts.GaugeSerie');
Ext.require('Chart.ux.Highcharts.LineSerie');
Ext.require('Chart.ux.Highcharts.PieSerie');
Ext.require('Chart.ux.Highcharts.RangeSerie');
Ext.require('Chart.ux.Highcharts.ScatterSerie');
Ext.require('Chart.ux.Highcharts.SplineSerie');
Ext.require('Chart.ux.Highcharts.WaterfallSerie');
Ext.require('Chart.ux.Highcharts.PyramidSerie');
Ext.require('ECharts.ux.ECharts');
// ALWAYS POST!!
Ext.override(Ext.data.proxy.Ajax, {
    getMethod: function (request) {
        return 'GET';
    }
});
// 全局配置，对当前页面的所有图表有效


Ext.ns("Demo");

Ext.application({
    name: 'Highcharts',
    // appFolder : HOME + '/demos/Highcharts_ExtJs_4/app',   // For website
    appFolder: 'app',
    controllers: ['Charts'],
    requires: [
        'Highcharts.ChartsDesktopConfig'
    ],
    launch: function () {

        // For joekuan.org website
        if (Ext.get('loading-mask'))
            Ext.get('loading-mask').fadeOut({remove: true});

        var size = Ext.getBody().getViewSize();
        var title = 'ExtJs:V' + Ext.versions.core.version + "," +
            'Highcharts:V' + Highcharts.version + "," +
            'Echarts:V3.6.0演示DEMO';

        var size = Ext.getBody().getViewSize();
        var referer = $("#demo", parent.document.body).length;

        Ext.create('Ext.window.Window', {
            layout: 'border',
            border: '0 0 0 0',
            title: title,
            width: referer ? size.width : size.width - 10,
            height: referer ? size.height : size.height - 10,
            closable: referer,
            listeners: {
                close: function (window) {
                    $("#layerslider", parent.document.body).slideDown(400, function () {
                        $('#demo', parent.document.body).html('');
                    });
                }
            },
            items: [{
                region: 'west',
                width: 200,
                // title: '图表组件',
                id: 'leftTree',
                xtype: 'chartsTree',
                margins: '0 0 5 5',
                split: true
            }, {
                region: 'center',
                id: 'centerpane',
                xtype: 'panel',
                layout: 'fit',
                margins: '0 5 5 0',
                tbar: [{
                    text: 'Reload Data',
                    id: 'reload',
                    disabled: true,
                    action: 'reload'
                }, {
                    text: 'Add Series',
                    id: 'addSeries',
                    disabled: true,
                    action: 'addSeries'
                }]
            }]
        }).show();

    }
});
