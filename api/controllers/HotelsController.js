/**
 * HotelsController
 *
 * @description :: Server-side logic for managing hotels
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var hotelsController = {

    create: function(){
        return(
            Hotels.create({
                name: 'Rio Othon Palace',
                adress : 'Cesare Street 321',
                stars : 3,
                description: 'Confortable',
                rating: '8',
                comments: '20',
                price: '215',
                availability: {
                    from:'2013-03-02',
                    to:'2013-03-22'
                }
            }).exec(console.log),

            Hotels.create({
                name: 'Granada Hotel Rio de Janeiro',
                adress : 'Fake street 123',
                stars : 4,
                description: 'Muy Confortable',
                rating: '8',
                comments: '60',
                price: '148',
                availability: {
                    from:'2013-02-01',
                    to:'2013-02-28'
                }
            }).exec(console.log),

            Hotels.create({
                name: 'Ibiza Hotel',
                adress : 'Via Cesare Battisti 133',
                stars : 2,
                description: 'Poco confortable',
                rating: '5',
                comments: '10',
                price: '127',
                availability: {
                    from:'2013-05-12',
                    to:'2013-05-18'
                }
            }).exec(console.log),

            Hotels.create({
                name: 'Rio Othon Palace 2',
                adress : 'Cesare Street 221',
                stars : 3,
                description: 'Confortable',
                rating: '7',
                comments: '5',
                price: '200',
                availability: {
                    from:'2013-03-10',
                    to:'2013-03-16'
                }
            }).exec(console.log)
        );
    }
};

module.exports = hotelsController;