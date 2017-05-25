Ext.define('Highcharts.store.ChartsTree', {
    extend: 'Ext.data.TreeStore',
    proxy: {
      type: 'ajax',
      url: './data/get-charts.json'
    },
    root: {
      text: 'Charts',
      id: 'charts',
      expanded: true
    }
});
