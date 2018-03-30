exports.home=function(req,res){
  res.render('home',{title:'iLoveMyCity',
                    headline:'We believe that every city have something to say'
                    });
                  }


exports.city=function(req,res){
    var cityName=req.params.city;
    var title,heading;
    var imageCount=4;

    if(cityName==='berlin'){
       title="Berlin";
       heading="Berlin has something to say";
    }
    else if(cityName==='paris'){
       title="Paris";
       heading="Paris has something to say";
    }
    else if(cityName==='madrid'){
       title="Madrid";
       heading="Madrid has something to say";
    }
    else if(cityName==='london'){
       title="London";
       heading="London has something to say";
    }
    else if(cityName==='newyork'){
       title="New York";
       heading="New York has something to say";
       imageCount=6;
    }

    res.render('city',{
        title:title,
        headline:heading,
        city:cityName,
        numberOfImages:imageCount});
  }
