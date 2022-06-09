let GameArea = {
	Width: 10,
	Height: 10,
};

let InputArea = {
	inputField: document.createElement("form"),

	size: document.createElement("input"),
	winLength: document.createElement("input"),
	playButton: document.createElement("button"),

	load: function () {
		this.size.type = "number";
		this.size.name = "size";
		this.size.placeholder = "Game Area Size";
		this.size.min = 3;

		this.winLength.type = "number";
		this.winLength.name = "winLength";
		this.winLength.placeholder = "Win Length";
		this.winLength.min = 3;

		this.playButton.innerText = "Let's Play";

		this.inputField.appendChild(this.size);
		this.inputField.appendChild(this.winLength);
		this.inputField.appendChild(this.playButton);

		document.getElementById("body").appendChild(this.inputField);
	},
};
