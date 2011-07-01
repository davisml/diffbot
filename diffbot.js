var http = require('http');

exports.api_key = "";
exports.get_frontpage = function(url, callback){

    var options = {
            host:'www.diffbot.com', 
            port: 80, 
            path:'/api/frontpage?format=json&token='+exports.api_key+'&url='+encodeURI(url)
        };
        
    var body = '';
    
    http.get(options, function(res){
        res.on('data', function(d){
            body += d;
            });
        res.on('end', function(){   
                callback( JSON.parse(body) );
                body = '';
    	});
    });

};


// JSON format of response is:
// {
//  icon: string_url
//  author: string
//  text: string
//  title: string
//  date: string_human_friendly_format
//  url: string_url
//  xpath: string
//  media: [
//      { 
//        link: string_url
//        type: string (image)
//         primary: string_boolean
//    ]
// }
exports.get_article = function(url, callback){
    var options = {
            host:'www.diffbot.com', 
            port: 80, 
            path:'/api/article?format=json&token='+exports.api_key+'&url='+encodeURI(url)
        };
        
    var body = '';

    http.get(options, function(res){
        res.on('data', function(d){
            body += d;
            });
        res.on('end', function(){
            callback(JSON.parse(body));
            body = '';
            });
	});
};
