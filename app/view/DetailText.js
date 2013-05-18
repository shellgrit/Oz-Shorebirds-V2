Ext.define('OzShorebirdsV2.view.DetailText', {
    extend: 'Ext.Panel',
    xtype: 'texttab',
           
    config: {
        iconCls: 'map',
        title: 'Distribution',
       	tpl: [
  			'<div class="clsText">',
  				'<p><b>{speciesName}</b></p>',
				'<p><b>Size</b> - {speciesSize}cm</p><br />',
				'<p><b>Status</b> - {speciesStatus}</p><br />',
				'<p><b>Habitat</b> - {speciesHabitat}</p><br />',
      			'<p>{speciesTip}</p><br />',
				'<p><b>In Flight</b> - {speciesInflight}</p>',
  			'</div>',
      	]
    }
});