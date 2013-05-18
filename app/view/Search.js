Ext.define('OzShorebirdsV2.view.Search', {
    extend: 'Ext.Panel',
    xtype: 'searchtab',
    requires: ['Ext.field.Search'],
           
    config: {
        iconCls: 'search',
        title: 'Search',
		align: 'centre',
        items: [
			{
            	docked: 'top',
            	xtype: 'toolbar',
				items: [
					{
						xtype: 'spacer'
					},{
						xtype: 'searchfield',
						placeholder: 'Search',
						name: 'searchfield'
					},{
						xtype: 'spacer'
					}
				]
        	}
		]
    }
});