const NEIGHBORHOOD_NAMES = "https://data.cityofnewyork.us/api/views/xyye-rtrs/rows.json?accessType=DOWNLOAD";
const DISTRICT_GEOSHAPES = "http://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson";
const CRIMES = "https://data.cityofnewyork.us/api/views/qgea-i56i/rows.json?accessType=DOWNLOAD";
const HOUSING = "https://data.cityofnewyork.us/api/views/hg8x-zxpr/rows.json?accessType=DOWNLOAD";

var testingArrange =
{
	"1" : ["test1"],
	"2" : ["test2"],
	"3" : ["test3"],
	"4" : ["test4"],
	"5" : ["test5"],
	"6" : ["test6"],
	"7" : ["test7"],
	"8" : ["test8"],
	"9" : ["test9"],
	"10" : ["test10"],
}	

var ids = Object.keys( testingArrange );
var map;

/* HERE I GET DATASET
function getDataFromURL( URL )
{
	var data = $.get( URL, function( )
		{
			console.log( URL )
		} 
	)
	.done( function( )
		{
			//Success
			//console.log(data);
			DATASETS_API_SERIES_ID[data.responseJSON.request.series_id].push(data.responseJSON.series[0].data);
		}
	)
	.fail( function( error )
		{
			console.error( error );
		}
	)
}
*/

function updateTable( top3 )
{
	tableReference = $( "#top" )[0];
	var row, district;
	$( "#top tr" ).remove( );
	for( var id of ids )
	{
		if( top3 == true && id == "4" ) break; 
		row = tableReference.insertRow( 0 );
		district = row.insertCell( 0 );
		district.innerHTML = testingArrange[id][0]
	}
}

function updatetop3( )
{
	updateTable( true );
}

function update( )
{
	updateTable( false );
}

//---------------------------------  D3.JS  ---------------------------------------




//------------------------------------------ Google Maps ---------------------------------------------

function onGoogleMapResponse( )
{
	map = new google.maps.Map( document.getElementById( 'googleMapContainer' ), 
		{
			zoom: 10, center: { lat: 40.7291, lng: -73.9965 }
		}
	);

	var marker = new google.maps.Marker
	(
		{
    		position: { lat: 40.7291, lng: -73.9965 },
    		map: map,
    		title: 'NYU'
  		}
  	);

}

//------------------------------------------ Google Maps ---------------------------------------------**/

$( document ).ready
( 
	function( )
	{
		$( "#onoff" ).on( "click", update );
		$( "#safety" ).on( "click", update );
		$( "#distance" ).on( "click", update );
		$( "#affordability" ).on( "click", update );
		$( "#top3" ).on( "click", updatetop3 );
	}
)

