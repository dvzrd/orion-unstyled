Template.orionDictionaryUpdate.helpers({
  getDataForTabs: function () {
    var categories = orion.dictionary.availableCategories();
    return categories.map(function (category) {
      return {
        title: category,
        onClick: function() {
          Session.set('dictionaryUpdateCurrentCategory', category);
        },
        class: function() {
          return Session.get('dictionaryUpdateCurrentCategory') == category ? 'orion disabled button': 'orion primary button';
        }
      }
    });
  }
});
