Template.upload.events({
    'change #imageUpload':function(event, template){
        var file = $('#imageUpload').get(0).files[0] 

        fsFile = new FS.File(file);
        fsFile.metadata = {
            // Add user priviledges here
        }
        images.insert(fsFile,function(err,result){
            if(!err){
                console.log(result)
            }
        })
    }
});
