// ==UserScript==
// @name         Strava Flyby Athlete Avatar Anonymizer
// @namespace    https://github.com/marvk/strava-flyby-athlete-avatar-anonymizer
// @version      1.0.0
// @description  Blank out athlete avatars from Strava Flybys
// @author       marvk
// @match        https://labs.strava.com/flyby/viewer/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=strava.com
// @grant        none
// ==/UserScript==

let avatarsDisabled = false;

const disableText = 'Disable Avatars';
const enableText = 'Enable Avatars';

const style = document.createElement('style');
style.appendChild(document.createTextNode('.athlete-avatar { border-style: solid !important; border-width: 16px !important; }'));

function getNavbar() {
    return document.getElementById('navbar-collapse').firstElementChild;
}

function createNewListItem() {
    return document.createElement("li");
}

function createNewLink() {
    const a = document.createElement("a");

    a.onclick = () => {
        avatarsDisabled = !avatarsDisabled;

        if (avatarsDisabled) {
            a.textContent = enableText;
            document.head.appendChild(style);
        } else {
            a.textContent = disableText;
            document.head.removeChild(style);
        }
    };

    a.textContent = disableText;
    a.style.cursor = 'pointer';

    return a;
}

const li = createNewListItem();
const a = createNewLink();

li.appendChild(a);
getNavbar().appendChild(li);
