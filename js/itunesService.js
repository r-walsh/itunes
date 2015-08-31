var app = angular.module('itunes');

app.service('itunesService', function($http, $q){
  //This service is what will do the 'heavy lifting' and get our data from the iTunes API.
  //Also not that we're using a 'service' and not a 'factory' so all your method you want to call in your controller need to be on 'this'.

  //Write a method that accepts an artist's name as the parameter, then makes a 'JSONP' http request to a url that looks like this
  //https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
  //Note that in the above line, artist is the parameter being passed in. 
  //You can return the http request or you can make your own promise in order to manipulate the data before you resolve it.

    //Code here
    this.FormatData = function(data) {
    	this.AlbumArt = data[i].artworkUrl100;
    	this.Artist = data[i].artistName;
    	this.Collection = data[i].collectionName;
    	this.CollectionPrice = data[i].collectionPrice;
    	this.Play = data[i].previewUrl;
    	this.Type = data[i].kind;
    }

    this.artistSearch = function(artist) {
    	var deferred = $q.defer();
    	$http.jsonp('https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK')
    		.then(function(response) {
    			var parsedResponse = response.data.results;
    			var passToController = [];
    			for (var i = 0; i < parsedResponse.length; i++);
    				passToController.push(this.FormatData(parsedResponse));
    		});
    }
});