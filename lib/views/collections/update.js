Template.orionCollectionsUpdate.events({
  'click .orion.save.button': function () {
    $('#orionCollectionsUpdateForm').submit();
  }
});

AutoForm.addHooks('orionCollectionsUpdateForm', {
  onSuccess: function() {
    RouterLayer.go(this.collection.indexPath());
  }
});
