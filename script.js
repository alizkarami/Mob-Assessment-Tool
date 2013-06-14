	var resultsObject={};
	var industryDataResult={};
	var sliderResultid=[];
	var totValueallQ;
	var resultValue;
	var allData;
	var captionPoints=[];
	var graphcolors = ['rgba(0,155,40,0.8)','rgba(255, 0, 0 ,0.8)','rgba(255, 165, 0,0.8)','rgba(155,30,0,0.8)','rgba(0, 0, 255,0.8)'];
	var contactDetails={};

// comment add here

	

	function generateIndustryRadioboxonHTML() {
			
			var html02="";
			var counter = 0;
			var radioboxid;
			var valueid;
			
			html02+='<fieldset data-role="controlgroup">';
			
			for(i_index in this.industryData.Industry) {
			radioboxid="radio-choice-"+counter;
			valueid="choice-"+counter;
			this.industryData.Industry[i_index].radioboxid=radioboxid;
			
			html02+='<input  type="radio" name="radio-choice"  id="'+radioboxid+'" value="'+valueid+'" class="custom-1" data-questionNumber="'+i_index+'" /><label for="'+radioboxid+'">'+this.industryData.Industry[i_index]+'</label>';
				
			counter++;

			}
			html02+='</fieldset>';
								
			return html02;
	};

	function generateEmployeeRadioboxonHTML() {
			
			var html03="";
			var counter = 0;
			var radioboxid;
			var valueid;
			html03+='<fieldset data-role="controlgroup">';
			
			for(i_index in this.industryData.Employees) {
			radioboxid="radio-choice-"+counter;
			valueid="choice-"+counter;
			this.industryData.Employees[i_index].radioboxid=radioboxid;
			
			html03+='<input  type="radio" name="radio-choice"  id="'+radioboxid+'" value="'+valueid+'" class="custom-2" data-questionNumber="'+i_index+'"/><label for="'+radioboxid+'">'+this.industryData.Employees[i_index]+'</label>';
																																						
			counter++;

			}
			html03+='</fieldset>';
								
			return html03;
	};

	function generatePagesonHTML() {
			
			var html04="";
			var counter = 0;
			var pageid;
			
			var choicetype;
			var thisObjchoice;
			var pageNumber=0;
			var questionid;
			var pageheader;
			for(i in this.questionData.Questions) {
			pageNumber++;
			}
			
			for(p in this.questionData.Questions) {
			choicetype= questionData.Questions[p].type;
			pageid="page-"+(counter+1);
			questionid="question-"+(counter+1);
			pageheader="Page "+(counter+1)+" from "+(pageNumber+1);
			
			
			this.questionData.Questions[p].pageid=pageid;
			
			
				html04+='<div data-role="page" id="'+pageid+'" ><div data-role="header"  data-position="fixed" data-theme="b"><a href="#page-0" data-role="button" data-icon="home" data-iconpos="notext">Home</a><h1>Question '+(counter+1)+' from '+(pageNumber)+'</h1></div><div data-role="content"><div id = "'+questionid+'">'+this.questionData.Questions[p].Question+'<fieldset data-role="controlgroup">';
				
				switch (choicetype)
					{
						case 'MULTIPLE':
							var ch_counter = 0;
							var checkboxid;
							var valueid;
							
							
							for(j in  questionData.Questions[p].Answer) {
							
								thisObjchoice=questionData.Questions[p].Answer[j].text;
								checkboxid=questionid+"-checkbox-"+ch_counter;

								//this.thisObjchoice.checkboxid=checkboxid;
								this.questionData.Questions[p].Answer[j].text.checkboxid=checkboxid;
								//console.log( checkboxid);
								html04+='<input type="checkbox" name="'+checkboxid+'" id="'+checkboxid+'" class="MULTIPLE" data-questionNumber="'+p+'" data-questionChoice="'+j+'" /><label for="'+checkboxid+'">'
								if (questionData.Questions[p].Answer[j].image==""){
									html04+=''+thisObjchoice+'</label>'
								}else{
									html04+='<img src="images/MDPI/'+questionData.Questions[p].Answer[j].image+'" alt="UNSW Gloabal"><span  class="selectionLabel" style="padding-left:20px">'+thisObjchoice+'</span></label>';
								}

								//html_Mch+counter+='<div>'+thisObjchoice+'</div>';
								
								//questionData.Questions[p].Answer[$(this).attr('checkboxid')].value=multipleObj;
								ch_counter++;
								//console.log(questionData.Questions[p].Answer[$(this).attr('checkboxid')].value);
							}
							
						break;
						case "SINGLE":
							
							var ch_counter = 0;
							var radioboxid;
							var valueid;
							
							for(j in  questionData.Questions[p].Answer) {
								thisObjchoice=questionData.Questions[p].Answer[j].text;
								radioboxid=questionid+"-radio-choice-"+ch_counter;
								valueid=questionid+"-choice-"+ch_counter;
								this.questionData.Questions[p].Answer[j].text.radioboxid=radioboxid;
								this.questionData.Questions[p].Answer[j].text.valueid=valueid;
								html04+='<input type="radio" name="radio-choice" id="'+radioboxid+'" value="'+valueid+'" class="SINGLE" data-questionNumber="'+p+'" data-questionChoice="'+j+'"/><label for="'+radioboxid+'">';
								if (questionData.Questions[p].Answer[j].image==""){
									html04+=''+thisObjchoice+'</label>'
								}else{
									html04+='<img src="images/MDPI/'+questionData.Questions[p].Answer[j].image+'" alt="UNSW Gloabal"><span  class="selectionLabel" style="padding-left:20px">'+thisObjchoice+'</span></label>';
								}
								
								
								
								ch_counter++;

							}
							
						break;
						
						case "SLIDERS":
							
							var ch_counter = 0;
							var sliderid;
							
							
							for(j in  questionData.Questions[p].Answer) {
								thisObjchoice=questionData.Questions[p].Answer[j].text;
								sliderid=questionid+"-slider-mini-"+ch_counter;
								sliderResultid.push([sliderid,p,j]);
								this.questionData.Questions[p].Answer[j].text.sliderid=sliderid;
								
								html04+='<label for="'+sliderid+'" class="selector">'
								
								if (questionData.Questions[p].image != null){
									
									html04+='<center><img src="images/MDPI/'+questionData.Questions[p].image+'" alt="UNSW Gloabal"></center>'+thisObjchoice+'</label><input type="range" name="'+sliderid+'" id="'+sliderid+'" value="'+questionData.Questions[p].Answer[j].maxValue/2+'" min="'+questionData.Questions[p].Answer[j].minValue+'" max="'+questionData.Questions[p].Answer[j].maxValue+'" data-highlight="true" data-mini="true" data-questionNumber="'+p+'" data-questionChoice="'+j+'" />';
									
								}else if(questionData.Questions[p].Answer[j].minImage!= null && questionData.Questions[p].Answer[j].maxImage!= null){
									html04+=''+thisObjchoice+'</label><img src="images/MDPI/'+questionData.Questions[p].Answer[j].minImage+'" alt="UNSW Gloabal"><input type="range" name="'+sliderid+'" id="'+sliderid+'" value="'+questionData.Questions[p].Answer[j].maxValue/2+'" min="'+questionData.Questions[p].Answer[j].minValue+'" max="'+questionData.Questions[p].Answer[j].maxValue+'" data-highlight="true" data-mini="true" data-questionNumber="'+p+'" data-questionChoice="'+j+'"/><img src="images/MDPI/'+questionData.Questions[p].Answer[j].maxImage+'" alt="UNSW Gloabal">';
								}
								else{
									
									html04+=''+thisObjchoice+'</label><input type="range" name="'+sliderid+'" id="'+sliderid+'" value="'+questionData.Questions[p].Answer[j].maxValue/2+'" min="'+questionData.Questions[p].Answer[j].minValue+'" max="'+questionData.Questions[p].Answer[j].maxValue+'" data-highlight="true" data-mini="true" data-questionNumber="'+p+'" data-questionChoice="'+j+'"/>';
								}
				
								ch_counter++;

							}
							
						break;
				
					}
				
				if ((counter+2)==27){
				html04+='</fieldset></div></div><div data-role="footer" data-theme="d"><a href="#page-'+(counter)+'" data-role="button" onclick="button_back_clicked()" class="back" data-icon="arrow-l" data-transition="slide" data-direction="reverse">Back</a><a href="#page-'+(counter+2)+'" data-role="button" onclick="button_clicked()" class="next" data-icon="arrow-r" data-transition="slide">Next</a></div></div>';
				}else{
				html04+='</fieldset></div></div><div data-role="footer" data-theme="d"><a href="#page-'+(counter)+'" data-role="button" class="back" data-icon="arrow-l" data-transition="slide" data-direction="reverse">Back</a><a href="#page-'+(counter+2)+'" data-role="button"  class="next" data-icon="arrow-r" data-transition="slide">Next</a></div></div>';
					}
			counter++;

			}
			
								
			return html04;
			
	};
	
	function emailDetailClickedHTML(){
	
		
		
		var html05="";
	
	html05='<form action="sendMail.php" method="post"><table border="0" style="background:#ececec width:100%" ><tr align="left"><td>First Name</td><td><input type="text" name="firstname"></td></tr><tr align="left"><td>Last Name</td><td><input type="text" name="lastname"></td></tr><tr align="left"><td>Company</td><td><input type="text" name="company"></td></tr><tr align="left"><td>Email</td><td><input type="text" name="email"></td></tr><tr align="left"><td>Phone number</td><td><input type="text"  name="phone"></td></tr>';

	for (obj in industryDataResult){
		html05+='<tr align="left"><td><input type="hidden"  name="'+obj+'" value="'+industryDataResult[obj]+'"></td></tr>';
	}
	for (obj_key in resultValue.parameters){
		html05+='<tr align="left"><td><input type="hidden"  name="'+resultValue.parameters[obj_key].label+'" value="'+resultValue.parameters[obj_key].value+''+"%"+'""></td></tr>';
	}
		html05+='<tr align="left"><td valign="top">Comments</td><td><textarea name="comments" rows="6" cols="40"></textarea></td></tr><tr align="left"><td>&nbsp;</td><td><input type="submit" id="submit" value="Send"></td></tr></table></form>';
		
	return html05;	
	};
	
	function button_clicked(){
	
	for (sliderkey in  sliderResultid){
		var value={
				"byod" : 0,
				"corporate" : 0,
				"engagement" : 0,
				"disruption" : 0,
				"workflow" : 0,
				"overall" : 0
			  };
		
		var SliderValue = $("#"+sliderResultid[sliderkey][0]+"").val();
		value.byod=questionData.Questions[sliderResultid[sliderkey][1]].Answer[sliderResultid[sliderkey][2]].value.byod*SliderValue;
		value.corporate=questionData.Questions[sliderResultid[sliderkey][1]].Answer[sliderResultid[sliderkey][2]].value.corporate*SliderValue;
		value.engagement=questionData.Questions[sliderResultid[sliderkey][1]].Answer[sliderResultid[sliderkey][2]].value.engagement*SliderValue;
		value.disruption=questionData.Questions[sliderResultid[sliderkey][1]].Answer[sliderResultid[sliderkey][2]].value.disruption*SliderValue;
		value.workflow=questionData.Questions[sliderResultid[sliderkey][1]].Answer[sliderResultid[sliderkey][2]].value.workflow*SliderValue;
		value.overall=questionData.Questions[sliderResultid[sliderkey][1]].Answer[sliderResultid[sliderkey][2]].value.overall*SliderValue;

		questionkey=questionData.Questions[sliderResultid[sliderkey][1]].Question+"-"+questionData.Questions[sliderResultid[sliderkey][1]].Answer[sliderResultid[sliderkey][2]].text;
		 resultsObject[questionkey]=value;
	}

	var byod=0,corporate=0,engagement=0,disruption=0,workflow=0,overall=0;
			
			
			
			
			for(i in resultsObject) {
			
				
				byod=byod+resultsObject[i].byod;
				corporate=corporate+resultsObject[i].corporate;
				engagement=engagement+resultsObject[i].engagement;
				disruption=disruption+resultsObject[i].disruption;
				workflow=workflow+resultsObject[i].workflow;
				overall=overall+resultsObject[i].overall;
				
			
				
			}
			
			totValueallQ=[(100*byod/1.4).toFixed(2),(100*corporate/3.35).toFixed(2),(100*engagement/1.9).toFixed(2),(100*disruption/1.8).toFixed(2),(100*workflow/2).toFixed(2)];
			//console.log(byod,corporate,engagement,disruption,workflow,overall);
			resultValue={
				parameters:[
				{label:		"BYOD" ,	value: (100*byod/1.4).toFixed(2),	year:(5*byod/1.4 +2009).toFixed()} ,
				{label:		"Corporate", value: (100*corporate/3.35).toFixed(2),	year: (5*corporate/3.35+2009).toFixed()},
				{label:		"Engagement" ,	value:(100*engagement/1.9).toFixed(2), year: (5*engagement/1.9+2009).toFixed()},
				{label:		"Disruption", value:(100*disruption/1.8).toFixed(2), year: (5*disruption/1.8+2009).toFixed()},
				{label:		"Workflow", value:(100*workflow/2).toFixed(2), year: (5*workflow/2+2009).toFixed()}
				],
				"Overall" : (5*overall/4.1833333+2009).toFixed()
			  };
			allData=[totValueallQ];
			//industryDataResult["graph-result"]=resultValue;
			//console.log(industryDataResult);
	
			draw('result-graph');
			$("#assessment-result").html(creatTableHTML());
			
			
			drawsign();
			
			
};



