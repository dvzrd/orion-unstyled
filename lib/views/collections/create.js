Template.orionCollectionsCreate.events({
  'click .orion.create.button': function () {
    $('#orionCollectionsCreateForm').submit();
  }
});


AutoForm.addHooks('orionCollectionsCreateForm', {
  onSuccess: function() {
    Router.go(this.collection.indexPath());
  }
});
