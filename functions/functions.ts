import axios from 'axios';

export async function getPerson<String>() {
	const e = await axios('https://fakeface.rest/face/json');
	return e.data.image_url;
}
