const getHTML = ( url, callback ) => {

	// Feature detection
	if ( !window.XMLHttpRequest ) return;

	// Create new request
	const xhr = new XMLHttpRequest();

	// Setup callback
	xhr.onload = function() {
		if ( callback && typeof( callback ) === 'function' ) {
			callback( this.responseXML );
		}
	}

	// Get the HTML
	xhr.open( 'GET', url );
	xhr.responseType = 'document';
	xhr.send();

};

getHTML( './singolo1.html', (response) => {
    singoloFirst.attachShadow({mode: 'open'});
	singoloFirst.shadowRoot.innerHTML = response.documentElement.innerHTML;
});

getHTML( './singolo2.html', (response) => {
    singoloSecond.attachShadow({mode: 'open'});
	singoloSecond.shadowRoot.innerHTML = response.documentElement.innerHTML;
});

getHTML( './singolo3.html', (response) => {
    singoloThird.attachShadow({mode: 'open'});
	singoloThird.shadowRoot.innerHTML = response.documentElement.innerHTML;
});