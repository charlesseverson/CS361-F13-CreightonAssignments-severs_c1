var clockIsPaused : boolean = false;
var startTime : float; // in seconds
var timeRemaining : float; // in seconds
var percent:float;

var clockFGMaxWidth:float; // the starting width of the foreground bar

var rightSide:Texture2D;
var leftSide:Texture2D;
var back:Texture2D;
var blocker:Texture2D;
var shiny:Texture2D;
var finished:Texture2D;

function Awake()
	{
	startTime = 10.0;
	}

function Update () 
{
	if(!clockIsPaused)
		{
			DoCountdown();
		}
}

function onGUI()
{
        var pieClockX:int = 125;
	    var pieClockY:int = 50;
	 
	    var pieClockW:int = 128; // clock width
	    var pieClockH:int = 128; // clock height
	 
	    var pieClockHalfW:int = pieClockW * 0.5; // half the clock width
	    var pieClockHalfH:int = pieClockH * 0.5; // half the clockheight

	    var isPastHalfway:boolean = percent < 50;
	    var clockRect:Rect = Rect(pieClockX, pieClockY, pieClockW, pieClockH);
	    var rot:float = (percent/100) * 360;
	    var centerPoint:Vector2 = Vector2(pieClockX + pieClockHalfW, pieClockY + pieClockHalfH);
	    var startMatrix:Matrix4x4 = GUI.matrix;

        GUI.DrawTexture(clockRect,back, ScaleMode.StretchToFill, true, 0);
        	if(isPastHalfway)
       		{
	         GUIUtility.RotateAroundPivot(-rot-180, centerPoint);
	         GUI.DrawTexture(clockRect, leftSide, ScaleMode.StretchToFill, true, 0);
	         GUI.matrix = startMatrix;
	         GUI.DrawTexture(clockRect, blocker, ScaleMode.StretchToFill, true, 0);
       		}
       		else
       		{
	         GUIUtility.RotateAroundPivot(-rot, centerPoint);
	         GUI.DrawTexture(clockRect, rightSide, ScaleMode.StretchToFill, true, 0);
	         GUI.matrix = startMatrix;
	         GUI.DrawTexture(clockRect, leftSide, ScaleMode.StretchToFill, true, 0);
	       }
        	
        if(percent < 0)
        	{
        	GUI.DrawTexture(clockRect, finished, ScaleMode.StretchToFill, true, 0);
        	}
        GUI.DrawTexture(clockRect,shiny, ScaleMode.StretchToFill, true, 0);
}

function DoCountdown()
	{
	timeRemaining = startTime - Time.time;
	percent = timeRemaining/startTime * 100;
	if (timeRemaining < 0)
		{
		timeRemaining = 0;
		clockIsPaused = true;
		TimeIsUp();
		}
	}
	
function PauseClock()
	{
        clockIsPaused = true;
	}
	
function UnPauseClock()
	{
	clockIsPaused = false;
	}

function ShowTime()
{
        var minutes : int;
        var seconds : int;
        var timeStr : String;
       
        minutes = timeRemaining/60;
        seconds = timeRemaining % 60;
        timeStr = minutes.ToString() + ":";
        timeStr += seconds.ToString("D2");
        guiText.text = timeStr; //display line to GUI
}

function TimeIsUp()
{
}