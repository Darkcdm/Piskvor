let GameArea = {
	size: 3,
	winLength: 3,

	gameField: document.createElement("div"),
	gameTable: document.createElement("table"),

	renderGameTable: function () {
		for (y = 0; y < this.size; y++) {
			var tr = document.createElement("tr");
			for (x = 0; x < this.size; x++) {
				var td = document.createElement("td");
				td.innerHTML = " * ";
				tr.appendChild(td);
			}
			this.gameTable.appendChild(tr);
		}
		document.getElementById("body").appendChild(this.gameTable);
	},
};

let InputArea = {
	inputField: document.createElement("div"),

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

		this.playButton.onclick = function () {
			InputArea.collectData();
		};
		this.inputField.id = "inputField";
		this.inputField.setAttribute("class", "gameArea");

		this.inputField.appendChild(this.size);
		this.inputField.appendChild(this.winLength);
		this.inputField.appendChild(this.playButton);

		document.getElementById("body").appendChild(this.inputField);
	},

	collectData: function () {
		sizeValue = this.size.value;
		winLengthValue = this.winLength.value;
		sizeValue = parseInt(sizeValue);
		winLengthValue = parseInt(winLengthValue);
		//typeof sizeValue != "number"
		//sizeValue == null || sizeValue == " " || sizeValue == ""
		if (isNaN(sizeValue)) {
			console.log("size is not set");
			console.log(typeof sizeValue);
			console.log(sizeValue);
			return;
		}
		if (typeof winLengthValue != "number") {
			console.log("winLength is not set");
			console.log(winLengthValue);
			console.log(isNaN(winLengthValue));
			return;
		}
		if (sizeValue < 3) {
			console.log("size is lower then 3");
			return;
		}
		if (winLengthValue < 3) {
			console.log("winLength is lower then 3");
			return;
		}
		console.log("both values are valid ");
		console.log(sizeValue, winLengthValue);

		GameArea.renderGameTable();
	},
};
