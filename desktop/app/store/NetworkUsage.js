Ext.define('Highcharts.store.NetworkUsage', {
  extend : 'Ext.data.Store',
  autoLoad : false,
  model: 'Highcharts.model.NetworkUsage',
  proxy : {
    type: 'ajax',
    url: './data/netusage.json',
    reader : {
      type: 'json',
      root: 'rows'
    }
  },
  storeId: 'networkusage'
});
