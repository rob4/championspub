var Soccerama = require('soccerama').Soccerama;
var soccerama = new Soccerama(hxPr0ges4UvAID8y9aGlEPISwAkJKC9seJkM9XNEf4exbaDhC48Jh20aqLXT, 'v2.0');

soccerama.get(endpoint,params).then( function(data){
    console.log(data);
});

GET "https://soccer.sportmonks.com/api/v2.0/fixtures/between/{from}/{to}?api_token=hxPr0ges4UvAID8y9aGlEPISwAkJKC9seJkM9XNEf4exbaDhC48Jh20aqLXT"
