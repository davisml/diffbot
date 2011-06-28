var http = require('http');

exports.api_key = "";
exports.get_frontpage = function(url){
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
        
                console.log(result);
    });
    
};

exports.get_article = function(url){
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
            console.log(body);
   
            });
    });

};
