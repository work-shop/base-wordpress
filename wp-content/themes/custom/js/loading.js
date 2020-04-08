'use strict';

var getUrl = window.location;
var siteUrl = '';
var local = false;
if(  ( window.location.href.indexOf('localhost') !== -1 ) ){
	siteUrl = 'http://localhost/worldoceansday';
	local = true;
} else{
	siteUrl = 'https://worldoceansday.kinsta.cloud';
	local = false;
}
var baseUrl = siteUrl + '/wp-json/wod-partials/v1/';

function loading( config ){
	//console.log('loading.js loaded');

	$( document ).ready( function() {

		setTimeout(function(){
			$( '.' + config.loadingClass ).addClass( config.loadedClass );
		}, config.loadDelay );

		if( $('body').hasClass('home')){
			getPartial('supporters-slideshow', $('#supporters-slideshow-target'));
		}

		if( $('.subscribe-form-target').length > 0 ){
			$('.subscribe-form-target').each(function(index, el) {
				var currentPage = $(this).data('page');
				var formID = $(this).data('form-id');
				var partialEndpoint = 'subscribe-form?currentPage=' + currentPage + '&formId=' + formID;
				var target = $('#' + $(this).attr('id'));
				getPartial(partialEndpoint, target);
			});
			
		}

		if( $('body').hasClass('translate-included')){
			setupTranslation();
		}

	});



	function getPartial( endpoint, target ){

		var url = baseUrl + endpoint;
		//console.log(url);

		$.ajax({
			url: url,
			dataType: 'json'
		})
		.done(function(data) {
			//console.log('successful request for partial');
			//console.log(data);

			if( data ){

				target.html(data);

				$('#subscribe #input_1_1').attr('tabindex', 500);
				$('#footer #input_1_1').attr('tabindex', 1000);

			} else{

			}

		})
		.fail(function() {
			console.log('error getting partial from API');
		})
		.always(function() {
			//console.log('completed request for events');
		});

	}


	function setupTranslation(){
		console.log('setupTranslation');

		setTimeout(changeGoogleTranslateButtonStyles, 1000);
		setTimeout(changeGoogleTranslateBannerStyles, 1000);
		setTimeout(checkGoogleTranslateBanner, 1000);


	}



	function changeGoogleTranslateButtonStyles() {

		if($('.goog-te-menu-frame').contents().find('.goog-te-menu2').length) {

			var iframes = $('.goog-te-menu-frame');

			iframes.each(function(index, el) {
				$(this).contents().find('.goog-te-menu2').css({
					'max-width':'100%',
					'overflow':'scroll',
					'box-sizing':'border-box',
					'height':'auto'
				});
			});

		} else {
			setTimeout(changeGoogleTranslateButtonStyles, 50);
		}

	}


	function changeGoogleTranslateBannerStyles() {

		if($('.goog-te-banner-frame').contents().find('.goog-te-banner').length) {

			if( $(window).width() < 768){
				$('.goog-te-banner-frame').contents().find('.goog-logo-link').css({
					'display': 'none'
				});
			}

		} else {
			setTimeout(changeGoogleTranslateBannerStyles, 50);
		}

	}


	function checkGoogleTranslateBanner() {

		if( $('.goog-te-banner-frame').length ) {

			console.log('translation banner included');

			if( $('.goog-te-banner-frame').parent('.skiptranslate').css('display') != 'none' ){

				console.log('translation banner visible');
				$('body').addClass('translation-banner-visible');

			} else{

				console.log('translation banner hidden');
				$('body').removeClass('translation-banner-visible');
			}

		} else {

			$('body').removeClass('translation-banner-visible');
			console.log('translation banner NOT included');

		}

		setTimeout(checkGoogleTranslateBanner, 1000);

	}
	


}


export { loading };