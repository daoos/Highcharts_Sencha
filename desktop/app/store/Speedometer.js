Ext.define('Highcharts.store.Speedometer', {
  extend : 'Ext.data.Store',
  autoLoad : false,
  model: 'Highcharts.model.Speedometer',
  proxy : {
    type: 'ajax',
    url: './data/speed.json',
    reader : {
      type: 'json',
      root: 'rows'
    }
  },
  storeId: 'speed'
});
