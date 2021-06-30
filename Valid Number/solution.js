/**
 * @param {string} s
 * @return {boolean}
 */
 var isNumber = function(s) {
	let x = Number(s);
	if (s == "Infinity" || s == "-Infinity" || s == "+Infinity") return false;
	return !Number.isNaN(x);
};