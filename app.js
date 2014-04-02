Ext.application({
    name: 'Fiddle',

    launch: function() {
        Ext.define('Address', {
            extend: 'Ext.data.Model',
            fields: [{
                name: 'country',
                type: 'string'
            }, {
                name: 'state',
                type: 'string'
            }, {
                name: 'city',
                type: 'string'
            }]
        });
        Ext.define('Data', {
            extend: 'Ext.data.Model',
            fields: [{
                name: 'title',
                type: 'numeric'
            }, {
                name: 'name',
                type: 'string'
            }, {
                name: 'contact_nos',
                type: 'auto'
            }, {
                name: 'likes',
                type: 'auto'
            }],
            hasOne: [{
                model: 'Address',
                instanceName: 'address',
                associationKey: 'address',
                name: 'address',
                getterName: 'getAddress',
                setterName: 'setAddress'
            }]
        });
        Ext.create('Ext.container.Viewport', {
            items: [{
                xtype: 'gridpanel',
                title: 'Custom Filters',
                features: [{
                    ftype: 'filters',
                    autoReload: false, //don't reload automatically
                    local: true, //only filter locally
                    filters: [{
                        dataIndex: 'name',
                        type: 'string'
                    }, {
                        dataIndex: 'contact_nos',
                        type: 'stringfilterarray'
                    }, {
                        mappingFn: getTitle,
                        dataIndex: 'title',
                        type: 'stringmapping'
                    }, {
                        searchFields: ['country', 'state', 'city'],
                        dataIndex: 'address',
                        type: 'association'
                    }, {
                        dataIndex: 'likes',
                        type: 'listfilterarray',
                        options: ['coding', 'cricket', 'eating', 'modeling', 'drinking']
                    }]
                }],
                store: Ext.create('Ext.data.Store', {
                    model: 'Data',
                    autoLoad: true,
                    proxy: {
                        type: 'ajax',
                        url: 'data1.json'
                    }
                }),
                columns: [{
                    text: 'Title',
                    flex: 1,
                    dataIndex: 'title',
                    tooltip: 'String Mapping Filter',
                    renderer: getTitle
                }, {
                    text: 'Name',
                    flex: 1,
                    tooltip: 'String Filter',
                    dataIndex: 'name'
                }, {
                    text: 'Contact Nos.',
                    flex: 2,
                    tooltip: 'String Filter Array',
                    dataIndex: 'contact_nos'
                }, {
                    text: 'Address',
                    flex: 1,
                    //width: 100,
                    tooltip: 'Associated Data Filter',
                    dataIndex: 'address', // instance name
                    renderer: function(v, metaData, record) {
                        var adrs = record.getAddress();
                        return adrs.get('city') + "</br>" + adrs.get('state') + "</br>" + adrs.get('country');
                    }
                }, {
                    text: 'Hobbies',
                    flex: 2,
                    tooltip: 'List Filter Array',
                    dataIndex: 'likes'
                }]
            }]
        });

        function getTitle(v) {
            if (v === 0) {
                return "Master"
            } else if (v === 1) {
                return "Mr."
            } else if (v === 2) {
                return "Mrs."
            } else if (v === 3) {
                return "Ms."
            } else if (v === 4) {
                return "Dr."
            }
        }
    }
});
