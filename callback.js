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
		const i = Math.random() + 1;
		console.log('1');
	}, i);

	setTimeout(() => {
		const i = Math.random() + 1;
		console.log('2');
	}, i);

	setTimeout(() => {
		const i = Math.random() + 1;
		console.log('3');
	}, i);
}
