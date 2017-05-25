Ext.define('Highcharts.store.BrowsersJune', {
  extend : 'Ext.data.Store',
  autoLoad : false,
  model: 'Highcharts.model.BrowsersJune',
  proxy : {
    type: 'ajax',
    url: './data/browsers_june.json',
    reader : {
      type: 'json',
      root: 'rows'
    }
  },
  storeId: 'browsers_june'
});
