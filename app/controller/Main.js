Ext.define('OzShorebirdsV2.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
			main: 'browsetab'
        },
        control: {
			'specieslist': {
                disclose: 'showDetail'
            }
        }
    },

    showDetail: function(list, record) {
        this.getMain().push({
			xtype: 'speciesdetail',
            title: record.speciesName(),
            data: record.getData()
        })
    }

});
