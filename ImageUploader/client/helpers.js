Template.collection.helpers({
    showImages:function() {
        return detailedImages.find({userId: Meteor.userId()});
    }
});

Template.upload.helpers({
    errorMessage: function() {
        return Template.instance().uploadError.get();
    }
});
