var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://user:hahayes@testcluster-fdiv0.gcp.mongodb.net/test2?retryWrites=true&w=majority", 
    {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("you did it");
    var bnbschema = new mongoose.Schema({
        name: String
    });
    console.log("you made a schema nice");

    bnbschema.methods.speak = function () {
        var greeting = this.name
            ? "This house is " + this.name
            : "A nameless house";
        console.log(greeting);
    }


    var hotelschema = new mongoose.Schema({
        name: String,
        cost: Number
    });

    hotelschema.methods.speak = function() {
        var greeting = this.name
            ? "This hotel is " + this.name + " and I cost " + this.cost
            : "I don't know what I am";
        console.log(greeting);
    }



    var bnb = mongoose.model('BNB', bnbschema);
    var hotel = mongoose.model("Hootel", hotelschema);

    var cronkshouse = new bnb({name: "Cronk's house"});

    cronkshouse.save(function (err, cronkshouse) {
        if (err) return console.error(err);
        cronkshouse.speak();
    });

    var nateshouse = new bnb({name: "Nate's house"});


    nateshouse.save(function (err, nateshouse) {
        if (err) return console.error(err);
        nateshouse.speak();
    });

    var benshotel = new hotel({name: "Ben's hotel", cost: 3})
    
    benshotel.save(function (err, benshotel) {
        if (err) return console.error(err);
        benshotel.speak();
    });
});
