let instrument = {
	name: "violin",
	price: [100, 200, 300],
	play: function () {
		this.price.forEach(function (price) {
			console.log(this.name, price); //undefined
		},this);
	},
    play2: function () {
        this.price.forEach((price) => {
            console.log(this.name, price);
        });
	},
};

instrument.price.forEach(function (price) {
	console.log(this.name, price); //undefined
});

// undefined 100
// undefined 200
// undefined 300

instrument.price.forEach(function (price) {
	console.log(this.name, price); // violin
}, instrument);

// violin 100
// violin 200
// violin 300

instrument.play();

// violin 100
// violin 200
// violin 300

instrument.play2();

// violin 100
// violin 200
// violin 300