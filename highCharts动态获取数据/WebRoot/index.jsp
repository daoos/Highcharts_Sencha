<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>

    <title>My JSP 'test.jsp' starting page</title>
    <style>
    	.my-charts{
    	    width: 800px;
    	    margin:0 auto;
    	}
    </style>
	<script src="js/jquery.js"></script>
	<script type="text/javascript" src="js/highCharts/highcharts.src.js"></script>
	<script type="text/javascript" src="js/highCharts/highcharts-3d.src.js"></script>
	<script type="text/javascript" src="js/dynLoadData.js">
	</script>
	<script type="text/javascript">
	    $(function(){
	    	var options = {
    			title : {
    				text : "测试报表"
    			},
    			xAxis : {
    				categories : [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' ]
    			},
    			chart : {
    				type : "column"
    			},
    			loadDataConfig : {
    				"url" :  "test/loadData",
    				"params" : {}
    			}
    		};
			$(".my-charts").createDynChart(options);
	    });
	</script>

  </head>

  <body>
  	<div class="my-charts"></div>
  	<div class="my-charts"></div>
  </body>
</html>
