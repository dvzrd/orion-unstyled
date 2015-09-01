Template.orionCollectionsCreate.events({
  'click .orion.create.button': function () {
    $('#orionCollectionsCreateForm').submit();
  }
});

AutoForm.addHooks('orionCollectionsCreateForm', {
  onSuccess: function() {
    RouterLayer.go(this.collection.indexPath());
  }
});
