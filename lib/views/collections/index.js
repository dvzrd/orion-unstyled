Template.orionCollectionsIndex.events({
  'click tr': function(event) {
    if (!$(event.target).is('td')) return;
    var dataTable = $(event.target).closest('table').DataTable();
    var rowData = dataTable.row(event.currentTarget).data();
    var collection = rowData._collection();
    if (rowData) {
      if (rowData.canShowUpdate()) {
        var path = collection.updatePath(rowData);
        RouterLayer.go(path);
      }
    }
  }
});

Template.orionCollectionsIndex.onRendered(function() {
  this.autorun(function () {
    RouterLayer.isActiveRoute('');
    Session.set('orionCollectionsIndex_showTable', false);
    Meteor.defer(function () {
      Session.set('orionCollectionsIndex_showTable', true);
    });
  });
})

Template.orionCollectionsIndex.helpers({
  showTable: function () {
    return Session.get('orionCollectionsIndex_showTable');
  }
});
