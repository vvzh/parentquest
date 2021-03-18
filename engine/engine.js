'use strict';
/*global m */
var engine = engine || {};

(function () {

	engine.storage = mx.storage();
	engine.i18n = {
		'menu': "Меню",
		'closeMenu': "Закрыть меню",
		'restart': "Начать заново",
		'imagePlaceholder': "Место для картинки",
	}

	engine.open = function(game) {
		engine.game = game;
		document.title = game.name;
		engine.state = engine.storage.get(engine.game.id);
		if (engine.state && engine.state.hasOwnProperty('currentLocationId')) {
			engine.goToLocation(engine.state.currentLocationId, false);
		} else {
			engine.restart();
		}
	}

	engine.restart = function() {
		engine.menuMode = false;
		engine.state = {};
		engine.goToLocation(engine.game.firstLocationId, false);
	}

	// TODO: add Game constructor, init default property values there
	// TODO: call engine.preprocessText() only once in constructors

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

	engine.goToLocation = function(locationId, execEvents = true) {
		if (execEvents) {
			// TODO: add calling event callbacks here once they are needed
		}
		engine.state.currentLocationId = locationId;
		engine.storage.set(engine.game.id, engine.state);
		// TODO: transform locations and ways into proper objects on load, not in goToLocation?
		engine.currentLocation = engine.Location(engine.game.locations[engine.state.currentLocationId]);
		if (engine.currentLocation.hasOwnProperty('image')) {
			engine.currentImageHtml = '<img src="' + engine.game.imagesPrefix + engine.currentLocation.image + '">';
		} else {
			engine.currentImageHtml = this.imagePlaceholder;
		}
	}

	engine.imagePlaceholder = '<svg width="100%" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + engine.i18n['imagePlaceholder'] + '" preserveAspectRatio="xMidYMid slice" focusable="false"><title>' + engine.i18n['imagePlaceholder'] + '</title><rect width="100%" height="100%" fill="#6c757d"></rect><text x="50%" y="50%" fill="#dee2e6" dx="-4.5em" dy=".3em" font-weight="bold">' + engine.i18n['imagePlaceholder'] + '</text></svg>';

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
				// using global regexp instead of replaceAll(), because Safari does not support the latter:
				m("p.card-text", m.trust(engine.currentLocation.text.replace(/<p>/g, '<p class="card-text">'))),
			]),
			m("div.list-group.list-group-flush", engine.currentLocation.ways.map(function(way, index) {
				return m("button.list-group-item.list-group-item-action.text-primary", { onclick: function() { engine.chooseWay(index) } }, way.text);
			})),
		);
	}

	engine.renderMenu = function() {
		return m.fragment(
			m("div.card-body", [
				m("h5.card-title", engine.i18n['menu']),
				m("div.form", [
					m("div.form-group", m("button.btn.btn-sm.btn-secondary.btn-block.text-left", { onclick: function() { engine.restart(); } }, engine.i18n['restart'])),
				]),
			]),
			m("div.card-footer", [
				m("button.btn.btn-sm.btn-secondary", { onclick: function() { engine.menuMode = false } }, engine.i18n['closeMenu']),
			]),
		);
	}

	engine.decorate = function(content) {
		return m.fragment(
			m("div.mt-4.d-none.d-md-block"), // Vertical spacing for medium and large screens
			m("div.container-fluid", { style: "max-width: 50em;" }, [ // Game container
				m("div.row", [
					m("div.col.px-0", [
						m("div.card.shadow-sm", [
							m("div.card-header", [
								engine.game.name,
								m("div.float-right", m("a.text-secondary", { href: 'javascript:void(0)', title: engine.i18n['menu'], onclick: function() { engine.menuMode = !engine.menuMode } }, m.trust(engine.gearIcon)))
							]),
							content,
						]),
					])
				]),
				m("div.row.mt-4", [
					m("div.col.px-0", [
						m("p.text-center", [m("small.text-muted", game.footer)])
					])
				]),
			]),
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
