Ext.define('Ext.ux.grid.filter.AssociatedDataFilter', {
    extend: 'Ext.ux.grid.filter.StringFilter',
    alias: 'gridfilter.association',
    searchFields: [],
    validateRecord: function(record) {
        var searchString = this.getValue(),
            reg = new RegExp(searchString, "i"),
            associatedData = record.getAssociatedData(),
            association = associatedData[this.dataIndex],
            i;
        for (i in this.searchFields) {
            if (reg.test(association[this.searchFields[i]])) {
                return true;
            }
        }
        return false;
    }
});
