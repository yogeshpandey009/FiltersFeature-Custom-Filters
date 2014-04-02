Ext.define('Ext.ux.grid.filter.StringMappingFilter', {
    extend: 'Ext.ux.grid.filter.StringFilter',
    alias: 'gridfilter.stringmapping',
    mappingFn: Ext.identityFn,
    validateRecord: function(record) {
        var val = record.get(this.dataIndex);
        val = this.mappingFn(val);
        if (typeof val !== 'string') {
            return (this.getValue().length === 0);
        }
        return val.toLowerCase().indexOf(this.getValue().toLowerCase()) > -1;
    }
});
