import React, { Component } from 'react';
import { getPerson } from '../functions/functions';

export class GetPersonButton extends Component {
	onClick() {
		getPerson();
	}

	render() {
		return <button onClick={this.onClick}></button>;
	}
}
