Ext.application({
    name: 'OzShorebirdsV2',

    controllers: ['Main'],
    views: ['Main'],
	stores: ['Species'],
	models: ['Species'],

    launch: function() {
        Ext.Viewport.add({
            xtype: 'mainpanel'
        });
    }
});