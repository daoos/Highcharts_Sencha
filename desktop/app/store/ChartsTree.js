Ext.define('Highcharts.store.ChartsTree', {
    extend: 'Ext.data.TreeStore',
    proxy: {
        type: 'ajax',
        url: './data/get-charts.json'
    },
    root: {
        text: '图表组件',
        id: 'charts',
        expanded: true
    },
    fields:["text","id","lib","chart","leaf","icon"]
});
