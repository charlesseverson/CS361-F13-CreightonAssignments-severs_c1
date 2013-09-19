var lastX:float;
var isMoving:boolean = false;
var explosion:GameObject;

function Start()
	{
	animation.Stop();
	}

function Update () 
	{
	var halfW:float = Screen.width/2;
	transform.position.x = (Input.mousePosition.x)/20;
	if(lastX != transform.position.x)
		{
		if(!isMoving)
			{
			isMoving = true;
				if(!animation.IsPlaying("catch"))
					{
					animation.Play("step");
					}
			}
		}
	else
		{
		if(isMoving)
			{
			isMoving = false;
			if(!animation.IsPlaying("catch"))
					{
					animation.Play("idle");
					}
			}
		}		
	lastX = transform.position.x;	
	}
	
function OnCollisionEnter(col : Collision)
	{
	if(col.gameObject.tag == "bomb")
		{
		// I got hit by a bomb!
		Instantiate(explosion, col.gameObject.transform.position, Quaternion.identity);
		}
	else if (col.gameObject.tag == "stein")
		{
		animation.Play("catch");
		}
	col.gameObject.transform.position.y = 50;
	col.gameObject.transform.position.y = -16;
	col.gameObject.transform.position.y = Random.Range(0,60);
	}