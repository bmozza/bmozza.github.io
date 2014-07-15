var morriScript = mS = (function (){

  var settings = s = {
    version: Math.round(new Date().getTime() / 1000) //'0.1'
  };
	
	load = function(){
		for(var i = 0, j = arguments.length; i < j; i++){
    	var file = false;
			switch(arguments[i].split('.').last()){
	      case 'js': case 'html':
					file = document.createElement('script');
					file.src = arguments[i] + '?version=' + s.version;
	        break;
				case 'css':
					file = document.createElement('link');
					file.rel = 'stylesheet';
					file.href= arguments[i] + '?version=' + settings.version;
					break;
	      default:
	        break;
	    }
			if(file){
				document.head.appendChild(file);
			}
    }
	}

  write = function(content){
		document.body.innerHTML += content;
  };

	html = function(html){
				
		for(var key in html) {
			console.log(eval(key));
			var value = html[key];
			for(var prop in value) {
				console.log(prop + " = " + value[prop]);
			}
			write(value[prop]);
		}
		

		
	};

	return {
		load: load,
		html: html
  }

})();

window.onload = function(){
	mS.load('content.js');
};

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
