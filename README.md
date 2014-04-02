[`FiltersFeature-Custom-filters`][0]
===================================

extjs4 Grid [FiltersFeature][1] with custom filters


I came across with this requirement where i needed unorthodox grid filtering,
since in our case the values inside record couldn't be filtered directly by standard filters.

These custom filters overides "validateRecord" to get desired filtering result.

`StringFilterArray` extends StringFilter to filter array data

`StringMappingFilter` extends StringFilter to filter on processed(mapped/tranformed) data

`AssociatedDataFilter` extends StringFilter to filter associated data

`ListFilterArray` extends ListFilter to filter array data

[`DEMO`][2]
----------

  [0]: http://www.sencha.com/forum/showthread.php?283655-FiltersFeature-with-custom-filters
  [1]: http://docs.sencha.com/extjs/4.2.1/#!/api/Ext.ux.grid.FiltersFeature
  [2]: https://fiddle.sencha.com/#fiddle/4n7
  
