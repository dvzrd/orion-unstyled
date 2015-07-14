Template.orionSidebar.onRendered(function() {
  this.autorun(function() {
    var depend = orion.links._collection.find().fetch();
    $('.orion.sidebar.navigation a[data-toggle="collapse"]').collapse()
  })
})
