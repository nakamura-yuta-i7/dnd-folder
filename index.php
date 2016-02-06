<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.0-beta.1/jquery-ui.min.js"></script>
<style>
.side-panel {
	width: 150px;
}
.folder {
	background-color: RGBA(255, 218, 108, 1);
}
.folder a {
	display: block;
	color: black;
	padding: 5px;
	/*cursor: move;*/
	
}
.folder a:hover {
	background-color: RGBA(243, 207, 93, 1);
}
</style>

<div class="side-panel">
	<div class="folder">
		<a href="#">フォルダ１</a>
	</div>
	<div class="folder">
		<a href="#">フォルダ２</a>
	</div>
	<div class="folder">
		<a href="#">フォルダ３</a>
	</div>
</div>

<script>
$(function() {
	$(".folder").attr("draggable","true");
	$(".folder").on("dragstart", function(e, ui) {
		console.log(".folder dragstart e, ui", e, ui);
		$(e.target).hide();
	});
	$(document).on("click", ".folder a", function(e) {
		e.preventDefault();
		console.log(".folder click");
	});
});
</script>
