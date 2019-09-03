(function() {
	var web = document.getElementById( 'web' ),
		webOverlay = document.getElementById( 'webp' ),
		webClose = webOverlay.querySelector( 'button.overlay-close' );

	var aiml = document.getElementById( 'aiml' ),
		aimlOverlay = document.getElementById( 'aimlp' ),
		aimlClose = aimlOverlay.querySelector( 'button.overlay-close' );

	var unity = document.getElementById( 'unity' ),
		unityOverlay = document.getElementById( 'unityp' ),
		unityClose = unityOverlay.querySelector( 'button.overlay-close' );

		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };

	function toggleOverlayWeb() {
		if( classie.has( webOverlay, 'open' ) ) {
			classie.remove( webOverlay, 'open' );
			classie.add( webOverlay, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( webOverlay, 'close' );
			};
			if( support.transitions ) {
				webOverlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( webOverlay, 'close' ) ) {
			classie.add( webOverlay, 'open' );
		}
	}

	function toggleOverlayAiml() {
		if( classie.has( aimlOverlay, 'open' ) ) {
			classie.remove( aimlOverlay, 'open' );
			classie.add( aimlOverlay, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( aimlOverlay, 'close' );
			};
			if( support.transitions ) {
				aimlOverlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( aimlOverlay, 'close' ) ) {
			classie.add( aimlOverlay, 'open' );
		}
	}

	function toggleOverlayUnity() {
		if( classie.has( unityOverlay, 'open' ) ) {
			classie.remove( unityOverlay, 'open' );
			classie.add( unityOverlay, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( unityOverlay, 'close' );
			};
			if( support.transitions ) {
				unityOverlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( unityOverlay, 'close' ) ) {
			classie.add( unityOverlay, 'open' );
		}
	}
	web.addEventListener( 'click', toggleOverlayWeb );
	webClose.addEventListener( 'click', toggleOverlayWeb );
	aiml.addEventListener( 'click', toggleOverlayAiml );
	aimlClose.addEventListener( 'click', toggleOverlayAiml );
	unity.addEventListener( 'click', toggleOverlayUnity );
	unityClose.addEventListener( 'click', toggleOverlayUnity );

})();