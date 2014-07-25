Array.prototype.last = function(){
	return this[this.length - 1];
}

Array.prototype.clean = function(value){
	for (var i = 0; i < this.length; i++) {
		if (this[i] == value) {         
			this.splice(i, 1);
			i--;
		}
	}
	return this;
}