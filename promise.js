/* eslint-disable import/prefer-default-export */
export const delay = (s = 3000) => {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, s);
	});
};

