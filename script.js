let randomNumber = Math.floor(Math.random()* 1000);

function gusessNumbber() {
    let guessNumb = document.querySelector('input').value;
    // count value
    document.getElementById('count').innerHTML =
    document.getElementById("user_input").value;
    // list
   
    // list
    if (randomNumber == guessNumb) {
        alert("congratulation you are win")
    } else {
        if (randomNumber > guessNumb) {
            alert("too small");
        } else if(randomNumber < guessNumb){
            alert("too big");
        }
        
    }
}
function checkRefresh()
{
	if( document.refreshForm.visited.value == "" )
	{
		// This is a fresh page load
		document.refreshForm.visited.value = "1";

		// You may want to add code here special for
		// fresh page loads
	}
	else
	{
		// This is a page refresh

		// Insert code here representing what to do on
		// a refresh
	}
}


