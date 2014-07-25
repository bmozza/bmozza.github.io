var morriScript = mS = (function (){

  var settings = s = {
    version: Math.round(new Date().getTime() / 1000) //'0.1'
  };
	
	load = function(){
		for(var i = 0, j = arguments.length; i < j; i++){
			var file = false;
			switch(arguments[i].split('.')[1]){
				case 'js':
					file = document.createElement('script');
					file.src = arguments[i] + '?version=' + s.version;
					break;
				case 'css':
					file = document.createElement('link');
					file.rel = 'stylesheet';
					file.href= arguments[i] + '?version=' + settings.version;
					break;
				case 'html':
					var xhr= new XMLHttpRequest();
					xhr.open('GET', arguments[i], true);
					xhr.onreadystatechange= function() {
					    if (this.readyState!==4) return;
					    if (this.status!==200) return; // or whatever error handling you want
					    document.body.innerHTML= this.responseText;
					};
					xhr.send();
				default:
					break;
			}
			if(file){
				document.head.appendChild(file);
			}
    }
	}

  write = function(content){
		return document.body.innerHTML += content;
  };

	html = function(content, child_content){
		var html_content;
		for(var key in content){

			console.log(content);


			html_content = "";
			if(typeof child_content !== "undefined"){
				html_content += child_content;
			}
			html_content += "<" + key + ">";
			if(typeof content[key] === "object"){
				html(content[key], html_content);
			} else {
				html_content += content[key];
				write(html_content);
			}
			html_content += "</" + key + ">";
		}
		
	};

	return {
		load: load,
		html: html
  }

})();

window.onload = function(){
	mS.load('functions.js', 'home.html');
};