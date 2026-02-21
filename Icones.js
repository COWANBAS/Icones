// ==UserScript==
// @name            Icones
// @description     Remove vários ícones da tela inicial do Youtube.
// @namespace       Icones
// @license         GPL-3.0
// @version         1.0
// @author          Cowanbas 
// @match           *://*.youtube.com/*
// @run-at          document-start
// ==/UserScript==

(function() {
    'use strict';

     // Escolha o icone que deseja ocultar
    const S = {
        hideFeed: false,
        hideGuideDrawer: true,
        hideGuideHomeTab: false,
        hideGuideTrendingTab: true,
        hideGuideShortsTab: true,
        hideGuideLibraryTab: true,
        hideGuideMoreFromYouTube: true,
        hideGuideLastSection: true,
        hideGuideFooter: true,
        hideRelated: true,
        hideChat: true,
        hideSidebar: false,
        hideMerch: true,
        hideComments: false,
        hideMasthead: false,
        hideSkipNavButton: false,
    };
    let css = '';
    if (S.hideFeed) css += '#feed, ytd-browse[page-subtype=home] { display: none !important; }';
    if (S.hideGuideDrawer) css += '#appbar-guide-menu, app-drawer#guide, ytd-mini-guide-renderer, #guide-button { display: none !important; } #appbar-guide-menu { width: 0; }';
    if (S.hideGuideHomeTab) css += '#home-guide-item, ytd-guide-section-renderer:first-child #items > ytd-guide-entry-renderer:first-child, #appbar-nav li:first-child, ytd-mini-guide-renderer #items ytd-mini-guide-entry-renderer:first-child { display: none !important; }';
    if (S.hideGuideTrendingTab) css += '#trending-guide-item, #appbar-nav li:nth-child(2), ytd-mini-guide-renderer #items ytd-mini-guide-entry-renderer:nth-child(2) { display: none !important; }';
    if (S.hideGuideShortsTab) css += 'ytd-guide-section-renderer:first-child #items > ytd-guide-entry-renderer:nth-child(2), #appbar-nav li:nth-child(3), ytd-mini-guide-renderer #items ytd-mini-guide-entry-renderer:nth-child(3) { display: none !important; }';
    if (S.hideGuideLibraryTab) css += 'ytd-guide-section-renderer:first-child #items > ytd-guide-collapsible-section-entry-renderer > #header { display: none !important; }';
    if (S.hideGuideMoreFromYouTube) css += 'ytd-guide-section-renderer:nth-last-child(2) { display: none !important; }';
    if (S.hideGuideLastSection) css += 'ytd-guide-section-renderer:last-child { display: none !important; }';
    if (S.hideGuideFooter) css += '#footer { display: none !important; }';
    if (S.hideRelated) css += '.ytp-endscreen-content, .ytp-ce-video { display: none !important; }';
    if (S.hideChat) css += 'ytd-live-chat-frame { display: none !important; }';
    if (S.hideSidebar) css += '#watch7-sidebar-contents, #related { display: none !important; }';
    if (S.hideMerch) css += '.ytd-merch-shelf-renderer { display: none !important; }';
    if (S.hideComments) css += '#watch-discussion, #comments { display: none !important; }';
    if (S.hideSkipNavButton) css += '#skip-navigation.ytd-masthead { display: none !important; }';
    if (S.hideMasthead) css += '#container.ytd-masthead { display: none !important; }';

    const style = document.createElement('style');
    style.textContent = css;
    document.documentElement.appendChild(style);
})();
