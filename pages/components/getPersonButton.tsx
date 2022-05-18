import React, { Component } from 'react';
import { getPerson } from '../../functions/functions';
import Image from "next/image";

export default class GetPersonButton extends Component {
	constructor(props = {}) {
		super(props);
		this.state = {
			image: 'https://elipticon.com/wp/wp-content/uploads/2019/06/click-down-here.png',
			loading: false,
		};
	}

	fetchData = async () => {
		this.setState({ loading: true });
		const image = await getPerson();
		this.setState({ image });
		setTimeout(() => {
			this.setState({ loading: false });
		}, 1e3);
	};

	render() {
		const { loading } = this.state;
		return (
			<div className='person'>
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css"/>
				<button onClick={this.fetchData} disabled={loading}>
					{loading && <i className='fa fa-refresh fa-spin'></i>}
					{loading && <p>Loading image</p>}
					{!loading && <p>Click me</p>}
				</button>
				<Image></Image>
				<img
					src={this.state.image}
					alt='some person'
					width={505}
					height={505}
				/>
			</div>
		);
	}
}
