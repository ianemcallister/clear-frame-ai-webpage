(function (window, wp) {
	var link_id = "gutentool_importer";
	var link_html =
		'<a id="' +
		link_id +
		'" class="components-button is-primary" href="#" > <span class="dashicons dashicons-editor-insertmore"></span> Starter Templates</a>';

	var insertCustomLink = function (editorId) {
		var editorEl = document.getElementById(editorId);
		if (!editorEl) {
			return;
		}

		if (!document.getElementById(link_id)) {
			var toolbarEl = editorEl.querySelector(
				".editor-header__toolbar .edit-post-header-toolbar",
			);
			if (toolbarEl instanceof HTMLElement) {
				toolbarEl.insertAdjacentHTML("afterend", link_html);

				document
					.getElementById(link_id)
					.addEventListener("click", function (e) {
						e.preventDefault();
						document.body.classList.add("gutentools-importer-popup-open");
					});
			}
		}
	};

	var checkEditors = function () {
		insertCustomLink("editor"); // Block Editor
		insertCustomLink("site-editor"); // Site Editor
	};

	// Subscribe to changes in the editor and apply the button
	var unsubscribe = wp.data.subscribe(function () {
		setTimeout(checkEditors, 1);
	});
})(window, wp);
