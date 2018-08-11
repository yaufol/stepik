
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
//pyramid.removeChild(pyramid.childNodes[0]);
pyramid.appendChild(document.createTextNode('a child'));
pyramid.append(document.createTextNode('not a child'));
for(var i=0;i<height;i++){

	console.log(" ".repeat(height-1-i) + "#".repeat(i+2));}
}
