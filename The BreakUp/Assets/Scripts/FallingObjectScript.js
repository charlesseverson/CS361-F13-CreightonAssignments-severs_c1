var speed:int;

var prefab:GameObject;
var audioClips : AudioClip[];

function Update () 
	{
	transform.position.y -= speed * Time.deltaTime;
	if(transform.position.y < 0)
		{
		audio.PlayOneShot(audioClips[Random.Range(0,audioClips.length)]);
		Instantiate(prefab, transform.position, Quaternion.identity);
		transform.position.y = 50;
		transform.position.x = Random.Range(0,60);
		transform.position.z = -16;
		}
	}