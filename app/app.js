import React from 'react';
import ReactDOM from 'react-dom';
import Weather from 'Weather';

if (!document.getElementById('weatherwidget')) {
	var div = document.createElement('div');
	div.setAttribute('id', 'weatherwidget');
	document.body.appendChild(div);
}

ReactDOM.render(<Weather />, document.getElementById('weatherwidget'));
