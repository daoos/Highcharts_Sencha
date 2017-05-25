Ext.define('Highcharts.store.UpdateNoRecord', {
    extend: 'Ext.data.Store',
    model: 'Highcharts.model.Temperature',
    autoLoad: false,
    proxy: {
        type: 'ajax',
        url: './data/noRecord.json',
        reader: {
            type: 'json',
            root: 'rows'
        }
    },
    storeId: 'updateNoRecord'
});
