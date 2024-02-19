var vis = false; 
function showOrHideEmail(){
	if (vis){
      	document.getElementById('email').innerHTML=" Show my Email";
      	vis=false; 
      }
      else{
      	var myEmail="<a href='mailto:gummadvy" +"@"+
		
		"mail.uc.edu'>gummadvy"+"@"+"mail.uc.edu</a>"; 								
		document.getElementById('email').innerHTML=myEmail; 
        vis = true;
    }
	}