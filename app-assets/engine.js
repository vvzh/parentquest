'use strict';
/*global m */
var engine = engine || {};

(function () {

	engine.start = function(game) {
		engine.game = game;
		document.title = game.name;
		engine.goToLocation(game.firstLocationId);
	}

	// Way constructor
	engine.Way = function(jsonObject) {
		// TODO: Add sanity checks
		var way = jsonObject;
		// TODO: Init default way properties:
		return way;
	}

	// Location constructor
	engine.Location = function(jsonObject) {
		// TODO: Add sanity checks
		var location = jsonObject;
		// Init default location properties:
		if (!location.hasOwnProperty('ways')) {
			location.ways = [];
		}
		return location;
	}

	engine.goToLocation = function(locationId) {
		// TODO: add calling event callbacks here once they are needed
		engine.currentLocationId = locationId;
		// TODO: transform locations and ways into proper objects on load, not in goToLocation?
		engine.currentLocation = engine.Location(engine.game.locations[engine.currentLocationId]);
		if (engine.currentLocation.hasOwnProperty('image')) {
			engine.currentImageHtml = '<img src="' + engine.currentLocation.image + '">';
		} else {
			engine.currentImageHtml = this.imagePlaceholder;
		}
	}

	engine.imagePlaceholder = '<svg width="100%" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Картинка сцены квеста" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6c757d"></rect><text x="50%" y="50%" fill="#dee2e6" dx="-4.5em" dy=".3em" font-weight="bold">Место для картинки</text></svg>';

	engine.chooseWay = function(index) {
		engine.goToLocation(engine.currentLocation.ways[index].target);
	}

	engine.view = function() {
		return m.fragment(
			m("div.row", [ m("div.col.px-0", [
				m("div.card.shadow-sm", [
					m("div.card-header", engine.game.name),
					m.trust(engine.currentImageHtml),
					m("div.card-body", [
						m("h5.card-title", engine.currentLocation.title),
						m("p.card-text", engine.currentLocation.text),
					]),
					// Good arrow character for possible future use: &#10140;
					m("div.list-group.list-group-flush", engine.currentLocation.ways.map(function(way, index) {
						return m("button.list-group-item.list-group-item-action.text-primary", { onclick: function() { engine.chooseWay(index) } }, way.text);
					})),
					// m("div.card-body", [
					// 	m("a.card-link", { href: "#" }, "Card link"),
					// 	m("a.card-link", { href: "#" }, "Another link"),
					// ])
				]),
			])]),
			m("div.row.mt-4", [ m("div.col.px-0", [
				m("p.text-center", [m("small.text-muted", "Родительский университет, выпуск 2021")])
			])]),
		)
	}

})();