function generaeAnswerforemailHTML() {

	var html="";

	for (i in industryDataResult){
		//htmlemail+='<tr align="left"><td>Hidden:</td><td><input   name="'+index+'" value="'+industryDataResult[index]+'"></td></tr>';
		
			//html+='<h3>'+industryDataResult[i]+'</h3>';
			//alert("called");

		}
		//for(index2 in industryDataResult.graph-result.parameters){
			//htmlemail+='<input   name="'+industryDataResult.graph-result.parameters[index2].label+'" value="'+industryDataResult.graph-result.parameters[index2].tablevalue+'">';
		//}
		
		console.log("called");

return html;
	};

function drawsign(){
			for (n in captionPoints){
			var canvas = document.getElementById('sign-'+n+'');
			if (canvas.getContext){
				var tablepoints =  canvas.getContext('2d');
					
						tablepoints.beginPath();
						tablepoints.fillStyle = graphcolors[n];
						tablepoints.arc(10,10,8,0,2*Math.PI,true);
						tablepoints.stroke();
						tablepoints.fill();
			}
		}
};



function creatTableHTML(){
	
	num_color=0;		
	var table="";
	table+='<h3>Your mobile strategy aligns with the year '+resultValue.Overall+'</h3><table data-role="table" id="result-table" width="300" class="final-result">';
	for(tb in resultValue.parameters) {
	
	//table+='<h3>Test'+this.resultValue.parameters[tb].label+'</h3>';
	table+='<tbody><tr><th><canvas id="sign-'+num_color+'" width="20" height="20"></canvas></th><th>'+this.resultValue.parameters[tb].label+'</th><td>'+this.resultValue.parameters[tb].year+'</td></tr></tbody>'
	num_color++;	
	}
	table+='</table>';
	
	return table;
};



