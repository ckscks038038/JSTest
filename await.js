export const delay = (s = 1000) => {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, s);
	});
};