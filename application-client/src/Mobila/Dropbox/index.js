import {Dropbox} from "dropbox";

const accessToken = "2w5FJtRWeN8AAAAAAAAALCv_to9DFRpaD4302wrAhqn_eK9HKeZ2FuoxptDesx9O";

const getListOfImages = (callback) => {
	let dpx = new Dropbox({accessToken});
	dpx.filesListFolder({path: ''}).then(response => {
		response.entries.forEach(entry => {
			dpx.filesGetTemporaryLink({path: entry.path_display})
				.then(callback, console.error);
		});
	}, console.error);
};

export default {
	getListOfImages
}