var x0=300/2, y0=300/2;
var X=130, Y=130;
	//var numSide=[];

			


//var graphcolors = ['rgba(0,155,40,0.7','rgba(155,30,0,0.7'];
	
function draw(graphid,graphcolor){
	if(!graphcolor) {
		//graphcolor='rgba(  255, 155, 0, 0.7)';
		graphcolor='rgba(  0, 205, 0, 0.5)';
		}
  var canvas = document.getElementById(graphid);
  if (canvas.getContext){
  
	var axSide = canvas.getContext('2d');
	var graph = canvas.getContext('2d');
	var person = canvas.getContext('2d');
	var points =  canvas.getContext('2d');
	
	graph.clearRect ( 0 , 0 , 300 , 300 );
	
	var xoutput = [];
	var youtput = [];
	
	var xperson = [];
	var yperson = [];
	var userData=allData[0];
	
	for (l= 0; l < 5 ; l++){
	
	for (i = 0; i < userData.length; i++) {
		xoutput.push([x0+(X*((l+1)*0.20))*(Math.sin(Math.PI/(userData.length)+2*i*Math.PI/(userData.length)))]);
		youtput.push([y0+(Y*((l+1)*0.20))*(Math.cos(Math.PI/(userData.length)+2*i*Math.PI/(userData.length)))]);
		if (l==4){
		captionPoints.push([[x0+(X*((l+1)*0.20))*(Math.sin(Math.PI/(userData.length)+2*i*Math.PI/(userData.length)))],[y0+(Y*((l+1)*0.20))*(Math.cos(Math.PI/(userData.length)+2*i*Math.PI/(userData.length)))]]);
		}
		}
		
		//graph.fillStyle=graphcolors[INDEX]
		
		graph.beginPath();
		
	    graph.strokeStyle = 'rgba(0,0,0,1)';
		graph.lineWidth = 1;
		
		graph.moveTo(xoutput[l*userData.length],youtput[l*userData.length]);
		
	       for(j=1; j<i; j++){
        graph.lineTo(xoutput[l*userData.length+j],youtput[l*userData.length+j]);
		
		        }
				graph.closePath();
				graph.stroke();
				
				}
				//graph.textAlign="start";
				//graph.strokeText("Test", xoutput[l*userData.length+j],youtput[l*userData.length+j]);
				
				//graph.textAlign="end";
				//graph.fillStyle = 'rgba(51, 167, 255,'+0.4+')';
				//graph.fillStyle = 'white';
				//graph.fill();
				
				
				axSide.beginPath();
				
				graph.lineWidth = 0.6;
				for (a=1; a<=userData.length; a++){
					axSide.moveTo(x0,y0);
					axSide.lineTo(xoutput[l*i-a],youtput[l*i-a]);
				}
				graph.strokeStyle = 'rgba(0,0,0,'+0.5+')';
				 axSide.stroke();
				 
		
				for (ex=0; ex<allData.length; ex++){
				//for (ex=0; ex<allData[sectionGraphKey].length; ex++){
				
			var userData = allData[ex];
			//var userData=allData[sectionGraphKey][ex]
	for (i = 0; i < userData.length; i++) {
	//P= prompt("Insert value of each side between 0 to 100:");
	xperson.push([x0+(X*userData/100)*(Math.sin(Math.PI/(userData.length)+2*i*Math.PI/(userData.length)))]);
	yperson.push([y0+(Y*userData/100)*(Math.cos(Math.PI/(userData.length)+2*i*Math.PI/(userData.length)))]);
	}
      var coordinates = coordinatesFromArray(userData);
  
		var rndColor=Math.random();
		person.fillStyle = graphcolor;
		
		//person.fillStyle = 'rgba('+ Math.floor(100-100*rndColor) + ',' + Math.floor(200-200*rndColor)+ ',' + Math.floor(100-100*rndColor) + ', 0.6)';
		person.beginPath();
		
		person.strokeStyle = 'rgba(  0, 0, 0, 0.7)';
		
		//person.strokeStyle = 'rgb(' + Math.floor(100-100*rndColor) + ',' + Math.floor(250-250*rndColor) + ',' + Math.floor(50-50*rndColor)+')';
		


//The word "Believe" will end at (100,20)
		  
		person.lineWidth = 1.5;
		person.moveTo(coordinates[0][0],coordinates[0][1]);
		
		//person.moveTo(xperson[0],yperson[0]);
		//for(k = 0; k < allData.length; k++) {
		
		
		for(j=1; j<i; j++){
		//graph.lineTo(xperson[j],yperson[j]);
		//graph.lineTo
		person.lineTo(coordinates[j][0],coordinates[j][1]);
		
		
				}
  				person.closePath();
				person.stroke();
				person.fill();
   	
  }
		for(num=0; num<userData.length; num++){
		points.beginPath();
		points.fillStyle = graphcolors[num];
		points.arc(coordinates[num][0],coordinates[num][1],5,0,2*Math.PI,true);
		points.stroke();
		points.fill();
		points.beginPath();
		points.arc(captionPoints[num][0],captionPoints[num][1],10,0,2*Math.PI,true);
		points.stroke();
		points.fill();
		}
		
		/*
        for (numpoint in captionPoints){
		points.beginPath();
		points.fillStyle = graphcolors[numpoint];
		points.arc(captionPoints[numpoint][0],captionPoints[numpoint][1],10,0,2*Math.PI,true);
		points.stroke();
		points.fill();
		}
		*/
  }
  }
  
  function coordinatesFromArray(userDataArray) {
	var outputArray = [];
	var numSides = userDataArray.length;
		for(i = 0; i < numSides; i++) {
		outputArray.push([x0+(X*userDataArray[i]/100)*(Math.sin(Math.PI/(numSides)+2*i*Math.PI/(numSides))),y0+(Y*userDataArray[i]/100)*(Math.cos(Math.PI/(numSides)+2*i*Math.PI/(numSides)))]);
		}
	return outputArray;
	}
