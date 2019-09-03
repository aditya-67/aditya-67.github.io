using UnityEngine;
using System.Collections;

public class Stack : MonoBehaviour {

    private GameObject[] theStack;

    private const float BOUNDS_SIZE = 3.5f;
    private float combo = 0;
    private const float STACK_SPEED = 5.0f;

    private const float ERROR_MARGIN = 0.1f;
    private Vector2 stackBounds = new Vector2(BOUNDS_SIZE, BOUNDS_SIZE);

    private int scoreCount = 0;

    private int stackIndex;

    private float tileTransition = 0.0f;

    private Vector3 desiredPosition;
    private Vector3 lastTilePosition;

    private float tileSpeed = 1.5f;
    private float secondaryPosition;
    private bool isMovinginX = true;

	// Use this for initialization
	private void Start () {
        theStack = new GameObject[transform.childCount];
        for (int i=0;i <= transform.childCount;i++)
            theStack [i] = transform.GetChild (i).gameObject;
        stackIndex = transform.childCount - 1;
	
	}
	
	// Update is called once per frame
	private void Update ()
    {
        
        if (Input.GetMouseButtonDown(0))
        {
            if (PlaceTile())
            {
                SpawnTile();
                scoreCount++;
            }
            else
            {
                EndGame();
            }
   
        }
        MoveTile();
        // move the stack
        transform.position = Vector3.Lerp(transform.position, desiredPosition, STACK_SPEED * Time.deltaTime);


    }
    private void MoveTile()
    {
        tileTransition += Time.deltaTime * tileSpeed;
        if(isMovinginX)
            theStack[stackIndex].transform.localPosition = new Vector3(Mathf.Sin(tileTransition)* BOUNDS_SIZE, scoreCount, secondaryPosition);
        else
            theStack[stackIndex].transform.localPosition = new Vector3(secondaryPosition, scoreCount, Mathf.Sin(tileTransition) * BOUNDS_SIZE);


    }
    private void SpawnTile ()
    {
        lastTilePosition = theStack[stackIndex].transform.localPosition;
        stackIndex--;
        if (stackIndex < 0)
            stackIndex = transform.childCount - 1;
        desiredPosition = (Vector3.down)* scoreCount;
        theStack[stackIndex].transform.localPosition = new Vector3(0, scoreCount, 0);
    }
    private bool PlaceTile ()
    {
        Transform t = theStack[stackIndex].transform;
        if (isMovinginX)
        {
            float deltaX = lastTilePosition.x - t.position.x;
            if (Mathf.Abs(deltaX) > ERROR_MARGIN)
            {
                // CUT THE TILE
                combo = 0;
                stackBounds.x -= Mathf.Abs(deltaX);
                //if (stackBounds.x <= 0)
                  //  return false;
                float middle = lastTilePosition.x + t.localPosition.x / 2;
                t.localScale = new Vector3(stackBounds.x, 1, stackBounds.y);
                t.localPosition = new Vector3(middle - (lastTilePosition.x / 2), 0, lastTilePosition.z);

            }
        }

        else
        {
            float deltaZ = lastTilePosition.z - t.position.z;
            if (Mathf.Abs(deltaZ) > ERROR_MARGIN)
            {
                // CUT THE TILE
                combo = 0;
                stackBounds.y -= Mathf.Abs(deltaZ);
                //if (stackBounds.y <= 0)
                  //  return false;
                float middle = lastTilePosition.z + t.localPosition.z / 2;
                t.localScale = new Vector3(stackBounds.x, 1, stackBounds.y);
                t.localPosition = new Vector3(lastTilePosition.x, 1, middle - (lastTilePosition.z / 2));

            }
        }
        secondaryPosition = (isMovinginX)
            ? t.localPosition.x
            : t.localPosition.z;
        isMovinginX = !isMovinginX;
        return true;
    }
    private void EndGame()
    { }
}