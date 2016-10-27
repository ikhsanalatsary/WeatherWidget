import React from 'react';
import ReactDOM from 'react-dom';

  
if (!document.getElementById('weatherwidget')) {
	var div = document.createElement('div');
	div.setAttribute('id', 'weatherwidget');
	document.body.appendChild(div);
}

ReactDOM.render(<h1>Weather Widget</h1>, document.getElementById('weatherwidget'));
