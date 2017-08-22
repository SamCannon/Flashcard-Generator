ClozeCard = function(cloze, part, full) {

	if(this instanceof ClozeCard) {
		this.Cloze = cloze;
		this.Part = part;
		this.Full = full;
	} else {
		return new ClozeCard(cloze, part, full);
	}

};

exports.ClozeCard;