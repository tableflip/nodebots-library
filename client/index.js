Meteor.subscribe('all-things')

Template.addThing.events({
  'submit': function (evt) {
    evt.preventDefault()

    var thing = {
      name: evt.target.thingName.value,
      contact: evt.target.thingContact.value,
      location: evt.target.thingLocation.value,
      thanks: evt.target.thingThanks.value,
      createdBy: Meteor.userId()
    }

    Things.insert(thing)
    evt.target.reset()
  }
})

Template.things.helpers({
  all: function () {
    return Things.find()
  }
})

