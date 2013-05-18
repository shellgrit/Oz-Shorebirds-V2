Ext.define('OzShorebirdsV2.view.DetailPhoto', {
    extend: 'Ext.Panel',
    xtype: 'phototab',
           
    config: {
        iconCls: 'map',
        title: 'Photo',
       	tpl: [
      		'<div class="clsDetail">',
      			'<img src="images/photos/{speciesImage}.jpg" width="100%" />',
      		'</div>',
      	]
    }
});