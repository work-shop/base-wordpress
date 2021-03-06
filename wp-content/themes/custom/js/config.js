'use strict';

var global_config = {
    navHeight: 100,
    mobileNavHeight: 80,  
    navPadding: 100,      
    transitionDuration: 1000,
    mobileBreakpoint: 768
};

var config = {
    dropdowns: {
        linkSelector: '.dropdown-link',
        bodyOffClass: 'dropdown-off',
        bodyOnClass: 'dropdown-on',
        dropdownSelector: '.menu-dropdown',     
        blanketSelector: '#blanket-dropdown'     
    },
    viewportLabel: {
        viewportLabelPxSelector: '#viewport-label-px'
    },
    clickyNav: {
        selector: '#nav',
        navHeight: global_config.navHeight,
        mobileNavHeight: global_config.mobileNavHeight,
        mobileBreakpoint: global_config.mobileBreakpoint,
        activeOnMobile: true        
    },
    stickyNav: {
        selector: '.page-nav',
        navHeight: global_config.navHeight,
        mobileNavHeight: global_config.mobileNavHeight,
        mobileBreakpoint: global_config.mobileBreakpoint,
        activeOnMobile: true        
    },
    linksNewTab: {
    },
    jumpLinks: {
        selector: '.jump',
        navHeight: global_config.navHeight,
        mobileNavHeight: global_config.mobileNavHeight,
        jumpPadding: 50,
        mobileJumpPadding: global_config.navPadding,
        mobileBreakpoint: global_config.mobileBreakpoint,
        transitionDuration: global_config.transitionDuration,
        preventUrlChange: false
    },
    loading: {
        loadDelay: 200,
        loadingClass: 'loading',
        loadedClass: 'loaded',
    },
    modals: {
        modalClass: 'modal',
        modalCloseClass: 'modal-close',
        modalToggleClass: 'modal-toggle',
        modalOnBodyClass: 'modal-on',
        modalOffBodyClass: 'modal-off'
    },
    scrollSpy: {
        firstElementSelector : '.spy-first',
        spyTargetSelector : '.block',
        spyLinkSelector : '.spy-link',
        spyActiveClass : 'spy-active',
        spyOffset : 150
    },
    menuToggle:{
        menuToggleSelector: '.menu-toggle',
        menuSelector: '#nav',
        blanketSelector: '#menu-blanket',
        bodyOffClass: 'menu-closed',
        bodyOnClass: 'menu-open'
    },
    slickSlideshows: {
        defaultSelector: '.slick-default',
        slidesToShow: 1,
        dots: true,
        arrows: true,
        autoplay: true,
        fade: true,
        autoplaySpeed: 5000,
        speed: 700        
    },
    accordian: {

    }
};

export { config };
