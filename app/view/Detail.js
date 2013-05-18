/*
Ext.define('OzShorebirdsV2.view.Detail', {
    extend: 'Ext.TabPanel',
	xtype: 'speciesdetail',
    requires: [
        'OzShorebirdsV2.view.DetailIllustration',
        'OzShorebirdsV2.view.DetailDistribution',
        'OzShorebirdsV2.view.DetailText',
        'OzShorebirdsV2.view.DetailPhoto'
    ],
           
    config: {
        tabBar: {
           docked: 'bottom',
           layout: {
                pack: 'center'
           }
        },
        items: [
            { xtype: 'illustrationtab' },
            { xtype: 'distributiontab' },
            { xtype: 'texttab' },
            { xtype: 'phototab' }
        ]
    }
});
*/

Ext.define('OzShorebirdsV2.view.Detail', {
    extend: 'Ext.Panel',
    xtype: 'speciesdetail',
           
    config: {
        title: 'Details',
        styleHtmlContent: true,
        scrollable: 'vertical',
		fullsceen: true,
       	tpl: [
      		'<div class="speciesDetail">',
      			'<img src="images/illustrations/{speciesImage}.jpg" width="100%" />',
      		'</div>',
      	]
    }
});
