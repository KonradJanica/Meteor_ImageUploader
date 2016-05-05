import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    // Setup images
    images.allow({
        insert:function(){return true;},
    });
    Meteor.publish('images',function(){
        return images.find();
    });

    // Setup detailedImages
    detailedImages.allow({
        insert:function(){return true;},
    });
    Meteor.publish('detailedImages',function(){
        return detailedImages.find();
    });
});
