Ext.define('OzShorebirdsV2.view.DetailIllustration', {
    extend: 'Ext.Panel',
    xtype: 'illustrationtab',
           
    config: {
        iconCls: 'map',
        title: 'Distribution',
       	tpl: [
      		'<div class="clsDetail">',
      			'<img src="images/illustrations/{speciesImage}.jpg" width="100%" />',
      		'</div>',
      	]
    }
});