Things = new Mongo.Collection('things')

Things.allow({
  insert: function (userId, thing) {
    return thing.createdBy === userId;
  }
})

if (Meteor.isServer) {
  Meteor.publish('all-things', function () {
    return Things.find();
  })
}
