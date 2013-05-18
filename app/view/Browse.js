Ext.define('OzShorebirdsV2.view.Browse', {
    extend: 'Ext.navigation.View',
    xtype: 'browsetab',
    requires: [
        'OzShorebirdsV2.view.List',
        'OzShorebirdsV2.view.Detail'
    ],
           
    config: {
        iconCls: 'bookmarks',
        title: 'Browse',
		badgeText: 'Last',
        items: [
			{
				xtype: 'specieslist'
        	}
		]
    }
});