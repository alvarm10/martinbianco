var startDate=new Date().getTime();
var exitPageStatus;

function loadPage()
{
   var result = doLMSInitialize();

   var status = doLMSGetValue( "cmi.core.lesson_status" );
   if (status == "not attempted")
   {
	  // the student is now attempting the lesson
	  doLMSSetValue( "cmi.core.lesson_status", "incomplete" );
   }

   exitPageStatus = false;
   startTimer();
}

function loadPagetest()
{
   var result = doLMSInitialize();

   var status = doLMSGetValue( "cmi.core.lesson_status" );
var intento = doLMSGetValue( "cmi.suspend_data");

   if (status == "not attempted")
   {
	  // the student is now attempting the lesson
	  doLMSSetValue( "cmi.core.lesson_status", "incomplete" );
   }

   exitPageStatus = false;
   startTimer();
inicio(intento);
}

function startTimer()
{
   startDate = new Date().getTime();
}

function computeTime()
{
   if ( startDate != 0 )
   {
      var currentDate = new Date().getTime();
      var elapsedSeconds = ( (currentDate - startDate) / 1000 );
      var formattedTime = convertTotalSeconds( elapsedSeconds );
   }
   else
   {
      formattedTime = "00:00:00.0";
   }

   doLMSSetValue( "cmi.core.session_time", formattedTime );
}

function doBack()
{
   doLMSSetValue( "cmi.core.exit", "" );

   computeTime();
   exitPageStatus = true;
   
   var result;

   result = doLMSCommit();
 
   result = doLMSFinish();

}

function doContinue( status )
{
   // Reinitialize Exit to blank
   doLMSSetValue( "cmi.core.exit", "" );

   var mode = doLMSGetValue( "cmi.core.lesson_mode" );

   if ( mode != "review"  &&  mode != "browse" )
   { 
      doLMSSetValue( "cmi.core.lesson_status", status );
   }
 
   computeTime();
   exitPageStatus = true;
   
   var result;
   result = doLMSCommit();

   result = doLMSFinish();
}

function doQuit()
{
   doLMSSetValue( "cmi.core.exit", "" );

   computeTime();
   exitPageStatus = true;
   
   var result;

   result = doLMSCommit();
   doAlert(result);
	// NOTE: LMSFinish will unload the current SCO.  All processing
	//       relative to the current page must be performed prior
	//		 to calling LMSFinish.   

   result = doLMSFinish();
   doAlert(result);
}
function unloadPage()
{
	if (exitPageStatus != true)
	{
		//doLMSSetValue( "cmi.core.lesson_status", "completed" );
		doQuit();
	}
}
//function to unloadpage from the test section
function unloadPagetest()
{
	if (exitPageStatus != true)
	{		
		doQuit();
	}
}
function convertTotalSeconds(ts)
{
   var sec = (ts % 60);

   ts -= sec;
   var tmp = (ts % 3600);  //# of seconds in the total # of minutes
   ts -= tmp;              //# of seconds in the total # of hours

   // convert seconds to conform to CMITimespan type (e.g. SS.00)
   sec = Math.round(sec*100)/100;
   
   var strSec = new String(sec);
   var strWholeSec = strSec;
   var strFractionSec = "";

   if (strSec.indexOf(".") != -1)
   {
      strWholeSec =  strSec.substring(0, strSec.indexOf("."));
      strFractionSec = strSec.substring(strSec.indexOf(".")+1, strSec.length);
   }
   
   if (strWholeSec.length < 2)
   {
      strWholeSec = "0" + strWholeSec;
   }
   strSec = strWholeSec;
   
   if (strFractionSec.length)
   {
      strSec = strSec+ "." + strFractionSec;
   }


   if ((ts % 3600) != 0 )
      var hour = 0;
   else var hour = (ts / 3600);
   if ( (tmp % 60) != 0 )
      var min = 0;
   else var min = (tmp / 60);

   if ((new String(hour)).length < 2)
      hour = "0"+hour;
   if ((new String(min)).length < 2)
      min = "0"+min;

   var rtnVal = hour+":"+min+":"+strSec;

   return rtnVal;
}

function goBack() {
doLMSSetValue('nav.event','previous');
var coreSCOLocation = doLMSGetValue("cmi.core.lesson_location");
window.location = coreSCOLocation;
}

function goForward() {
doLMSSetValue('nav.event','continue');
var coreSCOLocation = doLMSGetValue("cmi.core.lesson_location");
window.location = coreSCOLocation;
}

