// ==UserScript==
// @name        FUT Refresh Transfer List
// @version     0.1.2
// @description Refresh Transfer List
// @license     MIT
// @author      Tim Klingeleers
// @match       https://www.easports.com/fifa/ultimate-team/web-app/*
// @namespace   https://github.com/Mardaneus86
// @updateURL   https://raw.githubusercontent.com/Mardaneus86/futwebapp-tampermonkey/master/refresh-transfer-list.user.js
// @downloadURL https://raw.githubusercontent.com/Mardaneus86/futwebapp-tampermonkey/master/refresh-transfer-list.user.js
// @supportURL  https://github.com/Mardaneus86/futwebapp-tampermonkey/issues
// ==/UserScript==
// ==OpenUserJS==
// @author Mardaneus86
// ==/OpenUserJS==
(function () {
  'use strict';

  $(document).bind('DOMNodeInserted', function (event) {
    if ($(event.target).hasClass("SearchResults")) {
      if ($(event.target).find('.refreshList').length === 0) {
        $(event.target).find('.pagingContainer').append('<a class="btn-flat pagination next refreshList" style="float: right">Refresh</a>');
        $('.refreshList').click(function () {
          gNavManager.getCurrentScreenController()._controller._listController._requestItems();
        });
      }
    }

    if ($(event.target).hasClass("noResultsScreen")) {
      if ($(event.target).find('#refreshListNoResults').length === 0) {
        $(event.target).find('.layout-article.contents').append('<button class="standard" id="refreshListNoResults">Refresh</button>');
        $('#refreshListNoResults').click(function () {
          gNavManager.getCurrentScreenController()._controller._listController._requestItems();
        });
      }
    }
  });
})();