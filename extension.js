// Copyright (C) 2016 Grant McWilliams
// Licence: GPLv2+

const Main = imports.ui.main;

function init() {
}

function enable() {
    menu = Main.panel.statusArea.dateMenu;
    menu.actor.hide();
}

function disable() {
    menu = Main.panel.statusArea.dateMenu;
    menu.actor.show();
}
