$(document).ready(function(){
    var lineRoutes={
        name:[],
        route:{
            routeName:[],
            routes:[]
        }

    }
    
    $.ajax({  
            type: "GET",  
            url:  "https://gist.githubusercontent.com/aravindet/5cf7e238b5115e36841baf01fd33e8f1/raw/fd14d4e000a74eba17a9ae7b10e0721a68a7e0ce/mrt.json",  
              
            cache: false,  
            success: function(result){  
                if(result!=0){  
                    var obj = JSON.parse(result);
                    //console.log(obj.lines);
                    $('#sel1').prop('selectedIndex', 0);
                    Object.entries(obj.stations).forEach(([key, val]) => {
                        $('#sel1').append($('<option></option>').attr('value',key).text(key));
                        $('#sel2').append($('<option></option>').attr('value',key).text(key));
                      });

                    

                     
                    Object.entries(obj.lines).forEach(([key, val]) => {
                       //console.log(val);
                       lineRoutes.name.push(val.name);
                       lineRoutes.route.routeName.push(val.name);
                       lineRoutes.route.routes.push(val.route);
                      });
                      
                      
                      //console.log(lineRoutes.route);
                }  
                else  
                    console.log("failed");  
            }  
            });  	
            function checkRoutes(loc1,loc2){
                //console.log(lineRoutes.route);
                var temp="No routes found."
                let i=0;
                Object.entries(lineRoutes.route.routes).forEach(([key, val]) => {
                    //console.log(val);
                  if( val.indexOf(loc1)>=0){
                    if(val.indexOf(loc2)>=0){
                       //alert(lineRoutes.route.routeName[i]);
                       temp = lineRoutes.route.routeName[i] + " " +  Math.abs(((val.indexOf(loc2))-(val.indexOf(loc1)))) + " stops";
                       
                        }
                  }
                  i++;
                  });
                  return temp;
            }
            $("#searchBtn").click(function(){
               // document.querySelector("#searchBtn").disabled=true;
                var s1 = document.getElementById("sel1");
                var s2 = document.getElementById("sel2");
              
                var stage1 = s1.options[s1.selectedIndex].value;
                var stage2 = s2.options[s2.selectedIndex].value;
                document.querySelector(".calculatePath").style.display = "block";
                document.querySelector("#loc1").innerText=stage1;
                document.querySelector("#loc2").innerText=stage2;

                let result=checkRoutes(stage1,stage2);
                console.log(result);
               
                document.querySelector("#lineFound").innerText=result;
             });	

});
