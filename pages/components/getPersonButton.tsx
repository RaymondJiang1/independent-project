import React, { Component } from 'react';
import { getPerson } from '../functions/functions';

export class GetPersonButton extends Component {
	constructor(props = {}) {
		super(props);
		this.state = {
			image: 'https://elipticon.com/wp/wp-content/uploads/2019/06/click-down-here.png',
		};
	}

	render() {
		return (
			<div className='person'>
				<button
					onClick={async () =>
						this.setState({
							image: await getPerson(),
						})
					}>
					Click me!
				</button>
				<img
					src={this.state.image}
					alt='some pereson'
					width={505}
					height={505}
				/>
			</div>
		);
	}
}
