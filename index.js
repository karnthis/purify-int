const asArrayInt = (arr, mode) => {
	return arr.map(x => {
		if (mode == 'R') return asIntR(x)
		if (mode == 'N') return asIntIn(x)
		if (mode == 'K') return (asIntN(x) === null) ? x : asIntN(x)
		return asInt(x)
	})
}

const asInt = (x, fb = 0) => {
	const madeInt = Number(x)
	const madeFb = Number(fb)
	return (isNaN(madeInt)) ? (isNaN(madeFb)) ? 0 : madeFb : madeInt
}

const asIntR = (x) => {
	return asInt(x) || Math.ceil(Math.random() * Date.now())
}

const asIntF = (x, y) => {
	return asInt(x, y)
}

const asIntIn = (x) => {
	return (asIntN(x) === null) ? x : asIntN(x)
}

const asIntN = (x) => {
	const madeInt = Number(x)
	return (isNaN(madeInt)) ? null : madeInt
}


module.exports = { asArrayInt, asInt, asIntR, asIntF, asIntIn, asIntN }