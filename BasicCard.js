BasicCard = function(front, back) {

	if(this instanceof BasicCard) {
		this.Front = front;
		this.Back = back;
	} else {
		return new BasicCard(front, back);
	}

};

exports.BasicCards;