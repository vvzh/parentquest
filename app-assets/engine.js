'use strict';
/*global m */
var engine = engine || {};

(function () {

	engine.start = function(game) {
		document.title = "Название квеста";
	}

	engine.imagePlaceholder = '<svg width="100%" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Картинка сцены квеста" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6c757d"></rect><text x="50%" y="50%" fill="#dee2e6" dx="-4.5em" dy=".3em" font-weight="bold">Место для картинки</text></svg>';

	engine.view = function() {
		return m.fragment(
			m("div.row", [ m("div.col.px-0", [
				m("div.card.shadow-sm", [
					m("div.card-header", "Название квеста"),
					m.trust(this.imagePlaceholder),
					m("div.card-body", [
						m("h5.card-title", "Заголовок сцены"),
						m("p.card-text", "Текстовое описание сцены."),
					]),
					// Good arrow character for possible future use: &#10140;
					m("div.list-group.list-group-flush", [
						m("a.list-group-item.list-group-item-action.text-primary", { href: "javascript:void(0);" }, "Вариант выбора 1"),
						m("a.list-group-item.list-group-item-action.text-primary", { href: "javascript:void(0);" }, "Вариант выбора 2"),
						m("a.list-group-item.list-group-item-action.text-primary", { href: "javascript:void(0);" }, "Вариант выбора 3"),
					]),
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
