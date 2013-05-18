Ext.define('OzShorebirdsV2.view.DetailDistribution', {
    extend: 'Ext.Panel',
    xtype: 'distributiontab',
           
    config: {
        iconCls: 'map',
        title: 'Distribution',
       	tpl: [
      		'<div class="clsDetail">',
      			'<img src="images/distribution/{speciesImage}.jpg" width="100%" />',
      		'</div>',
      	]
    }
});