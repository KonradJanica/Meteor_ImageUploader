Template.upload.onCreated(function() {
    this.uploadError = new ReactiveVar("");
});

Template.upload.events({
    'submit .upload-task': function(event, template) {
        event.preventDefault();

        var file = $('#imageUpload').get(0).files[0];
        fsFile = new FS.File(file);
        fsFile.metadata = {
            // Add user priviledges here
        }

        uploadFail = false;
        images.insert(fsFile,function(err,result){
            if (err) {
                console.log(result);
                uploadFail = true;
                template.uploadError.set("Image upload failed, only PNG, JPG, GIF allowed");
            }
        })

        if (uploadFail) {
            console.log("File upload fail");
            return;
        }
        template.uploadError.set("Image upload success");

        const target = event.target;
        const tag = target.tag.value;
        const description = target.tag.value;

    }
});
