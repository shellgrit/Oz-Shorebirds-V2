Ext.define('OzShorebirdsV2.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Browse',
                iconCls: 'bookmarks',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Browse'
                },

                cls: 'card',
                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
            },{
                title: 'Search',
                iconCls: 'search',
                
                styleHtmlContent: true,
                scrollable: true,
                
                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Search'
                },
                
                cls: 'card',
                html: [
                    "You will be able to search for species here.  ",
                    "Either by first name (eg. Hooded Plover) or last name (eg. Plover Hooded)."
                ].join("")
            },{
                title: 'Settings',
                iconCls: 'settings',
                
                styleHtmlContent: true,
                scrollable: true,
                
                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Settings'
                },
                
                cls: 'card',html: [
                       "You will be able to set the sequence of species here.  ",
                       "Either by first name (eg. Hooded Plover) or last name (eg. Plover Hooded)."
                ].join("")
            },{
                title: 'About',
                iconCls: 'info',

                styleHtmlContent: true,
                scrollable: true,
                
                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'About the App'
                },
                        
                cls: 'card',
                html: [
                    "This page will have information about the app, ",
                    "and acknowledgements to those who contributed."
                ].join("")
            }
        ]
    }
});
