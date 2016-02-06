$(function() {
	$(".folder").attr("draggable",true).attr("droppable",true);
	
	var $clone = null;
	
	$(".folder").on("dragstart", function(e, ui) {
		console.log("dragstart", e);
		
		e.originalEvent.dataTransfer.setDragImage($("img")[0], 0, 0);
		
		// 移動だけに制限する
		e.originalEvent.dataTransfer.effectAllowed = "move";
		
		// $clone = $(this).clone();
		// $("body").append( $clone );
		// $clone.addClass("dragging-elem");
		$(this).addClass("dragging-src-elem");
	});
	
	
	$(".folder").on("drag", function(e) {
		// $clone.css("top", e.clientY - 20);
		// $clone.css("left", e.clientX - 50);
	});
	
	
	$(".folder").on("dragend", function(e, ui) {
		console.log("drag-end", $(this) );
		
		var $drag_folder = $(this)
		$drag_folder.removeClass("dragging-src-elem");
		
		// dragendイベントにおいてdropEffectプロパティの値がnoneである場合、
		// ドラッグ操作がキャンセルされたことを意味します。
		// url: https://developer.mozilla.org/ja/docs/DragDrop/Drag_Operations
		console.log("e.originalEvent.dataTransfer.dropEffect",
			e.originalEvent.dataTransfer.dropEffect);
			
		if ( e.originalEvent.dataTransfer.dropEffect == "none" ) {
			return false;
		}
		
		// $clone.remove();
		if ( ! confirm( $drag_folder.text() +  " を " + $drop_folder.text() + " に移動させますか？" ) ) {
			return false;
		}
		
		$drag_folder.hide("fast")
		
	});
	
	var $drop_folder = null;
	$(".folder").on("drop", function(e) {
		console.log( "drop", $(this)[0] );
		$drop_folder = $(this)
	});
	
	
	$(".folder").on("dragover", function(e) {
		// ドロップは規定では禁止されている
		// 許可するにはdragoverで規定の動作を変更する必要がある。
		// 参考： ドロップ対象の明示
		//       https://developer.mozilla.org/ja/docs/DragDrop/Drag_Operations
		e.preventDefault(); // 必須
		
		console.log( "dragover", $(this).text() );
	});
	
	
	$(".folder").on("dragenter", function(e) {
		// e.preventDefault();
		console.log( "dragenter", $(this).text() );
		$(this).addClass("drag-hover");
		
	});
	
	
	$(".folder").on("dragleave", function(e) {
		// e.preventDefault();
		console.log( "dragleave", $(this).text() );
		$(this).removeClass("drag-hover");
	});
	
	
	$(document).on("click", ".folder a", function(e) {
		e.preventDefault();
		console.log(".folder click");
	});
});
