Ext.define('Ext.ux.grid.filter.StringFilterArray', {
    extend: 'Ext.ux.grid.filter.StringFilter',
    alias: 'gridfilter.stringfilterarray',
    mappingFn: Ext.identityFn,
    validateRecord: function(record) {
        var list = record.get(this.dataIndex),
            i;
        list = this.mappingFn(list);
        for (i in list) {
            if (list[i].toLowerCase().indexOf(this.getValue().toLowerCase()) > -1) {
                return true;
            }
        }
        return false;
    }
});
