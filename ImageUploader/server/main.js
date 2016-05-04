import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    // Set allowable operations
    images.allow({
        insert:function(){return true;},
        remove:function(){return true;},
    });
    // Publish
    Meteor.publish('images',function(){
        return images.find();
    });
});
