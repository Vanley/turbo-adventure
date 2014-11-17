var a = {
	"items": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

	"showItems": function(filter) {
		for (var i = this.items.length - 1; i >= 0; i--) {
			if (filter(this.items[i], i)) {
				console.log(" " + this.items[i]);
			}
		}
	},

	"even": function(item, index) {
		if (item % 2 == 0) {
			return true;
		}
		return false;
	},

	"odd": function(item, index) {
		if (item % 2 > 0) {
			return true;
		}
		return false;
	},

	"sevtenth": function(item, index) {
		if (index == 6 || index == 9) {
			return true;
		}
		return false;
	}
};

console.log("Wyświetlam parzyste: ");

a.showItems(a.even);

console.log("Wyświetlam nieparzyste: ");

a.showItems(a.odd);

console.log("Wyświetlam sevtenth: ");

a.showItems(a.sevtenth);