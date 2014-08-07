window.onload = initForm;
window.onunload = function() {};

function initForm()
{
    for ( var i = 0 ; i < document.forms.length ; i ++ )
    {
        document.forms[i].onsubmit = validForm;
    }
}

function validForm()
{
    var allGood = true;
    var allTags = document.getElementsByTagName("*");
    
    for ( var i = 0 ; i < allTags.length ; i ++ )
    {
        if( !validTag(allTags[i]) )
        {
            allGood = false;
        }
    }
    return allGood;
    
    function validTag(thisTag)
    {
        var outClass = "";        
        var allClasses = thisTag.className.split(" ");
        
        for( var j = 0 ; j < allClasses.length ; j ++ )
        {
            outClass += validBaseOnClass(allClasses[j],thisTag)+" ";
        }
        thisTag.className = outClass;
        
        if (outClass.indexOf("invalid") > -1) {
			invalidLabel(thisTag.parentNode);
			thisTag.focus();
			if (thisTag.nodeName == "INPUT") {
				thisTag.select();
			}
			return false;
		}
        return true;
    }
    
    function validBaseOnClass(thisClass,thisTag)
    {
        var classBack = "";
        switch ( thisClass )
        {
        case "":
        case "invalid":
            break;
        case "reqd":
            if( allGood && thisTag.value == "" )
            {
                classBack = "invalid "
            }
            classBack += thisClass;
            break;
        default:
            if( allGood && !crossCheck(thisTag,thisClass) )
            {
                classBack = "invalid";
            }
            classBack += thisClass;
        }
        return classBack;
    }
    function crossCheck(inTag,otherFieldID)
    {
        if( document.getElementById(otherFieldID) )
            if( inTag.value==document.getElementById(otherFieldID).value )
                return true;
        return false;
    }
    		
	function invalidLabel(parentTag) {
        if (parentTag.nodeName == "LABEL") {
            parentTag.className += " invalid";
        }
	}
}
