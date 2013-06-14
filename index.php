<!DOCTYPE html>
<html> 
<head> 
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
		
	<title>Mobile Assessment Web</title> 
	
	
		<link rel="stylesheet" href="jquerymob/jquery.mobile-1.2.0.min.css" />
		<link type="text/css" href="style.css" rel="stylesheet" />
		<script src="jquery/jquery-1.8.3.js"></script>
		
		<script src="jquerymob/jquery.mobile-1.2.0.min.js"></script>
		<script src="questionData.js" type='text/javascript'></script>
		<script src="script.js" type='text/javascript'></script>
</head> 
<body> 

	<!-- Home Page -->
	<div data-role="page" id="page-0">
	
		<div data-role="header" data-theme="b" >
			<h1>About Your Company</h1>
		</div>
		<div data-role="content" class="inner">

		<div><b>Tell us a little about your company so we can choose an appropriate baseline when calculating your result.</b></div>
			<div id="Industry"><h2>Industry:</h2></div>
				
				<fieldset data-role="controlgroup"><input type="radio" name="radio-choice-1" id="radio-choice-1-0" value="Manufacturing" class="custom-1" checked="checked" data-in-questionNumber="0"><label for="radio-choice-1-0">Manufacturing</label><input type="radio" name="radio-choice-1" id="radio-choice-1-1" value="Marketing" class="custom-1" data-in-questionNumber="1"><label for="radio-choice-1-1">Marketing</label><input type="radio" name="radio-choice-1" id="radio-choice-1-2" value="Medical" class="custom-1" data-in-questionNumber="2"><label for="radio-choice-1-2">Medical</label><input type="radio" name="radio-choice-1" id="radio-choice-1-3" value="Science" class="custom-1" data-in-questionNumber="3"><label for="radio-choice-1-3">Science</label><input type="radio" name="radio-choice-1" id="radio-choice-1-4" value="Software" class="custom-1" data-in-questionNumber="4"><label for="radio-choice-1-4">Software</label></fieldset>
				
				<div id="Employees"><h2>Employees:</h2></div>
				<fieldset data-role="controlgroup"><input type="radio" name="radio-choice" id="radio-choice-0" value="0-10" class="custom-2" checked="checked" data-em-questionNumber="0"><label for="radio-choice-0">0-10</label><input type="radio" name="radio-choice" id="radio-choice-1" value="11-100" class="custom-2" data-em-questionNumber="1"><label for="radio-choice-1">11-100</label><input type="radio" name="radio-choice" id="radio-choice-2" value="101-1000" class="custom-2" data-em-questionNumber="2"><label for="radio-choice-2">101-1000</label><input type="radio" name="radio-choice" id="radio-choice-3" value="1001-10000" class="custom-2" data-em-questionNumber="3"><label for="radio-choice-3">1001-10000</label><input type="radio" name="radio-choice" id="radio-choice-4" value="10001-100000" class="custom-2" data-em-questionNumber="4"><label for="radio-choice-4">10001-100000</label></fieldset>
				
		</div>

		<div data-role="footer" data-theme="d">
			
			<a href="http://www.mentormate.com/" target="_blank" data-icon="info" data-role="button" class="info">More Information </a><a href="#page-1" data-transition="slide" data-role="button" class="next" data-icon="arrow-r"> Next</a>
			
			<div></div>
		</div>
	</div>

	<div data-role="page" id="page-00">

	<div data-role="header" data-theme="b"><a href="#page-0" data-role="button" data-icon="home" data-iconpos="notext">Home</a>
			<h1>Contact us</h1>
	</div><!-- /header -->

	<div data-role="content" class="inner">
		
			
			<!--<div style="width:20%; float:right;"><button type="submit" data-theme="d" id="submit-contact" class="ui-btn-hidden" aria-disabled="false"  data-mini="true">Submit</button></div>-->
		<div  class="email-result"></div>
		
		</div>	
		
			
	</div><!-- /content -->

	<div data-role="footer" data-theme="d">
			
			<a href="#page-27" data-transition="slide" data-role="button" class="back" data-icon="arrow-l" data-direction="reverse">Back</a><a href="http://www.mentormate.com/" target="_blank" data-icon="info" data-role="button" class="next">More Information </a>
		</div><!-- /footer -->
</div><!-- /page -->
	
	<!-- Result Page -->
	<div data-role="page" id="page-27">
		<div data-role="header" data-theme="b"><a href="#page-0" data-role="button" data-icon="home" data-iconpos="notext">Home</a>
			<h1>Result</h1>
		</div>
		<div data-role="content" class="inner">

		
			<div><h2>Mobile Strategy Graph</h2></div>
				
			
			<center><canvas id="result-graph" width="300" height="300"></canvas></center>	
			
		
		
		  <div id="assessment-result"></div>
		
		

		<div data-role="footer" data-theme="d" >
			
			<a href="#page-26" data-transition="slide" data-role="button" class="back" data-icon="arrow-l" data-direction="reverse">Back</a><a href="http://www.mentormate.com/" target="_blank" data-icon="info" data-role="button" class="next">More Information </a><a href="#page-00" data-transition="slide" data-role="button" class="next" onclick="$('.email-result').append(emailDetailClickedHTML())" data-icon="arrow-r">Next</a>
			
		</div>
	</div>
	
	<!-- Contact Page, $('.email-result').remove() -->
	
	
	

</body>
</html>
