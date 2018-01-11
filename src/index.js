export default function isDomNodeList(x) {
	const prototypeToString = Object.prototype.toString.call(x)
	const regex = /^\[object (HTMLCollection|NodeList|Object)\]$/

	return typeof window.NodeList === 'object'
		? x instanceof window.NodeList
		: x !== null &&
				typeof x === 'object' &&
				typeof x.length === 'number' &&
				regex.test(prototypeToString) &&
				(x.length === 0 || (typeof x[0] === 'object' && x[0].nodeType > 0))
}
