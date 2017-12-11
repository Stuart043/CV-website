document.onkeyup = KeyCheck;

	function KeyCheck(e)
		{
		   var KeyID = (window.event) ? event.keyCode : e.keyCode;

		   switch(KeyID)
		   {

   			case 97:
	     window.location = "about.html";
		      break;

					case 98:
					 window.location = "Work Rigin.html";
					 break;

					 case 99:
						 window.location = "Contact.html";
						 break;

		   }
		}


		function invert(){
		document.getElementById("bodycolour").style.filter="invert(100%)";
		document.getElementById("main colour").style.filter="invert(100%)";
		}


// I have no idea how to invert the colours!? So refresh page will have to do for now.
		function revert(){
		location.reload();
		}
