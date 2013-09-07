var customSkin:GUISkin;
function OnGUI() 
	{
	GUI.skin = customSkin;
	var halfW : float = Screen.width/2;
	var halfH : float = Screen.height/2;
	if(GUI.Button(Rect(halfW,halfH,200,100),"Play Game"))
		{
		print("You clicked me!");
		}
	}