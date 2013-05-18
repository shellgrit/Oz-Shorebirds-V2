Ext.define('OzShorebirdsV2.view.Settings', {
    extend: 'Ext.form.FormPanel',
    xtype: 'settingstab',
    requires: [
//        'OzShorebirdsV2.view.Browse',
		'Ext.Label',
		'Ext.SegmentedButton'
    ],
           
    config: {
        iconCls: 'settings',
        title: 'Settings',
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                title: 'Settings'
            },{
//				type: 'hbox',
				items: [
					{
                		xtype: 'label',
						html: '<h2>Browse Sequence</h2>',
						styleHtmlContent: true
					},{
						xtype: 'segmentedbutton',
						items: [
							{
								text: 'First Name',
								pressed: true,
								handler: function() {
									console.log("First Name selected");
								}
							},{
								text: 'Last Name',
								handler: function() {
									console.log("Last Name selected");
//									Ext.getCmp('browsebadge').setBadgeText('Last');
								}
							}
						]
					}
				]
            }
        ]
    }
});
