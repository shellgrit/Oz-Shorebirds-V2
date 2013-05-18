Ext.define('OzShorebirdsV2.view.About', {
    extend: 'Ext.Panel',
    xtype: 'abouttab',
           
    config: {
        iconCls: 'info',
        title: 'About',
		scrollable: 'vertical',
        html: [
			'<img src="images/icon_birdlife_blue.jpg" />',
			'<h2>Oz Shorebirds</h2>',
		    '<section>',
		        '<h4 class="left">BirdLife Australia</h4>',
		        '<div class="right">',
		            '<p>For more than 100 years BirdLife  (formerly Birds Australia &amp; BOCA) have been powerful advocates for native birds and the conservation of their habitats.</p>',
		            '<p>BirdLife Australia&#039;s projects form a vital link between volunteers collecting data, scientists conducting research and decision-makers who use and can rely on that research. These projects engage community and organisations in conservation and provide excellent value for the funder&#039;s money.</p>',
		        '</div>',
		    '</section>',

		    '<section>',
		        '<h4 class="left">Contact Us</h4>',
		        '<div class="right">',
		            '<p>If you&#039;d like more information on how you can contribute your identification skills to the conservation of shorebirds please contact BirdLife Australia at <br /><a href="mailto:golo.maurer@birdlife.org.au">golo.maurer@birdlife.org.au</a> <br />or visit <br /><a href="http://www.birdlife.org.au/projects/shorebirds-2020">Shorebirds 2020</a></p>',
		        '</div>',
		    '</section>',

		    '<section>',
		        '<h4 class="left">About the App</h4>',
		        '<div class="right">',
		            '<p>This app provides a guide to the 48 species of shorebirds (or waders) that are regularly found in Australia.</p>',
		        '</div>',
		    '</section>',

		    '<section>',
		        '<h4 class="left">Contributors</h4>',
		        '<div class="right">',
		            '<p>The app was developed by Neil Shelley, with assistance from Golo Maurer of BirdLife Australia.</p>',
		        '</div>',
		    '</section>',

		    '<section>',
		        '<h4 class="left">Source Code</h4>',
		        '<div class="right">',
		            '<p>The app is built using the Sencha Touch 2.2 JavaScript Framework. Details are available at <br />',
					'<a href="http://www.sencha.com/products/touch">sencha.com.au/products/touch</a></p>',
		        '</div>',
		    '</section>' 
		].join(''),
        styleHtmlContent: true,
        items: [{
            docked: 'top',
            xtype: 'toolbar',
            title: 'About the App'
        }]
    }
});