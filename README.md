#JCC Newsticker. a lightweight jquery newsticker plugin

#Usage
* Add HTML List Element
<pre>
	<ul class="newsticker" id="newsticker">
		<li>NEWS: <a href="/news/details/news_id/1">First News</a></li>
		<li>NEWS: <a href="/news/details/news_id/2">Second News</a></li>
	</ul>
</pre>
* Add jQuery
<pre>
	$(document).ready(function(){
		$('.newsticker').ticker({
			timeout: 400,
			effect: 'fade'|'slide'
		});
	}
</pre>