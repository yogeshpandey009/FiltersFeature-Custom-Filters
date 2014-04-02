Ext.define('Ext.ux.grid.filter.ListFilterArray', {
    extend: 'Ext.ux.grid.filter.ListFilter',
    alias: 'gridfilter.listfilterarray',
    mappingFn: Ext.identityFn,
    validateRecord: function(record) {
        var valuesArray = this.getValue(),
            list = record.get(this.dataIndex),
            i;
        list = this.mappingFn(list);
        for (i in list) {
            if (Ext.Array.indexOf(valuesArray, list[i]) > -1) {
                return true;
            }
        }
        return false;
    }
});
