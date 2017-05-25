Ext.define('Highcharts.store.Scatter', {
  extend : 'Ext.data.Store',
  autoLoad : false,
  model: 'Highcharts.model.Scatter',
  proxy : {
    type : 'ajax',
    url : './data/scatter.json',
    reader : {
      type : 'json',
      root : 'rows'
    }
  },
  storeId: 'temperature'
});
