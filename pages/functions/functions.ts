import axios from 'axios';

export async function getPerson<String>() {
	const e = await axios('https://fakeface.rest/face/json');
	console.log(e.data.image_url);
	return e.data.image_url;
}
