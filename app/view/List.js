Ext.define('OzShorebirdsV2.view.List', {
    extend: 'Ext.List',
    xtype: 'specieslist',
    requires: ['OzShorebirdsV2.store.Species'],
           
    config: {
        title: 'Browse',
        grouped: true,
        indexBar: true,
		itemTpl: [
			'<div class="SpeciesList">',
				'<img src="images/thumbnails/{speciesImage}.png" align="left" />',
				'<p><b>{speciesCommon}</b></p>',
				'<p>{speciesSize}cm - {speciesStatus}</p>',
			'</div>',
		],
		
        store: 'Species',
        onItemDisclosure: true
    }
});