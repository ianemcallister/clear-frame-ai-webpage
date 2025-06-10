(function ($) {
	$(document).ready(function (e) {
		$(
			" .gutentools-importer-popup-contents button.gutentools-importer-close ",
		).click(function (e) {
			e.preventDefault();

			$("body").removeClass("gutentools-importer-popup-open");
		});
	});
})(jQuery);
