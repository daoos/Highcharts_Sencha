Ext.define('Highcharts.store.Browsers', {
  extend : 'Ext.data.Store',
  autoLoad : false,
  model: 'Highcharts.model.Browsers',
  proxy : {
    type: 'ajax',
    url: './data/browsers.json',
    reader : {
      type: 'json',
      root: 'rows'
    }
  },
  storeId: 'browsers'
});
