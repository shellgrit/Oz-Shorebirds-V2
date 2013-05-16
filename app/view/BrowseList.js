Ext.define('OzShorebirsV2.view.BrowseList', {
    extend: 'Ext.List',
    xtype: 'presidentlist',
    requires: ['OzShorebirdsV2.store.Species'],
           
    config: {
        title: 'American Presidents',
        grouped: true,
        itemTpl: '{firstName} {lastName}',
        store: 'Species',
        onItemDisclosure: true
    }
});