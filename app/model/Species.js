Ext.define('OzShorebirdsV2.model.Species', {
    extend: 'Ext.data.Model',
    config: {
		fields: [
			'speciesCommon',
			'speciesFirst',
			'speciesLast',
			'speciesScientific',
			'speciesImage',
			'speciesHabitat',
			'speciesStatus',
			'speciesTip',
			'speciesInflight',
			'speciesSize'
		]
    },
           
    speciesName: function() {
        var d = this.data,
        names = [
            (!d.speciesFirst ? "" : d.speciesFirst),
            d.speciesLast
        ];
        return names.join(" ");
    }
});
