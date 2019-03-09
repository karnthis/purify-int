
const asArrayInt = (arr, f) => {
	return arr.map(x => (f == 'R') ? asIntR(x) : asInt(x))
}

const asInt = (x) => {
	const madeInt = parseInt(x)
	return (isNaN(madeInt)) ? 0 : madeInt
}

const asIntR = (x) => {
	return asInt(x) || Math.ceil(Math.random() * Date.now())
}


module.exports = { asArrayInt, asInt, asIntR }