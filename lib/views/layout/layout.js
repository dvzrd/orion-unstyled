Template.orionLayout.events({
  'click .orion.admin.toggled': function() {
    $('.orion.admin').removeClass('toggled');
    $('html,body').removeClass('no-overflow');
  },
  'click .orion.toggle': function () {
    $('.orion.admin').toggleClass('toggled');
    $('html,body').toggleClass('no-overflow');
  }
});

Template.orionHeader.events({
  'click .dropdown.toggle': function() {
    $('.orion.dropdown.menu').toggleClass('open');
  },
  'click .logout': function() {
    Meteor.logout();
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
