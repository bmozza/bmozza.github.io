html({
	body: {
		articles: {
			article: {
				img: "test.jpg",
				name: "Test"
			},
			article: {
				img: "test2.jpg",
				name: "Test 2"
			}
		}
	}
});

var body = '<body>||</body>',
	articles = '<ul class="thumbnails">||</ul>',
	article = '<li class="span4"><div class="thumbnail"><img src="|img|"><h3>|name|</h3><p>|description|</p></div></li>';