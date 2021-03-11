'use strict';
/*global m */
var engine = engine || {};

(function () {

	engine.start = function(game) {
		engine.menuMode = false;
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

	engine.imagePlaceholder = '<svg width="100%" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Картинка сцены квеста" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Место для картинки</title><rect width="100%" height="100%" fill="#6c757d"></rect><text x="50%" y="50%" fill="#dee2e6" dx="-4.5em" dy=".3em" font-weight="bold">Место для картинки</text></svg>';

	// Part of Bootstrap Icons package: https://icons.getbootstrap.com/icons/gear-fill/
	// Licensed under MIT License
	engine.gearIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16"><path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/></svg>'

	engine.chooseWay = function(index) {
		engine.goToLocation(engine.currentLocation.ways[index].target);
	}

	engine.renderGameLocation = function() {
		return m.fragment(
			m.trust(engine.currentImageHtml),
			m("div.card-body", [
				m("h5.card-title", engine.currentLocation.title),
				m("p.card-text", engine.currentLocation.text),
			]),
			m("div.list-group.list-group-flush", engine.currentLocation.ways.map(function(way, index) {
				return m("button.list-group-item.list-group-item-action.text-primary", { onclick: function() { engine.chooseWay(index) } }, way.text);
			})),
		);
	}

	engine.renderMenu = function() {
		return m.fragment(
			m("div.card-body", [
				m("h5.card-title", "Меню"),
				m("div.form", [
					m("div.form-group", m("button.btn.btn-sm.btn-secondary", { onclick: function() { document.location.reload(); } }, "Начать заново")),
				]),
			]),
			m("div.card-footer", [
				m("button.btn.btn-sm.btn-secondary", { onclick: function() { engine.menuMode = false } }, "Закрыть меню"),
			]),
		);
	}

	engine.decorate = function(content) {
		return m.fragment(
			m("div.row", [ m("div.col.px-0", [
				m("div.card.shadow-sm", [
					m("div.card-header", [
						engine.game.name,
						m("div.float-right", m("a.text-secondary", { href: '#', title: "Меню", onclick: function() { engine.menuMode = true } }, m.trust(engine.gearIcon)))
					]),
					content,
				]),
			])]),
			m("div.row.mt-4", [ m("div.col.px-0", [
				m("p.text-center", [m("small.text-muted", "Родительский университет, выпуск 2021")])
			])]),
		);
	}

	engine.view = function() {
		if (engine.menuMode) {
			return engine.decorate(engine.renderMenu());
		} else {
			return engine.decorate(engine.renderGameLocation());
		}
	}

})();