function createGraphfromDatabase(compareObject) {
	var inputGraphDB;
	count=0;
	for(i in employerData.sections) {
		inputGraphDB = employerData.sections[i];
		allData = [createNormalizedArrayFromSection()[count],compareObject[i].parameters];
		draw(inputGraphDB.graphid);
		count++;
	}
};


	
	$(document).ready(function() {
		var questionkey;
		
		$("body").append(generatePagesonHTML());
		//$('.inner').append(generateIndustryRadioboxonHTML());
		
		
		
		
		
		$("input[type='checkbox']").bind( "change", function(event, ui) {
		if ($(this).attr('checked')){
		questionkey=questionData.Questions[$(this).attr("data-questionNumber")].Question+"-"+questionData.Questions[$(this).attr("data-questionNumber")].Answer[$(this).attr("data-questionChoice")].text;
		 resultsObject[questionkey]=questionData.Questions[$(this).attr("data-questionNumber")].Answer[$(this).attr("data-questionChoice")].value;
		}
		if (!$(this).attr('checked')){
		delete  resultsObject[questionkey];
		}
		
		});
		$("input[type='radio'].SINGLE").on( "change", function(event, ui) {
		
		questionkey=questionData.Questions[$(this).attr("data-questionNumber")].Question;
		
		resultsObject[questionkey]=questionData.Questions[$(this).attr("data-questionNumber")].Answer[$(this).attr("data-questionChoice")].value;
		
		
		});
		$("input[type='radio'].custom-1").on( "change", function(event, ui) {
		
		industryDataResult["industry_kind"]=industryData.Industry[$(this).attr("data-in-questionNumber")];
		
		
		});
		$("input[type='radio'].custom-2").on( "change", function(event, ui) {
		
		industryDataResult["employees_pop"]=industryData.Employees[$(this).attr("data-em-questionNumber")];
		
		});
		
		//$("#submit").click(function() {
			
			//industryDataResult["graph-result"]=resultValue;
			//console.log(industryDataResult);
		//});
		if ($("input[type='radio'].custom-1").attr('checked')){
		
		industryDataResult["industry_kind"]=$("input[type='radio'].custom-1").val();
		}
		if ($("input[type='radio'].custom-2").attr('checked')){
		
		industryDataResult["employees_pop"]=$("input[type='radio'].custom-2").val();
		}
		
	});
	
	
	//$(document).bind( "pagebeforechange", function( e, data ) {
		
	//});
	
	  $('#page-00').live('pageshow',function(event, ui){
         
            
		$( ".contact-detail" ).bind( "change", function(event, ui) {
	
		
		contactDetails["firstname"]= $('#f-name').val();
		contactDetails["lastname"]= $('#l-name').val();
		contactDetails["company"]= $('#comp-name').val();
		contactDetails["email"]= $('#e-mail').val();
		contactDetails["phone"]= $('#phone').val();
        //console.log($('#submit').val());
		 
        });
   
	 
		});
	

