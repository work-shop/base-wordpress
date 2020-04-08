'use strict';

global.$ = require('jquery');
global.jQuery = global.$;
window.$ = global.$;

//must use
import { config } from './config.js';
import { loading } from './loading.js';
import { linksNewtab } from './links-newtab.js';
import { jqueryAccordian } from './jquery-accordian.js';
import { accordian } from './accordian.js';
import { jumpLinks } from './jump-links.js';
import { modals } from './modals.js';
import { slickSlideshows } from './slick-slideshows.js';
import { livereload } from './livereload-client.js';
import { scrollSpy } from './scroll-spy.js';
import { vh } from './vh.js';


//optional
//import { viewportLabel } from './viewport-label.js';
//import { sitewideAlert } from './sitewide-alert.js';
//import { progressiveImages } from './progressive-images.js';
import { stickyNav } from './sticky-nav.js';
import { dropdowns } from './dropdowns.js';
import { menuToggle } from './menu-toggle.js';


scrollSpy(config.scrollSpy);
livereload();
loading(config.loading);
linksNewtab(config.linksNewtab);
jqueryAccordian();
accordian();
jumpLinks(config.jumpLinks);
modals(config.modals);
slickSlideshows(config.slickSlideshows);
vh();
stickyNav(config.stickyNav);
dropdowns(config.dropdowns);
menuToggle(config.menuToggle);

//viewportLabel(config.viewportLabel);
//sitewideAlert();
//progressiveImages();


$(document).ready( function() {

});
