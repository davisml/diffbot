var http = require('http');
var xml  = require('xml2js');

exports.api_key = "f8928098bf065770f74592851be7b24a";
exports.get_frontpage = function(url){
    var options = {
            host:'www.diffbot.com', 
            port: 80, 
            path:'/api/frontpage?token='+exports.api_key+'&url='+encodeURI(url)
        };
        
    var body = '';
    
    http.get(options, function(res){
        res.on('data', function(d){
            body += d;
            });
        res.on('end', function(){   
        
            var parser = new xml.Parser();
            parser.addListener('end', function(result) {
                console.log(result);
            });
            parser.parseString(body);
            
            });
    });
    
};

exports.get_article = function(url){
    var options = {
            host:'www.diffbot.com', 
            port: 80, 
            path:'/api/article?token='+exports.api_key+'&url='+encodeURI(url)
        };
        
    var body = '';

    http.get(options, function(res){
        res.on('data', function(d){
            body += d;
            });
        res.on('end', function(){
            console.log(body.items);
   
            var parser = new xml.Parser();
            parser.addListener('end', function(result) {
                console.log(result);
                console.log('Done.');
            });
            parser.parseString(body);
            
            });
    });

};
