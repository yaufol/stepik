
drawPyramid(15);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function drawPyramid(height) {

	let pyramid = document.getElementById('pyramid');
	pyramid.removeChild(pyramid.childNodes[0]);
	for (var i = 0; i < height; i++) {
		let p = document.createElement('p');
		p.innerHTML = "&nbsp;".repeat(height - 1 - i) + "#".repeat(i + 2);
		pyramid.appendChild(p);
	}
}
