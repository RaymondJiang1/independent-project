import React, { Component } from 'react';
import { getPerson } from '../../functions/functions';
import Image from "next/image";
import ClickHereImage from "../../images/click-down-here.png"

export default class GetPersonButton extends Component {
	constructor(props = {}) {
		super(props);
		this.state = {
			image: ClickHereImage,
			loading: false,
		};
	}

	fetchData = async () => {
		this.setState({ loading: true });
		const image = await getPerson();
		this.setState({ image });
		setTimeout(() => {
			this.setState({ loading: false });
		}, 1500);
	};

	render() {
		const { loading, image } = this.state;
		return (
			<div className='person'>
				<button onClick={this.fetchData} disabled={loading}>
					{loading && <i className='fa fa-refresh fa-spin'></i>}
					{loading && <p>Loading image</p>}
					{!loading && <p>Click me</p>}
				</button>
				<Image src={image} alt='some person' width={500} height={505}></Image>
			</div>
		);
	}
}
