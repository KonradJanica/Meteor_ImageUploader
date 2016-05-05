Template.upload.onCreated(function() {
    this.uploadError = new ReactiveVar("");
});

Template.upload.events({
    'submit .upload-task': function(event, template) {
        event.preventDefault();

        var file = $('#imageUpload').get(0).files[0];
        fsFile = new FS.File(file);
        fsFile.metadata = {
            userId: Meteor.userId(),
        }

        uploadFail = false;
        var fileObj = images.insert(fsFile, function(err) {
            if (err) {
                uploadFail = true;
                template.uploadError.set("Image upload failed, only PNG, JPG, GIF allowed");
            }
        })

        if (uploadFail) {
            console.log("File upload fail");
            return;
        }
        
        template.uploadError.set("Image upload success");

        tagInput = event.target.tag.value;
        console.log(tagInput);
        descriptionInput = event.target.description.value;
        console.log(descriptionInput);

        detailedImages.insert({
            userId: Meteor.userId(),
            image: fileObj,
            tags: tagInput,
            description: descriptionInput
        });
    }
});
