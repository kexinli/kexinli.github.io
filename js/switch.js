$(function(){
	var switchFlag = true;
	$( '.each_work a' ).on( 'click', function( e ){
		if( switchFlag ){
			switchFlag = false;
			var id = $( this ).attr( 'href' );
			$( '.each_work_detail' ).not( ':hidden' ).hide();
			$( id ).fadeIn( 1500, function(){
				switchFlag = true;
			});
			$( '.operate_box:hidden' ).show();
		}
	});
	$( '#back' ).on( 'click', function( e ){
		$( '.operate_box' ).hide();
		$( '.each_work_detail' ).not( ':hidden' ).hide();
	});
	$( '.page_turn a' ).on( 'click', function( e ){
		var len = $( '.each_work' ).length,
			patt = /^article(\d+)$/;
			curPage = parseInt( $( '.each_work_detail' ).not( ':hidden' ).attr( 'id').replace( patt, "$1" ) );
		if( $( e.target ).data( 'prev' ) ){
			if( curPage == 1 ){
				return false;
			}
			curPage -= 1;
		}else{
			if( curPage == len ){
				return false;
			}
			curPage += 1;
		}
		if( switchFlag ){
			switchFlag = false;
			var id = "#article"+curPage;
			$( '.each_work_detail' ).not( ':hidden' ).hide();
			$( id ).fadeIn( 1500, function(){
				switchFlag = true;
			});
			window.location.hash = id;
			$( '.operate_box:hidden' ).show();
		}
		e.preventDefault();
	});
});