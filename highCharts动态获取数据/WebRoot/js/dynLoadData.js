(function($) {
	var ChartUtil = {
		/**
		 * 创建图表
		 *
		 * @param options
		 * @returns
		 */
		createChart : function(options) {
			if (options && options != {}) {
				var defaultOptions = ChartUtil.initOptions();
				// 如果有配置参数 , 则 把配置参数添加到默认参数中
				options = $.extend(defaultOptions, options);
			}
			return ChartUtil.loadData(options);
		},
		/**
		 * 加载默认配置
		 */
		initOptions : function() {
			return {
				loadDataConfig : {
					url : "",
					params : {}
				},
				callback : ChartUtil.callback
			};
		},
		/**
		 * 加载动态数据
		 *
		 * @param options
		 */
		loadData : function(options) {
			var config = options.loadDataConfig;
			var callback = options.callback;

			if (config && config.url != "" && $.type(config.params) == "object") {


				$.ajax({
			              type: "GET",
			              url: config.url,
			              data: config.params,
			              dataType: "json",
			              success: function(data){
											// alert(data)
											callback(options, data);
											// var dataArr = JSON.parse(data);
											// alert($.type(callback) == "function")
											// if ($.type(callback) == "function"){
											// 	callback(options, dataArr);
											// }
											},
										 error:function(a,b){
											 alert(11111)
										 }
			          });


				// $.get(config.url, config.params, function(data) {
				// 		var dataArr = JSON.parse(data);
				// 		alert(dataArr)
				// 		if ($.type(callback) == "function")
				// 			callback(options, dataArr);
				// 	});
			}else if($.type(callback) == "function"){
				callback(options);
			}
			// if (config && config.url != "" && $.type(config.params) == "object") {
			// 	$.get(config.url, config.params, function(data) {
			// 		var dataArr = JSON.parse(data);
			// 		alert(dataArr)
			// 		if ($.type(callback) == "function")
			// 			callback(options, dataArr);
			// 	});
			// }
			// if ($.type(callback) == "function")
			// 	callback(options);
		},
		/**
		 * 默认的回调函数 加载动态数据执行完成之后执行
		 *
		 * @param options
		 * @param dataResult
		 */
		callback : function(options, dataResult) {
			alert(11+dataResult)
			// 当有结果集时
			if (dataResult) {
				// options.series = ChartUtil.parseObjToSeries(dataResult);
				options.series = dataResult;
				alert(options.series)
			}
			options.chart = options.chart || {};
			options.chart['renderTo'] = options.selectorId;
			return new Highcharts.Chart(options);
		},
		/**
		 * 将整个对象转换成序列对象
		 */
		parseObjToSeries : function(objs) {
			var series = [];
			$.each(objs, function(index, item) {
				var obj = [];
				// list
				if ($.type(item) == "array") {
					obj = ChartUtil.getItemObj(item);
				}
				// key-value 格式
				if ($.type(item) == "object") {
					obj = ChartUtil.getItemObj(item.data);
				}
				item.data = obj;
				series.push(item);
			});
			return series;
		},
		/**
		 * 获取序列中的单行对象
		 */
		getItemObj : function(data) {
			var obj = [];
			$.each(data, function(objIndex, objItem) {
				obj.push(parseFloat(objItem));
			});
			return obj;
		}
	};
	$.fn.createDynChart = function(options) {
		options = options || {};
		// 选择器没有找到对象
		if ($(this).length == 0) {
			return false;
		}
		// 遍历选择器获取到的界面对象,在每个内部生成一个图表
		$.each($(this), function(index, item) {
			if (!$(item).attr("id")) {
				$(item).attr("id", "$default_chart_" + index);
			}
			options['selectorId'] = $(item).attr("id");
			if ($.type(ChartUtil) != "object") {
				alert("请先引入图表生成工具再使用该插件!");
				return;
			}
			ChartUtil.createChart(options);
		});
	}
})(jQuery);
