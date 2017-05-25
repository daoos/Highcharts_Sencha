Ext.define('Highcharts.store.Temperature', {
    extend: 'Ext.data.Store',
    model: 'Highcharts.model.Temperature',
    autoLoad: false,
    proxy: {
        type: 'ajax',
        url: './data/temp_example.json',
        extraParams: {summary: 0},
        reader: {
            type: 'json',
            root: 'rows'
        }
    },
    storeId: 'temperature'
});
