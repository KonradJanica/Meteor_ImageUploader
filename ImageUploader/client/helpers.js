Template.collection.helpers({
    showImages:function() {
        return detailedImages.find();
    }
});

Template.upload.helpers({
    errorMessage: function() {
        return Template.instance().uploadError.get();
    }
});
