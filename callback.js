/* eslint-disable no-console */
// eslint-disable-next-line import/prefer-default-export
export const callbackSync = () => {
	setTimeout(() => {
		console.log(1);
		setTimeout(() => {
			console.log(2);
			setTimeout(() => {
				console.log(3);
			}, 1000)
		}, 1000)
	}, 1000)
}

export const callbackAsync = () => {
	setTimeout(() => {
		console.log('1');
	}, 1000);

	setTimeout(() => {
		console.log('2');
	}, 1000);

	setTimeout(() => {
		console.log('3');
	}, 1000);
}
