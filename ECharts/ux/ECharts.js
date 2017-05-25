Ext.define('ECharts.ux.ECharts', {
  alias: 'widget.echarts',
  extend: 'Ext.panel.Panel',
  alternateClassName: 'Ext.form.Echarts',
	type : 'echarts',
  option:{
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    },
  initComponent : function(){
      var me = this;
      me.addEvents('resize');
      me.callParent(arguments);
      me.on({
          resize: me.onResize,
          scope: me
      });
  },
  finishRenderChildren: function () {
      this.callParent();
  },
  onRender: function() {
      var me = this;
      me.inputEl = document.createElement('div');
      document.body.appendChild(me.inputEl);
      me.echarts = echarts.init(me.inputEl);
      if (me.option) {
          me.echarts.setOption(me.option);
      }
      me.echartsInnerId=Ext.id();
      me.inputEl.id=me.echartsInnerId;
      me.inputEl.style.height="100%";
      me.inputEl.style.width="100%";
      me.contentEl=me.echartsInnerId;
      me.callParent(arguments);
      me.rendered = true;
  },
  onResize: function(o, width, height) {
      var me = this;
      if (me.echarts) {
          me.inputEl.style.height = width;
          me.inputEl.style.width = height;
          me.echarts.resize();
      }
  },
  onDestroy: function(){
      var me = this;
      if(me.rendered){
          try {
              Ext.EventManager.removeAll(me.echarts);
              for (prop in me.echarts) {
                  if (me.echarts.hasOwnProperty(prop)) {
                      delete me.echarts[prop];
                  }
              }
          }catch(e){}
      }
      me.callParent();
  },
  setOption: function(option){
      var me = this;
      me.echarts.setOption(option);
      me.echarts.resize();
  },
  getOption: function(){
      var me = this;
      return me.echarts.getOption();
  },
  resize: function(){
      var me = this;
      me.echarts.resize();
  }
});
