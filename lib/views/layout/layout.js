Template.orionLayout.events({
  'click .orion.admin.toggled': function() {
    $(".orion.admin").removeClass("toggled");
    $("html,body").removeClass("no-overflow");
  },
  'click .menu.toggle': function () {
    $(".orion.admin").toggleClass("toggled");
    $("html,body").toggleClass("no-overflow");
  }
});

Template.orionTabs.helpers({
  items: function () {
    return this;
  }
});

Template.orionTabs.events({
  'click a': function () {
    this.onClick();
  }
});
