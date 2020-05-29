function generate() {
	let input = document.getElementById("input").value;
	let framelength = parseInt(document.querySelector('input[name="level"]:checked').value);
	let ngrams = {};

	for (let i = 0; i <= input.length - framelength; i++){
		let gram = input.substring(i, i+framelength);
		if (!ngrams[gram]) {
			ngrams[gram] = [];
		}
		ngrams[gram].push(input.charAt(i+framelength));
	}

	let current = input.substring(0, framelength);
	let result = current;
	for (let i = 0; i < 800; i++){
		let states = ngrams[current];
		if (!states) {
			break;
		}
		let next = states[Math.floor(Math.random() * states.length)];
		result += next;
		current = result.substring(result.length - framelength, result.length);
	}

	document.getElementById("output").value = result;
}

function reset(){
	document.getElementById("input").value = "";
	document.getElementById("output").value = "";
	document.getElementById("3").checked = true;
}