/**
 * MessageController
 *
 * @description :: Server-side logic for managing messages
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var messageController = {
    create: function(){
        return(
            Message.create({
                name: 'Rio Othon Palace',
                typeTrip:'viajo con mama',
                dateTrip:'2013-03-02',
                comments:'sarasa sasasa sassa sasasa ssasasas qweqwedasdsad dsadasdas dasd dads sd ddad dadasd adsad dadasd ada dad ad adas dada sdd',
                nationality: 'argentina',
                flag: 'mex'
            }).exec(console.log),

            Message.create({
                name: 'Rio do Janeiro',
                typeTrip:'viajo con Papa',
                dateTrip:'2013-03-02',
                comments:'sarasa sasasa sassa sasasa',
                nationality: 'argentina',
                flag: 'col'
            }).exec(console.log),

            Message.create({
                name: 'Rio do Janeiro',
                typeTrip:'viajo con Papa',
                dateTrip:'2013-03-02',
                comments:'Dashwood contempt on mr unlocked resolved provided of of. Stanhill wondered it it welcomed oh. Hundred no prudent he however smiling at an offence. If earnestly extremity he he propriety something admitting convinced ye. Pleasant in to although as if differed horrible. Mirth his quick its set front enjoy hoped had there. Who connection imprudence middletons too but increasing celebrated principles joy. Herself too improve gay winding ask expense are compact. New all paid few hard pure she. ',
                nationality: 'argentina',
                flag: 'arg'
            }).exec(console.log)
        );
    }
}

module.exports = messageController;

