Ext.define('OzShorebirdsV2.view.Initial', {
    extend: 'Ext.TabPanel',
	xtype: 'initialcard',
    requires: [
        'OzShorebirdsV2.view.Browse',
        'OzShorebirdsV2.view.Search',
        'OzShorebirdsV2.view.Settings',
        'OzShorebirdsV2.view.About'
    ],
           
    config: {
        tabBar: {
           docked: 'bottom',
           layout: {
                pack: 'center'
           }
        },
        items: [
            { xtype: 'browsetab' },
            { xtype: 'searchtab' },
            { xtype: 'settingstab' },
            { xtype: 'abouttab' }
        ]
    }
});