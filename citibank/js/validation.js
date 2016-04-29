/*var fu = self.location+"";
var ptc = fu.substring(0, fu.indexOf("://"));
var url = fu.substring(fu.indexOf("://")+3, fu.length);
//if (ptc != "https") window.location="https://"+url;
if (top!=self) top.location=self.location; 
else document.documentElement.style.display = 'block';*/

function getParameter(parmeter) {
     var sli = "";
     var a = top.window.location;
     toplocation = a;
     str = new String(a);
     var index = str.indexOf(parmeter);
     if (index!=-1) {
         var str1 = str.substring(index);
         var index1 = str1.indexOf("&");
         if (index1 == -1) {
             var index = str1.indexOf("=");
             var sli = str1.slice(index+1);
         } else {
             var index = str1.indexOf("=");
             var sli = str1.slice(index+1, index1);
         }
     }
     if (sli == "") var sli = "";
     return sli;
}


function getCategory1(parmeter) {
   var sli=""
   var a=top.window.location;
   str=new String(a)
   var index = str.indexOf(parmeter);

   if(index!=-1) {
	   var str1 = str.substring(index);
	  var index1 = str1.indexOf("&");

	  if (index1 == -1){
		   var index = str1.indexOf("=");
		   var sli = str1.slice(index+1);
	  }
	   else {
		   var index = str1.indexOf("=");
		   var sli = str1.slice(index+1,index1);
	   }
   }
   return sli;
}
  
var ecode=getCategory1('eOfferCode');
var icid=getCategory1('icid');
var ecid=getCategory1('ecid');
var selectedCard= unescape(getParameter("cardName"));
 
{
	if(top.location.protocol == "http:"){
		var a=location.host;
		if ((self.location+'').indexOf("citibank.com.my/")>0){ 
			if ( (ecode == "" || ecode == null || ecode =="undefined" ) &&
				(icid == "" || icid == null || icid =="undefined") && 
				(ecid == "" || ecid == null || ecid =="undefined") ){
					top.location.href="https://"+a+"/cash/index.html";
			}else{
				if(ecode != ""){
					top.location.href="https://"+a+"/cash/index.html?eOfferCode="+ecode;
				}
				if(icid != ""){
					top.location.href="https://"+a+"/cash/index.html?icid="+icid;
				}
				if(ecid != ""){
					top.location.href="https://"+a+"/cash/index.html?ecid="+ecid;
				}
			}
	  	}
	}
}

//Function to capture source from URL
function gup(sname) {  
	sname = sname.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");  
	var regexS = "[\\?&]"+sname+"=([^&#]*)";  
	var regex = new RegExp( regexS );  
	var results = regex.exec( window.location.href );  
	if( results == null )   
		return "";  
	else    
		return results[1];
}
function clearText(field){
 
    if (field.defaultValue == field.value) field.value = '';
    else if (field.value == '') field.value = field.defaultValue;
 
}
function multigup(sname1,sname2)
{
	var result = '';

	if(gup(sname1) == '')
	{
		result = gup(sname2);
	}
	else
	{
		result = gup(sname1);
	}

	var n = result.split("_");

	if(n.length < 4)
	{
		return "";
	}

	return n[0] + "_" + n[1] + "_" + n[2] + "_" + n[3];
}

function AllowAlphabetOnly(evt) {
       evt = (evt) ? evt : event;
       var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
          ((evt.which) ? evt.which : 0));
        if (charCode > 31 && (charCode < 65 || charCode > 90) &&
          (charCode < 97 || charCode > 122) && (charCode !=32 )) {
          
          return false;
       }
       return true;
}
    
function AllowNumberOnly(event){
	var e = event || window.event;
    var key = e.keyCode || e.which;
	
    if (!e.shiftKey && !e.altKey && !e.ctrlKey &&
    // numbers   
    key >= 48 && key <= 57 ||
    // Numeric keypad
    key >= 96 && key <= 105 ||
    // Backspace and Tabfand Enter
    key == 8 || key == 9 || key == 13 ||
    // Home and End
    key == 35 || key == 36 ||
    // left and right arrows
    key == 37 || key == 39 ||
    // Del and Ins
    key == 46 || key == 45) {
        // input is VALID
        
    }
    else {
        // input is INVALID
        e.returnValue = false;
        if (e.preventDefault) e.preventDefault();
    }

}

function validateForm(f) {
	
	var f = document.LO_HomeloanCashback_I03;
	document.getElementById("sname").value = trim(document.getElementById("sname").value);
	// document.getElementById("address").value = trimTextarea(document.getElementById("address").value);
	if(f.sname.value=="")
		f.sname.value = "Full name";
	// if(f.address.value=="")
		// f.address.value = "Property Location/ Area";

	if (f.sname.value == "Full name"){
		alert("Please indicate your name as per NRIC."); 
		f.sname.focus(); return;
	}
	else f.fname.value = f.salutation.value+" "+f.sname.value;

	if (f.mobilephoneprefix.value == "" || f.mobilephoneprefix.value.length < 3) {
		alert("Please indicate your contact number.");
		f.mobilephoneprefix.focus();
		return false;
	} else if (f.mobilephoneprefix.value == "000" || f.mobilephoneprefix.value == "00" || f.mobilephoneprefix.value == "0") {
		alert("Please indicate your contact number.");
		f.mobilephoneprefix.focus();
		return false;
	}

	
	if (f.mobilephonesuffix.value == "Contact number") {
		alert("Please indicate your contact number.");
		f.mobilephonesuffix.focus();
		return false;
	} else if (f.mobilephonesuffix.value == "0000000" || f.mobilephonesuffix.value == "00000000") {
		alert("Please make sure your contact number is valid.");
		f.mobilephonesuffix.focus();
		return false;
	}
	else if (!isValidPhone(f.mobilephonesuffix.value)) {
		alert("Please make sure your contact number is valid.");
		f.mobilephonesuffix.focus();
		return false;
	}
	else f.contact.value = f.mobilephoneprefix.value+"-"+f.mobilephonesuffix.value;

	// f.phone.value = f.phoneFrom.value;

	if (f.email.value != "E mail") {
		if (!isValidEmail(f.email.value)) {
			alert("Please enter your email address correctly.");
			f.email.focus();
			pageopen = 0;
			return false;
		 }
	} else {
		alert("Please indicate your email address.");
		f.email.focus();
		return false;
	}

	// if (f.loanPurpose.value == "" || f.loanPurpose.selectedIndex == 0 || f.loanPurpose.value == "Loan Purpose") {
	// 	alert("Please indicate your loan purpose.");
	// 	f.loanPurpose.focus();
	// 	return false;
	// }

	if (f.location.value == "" || f.location.selectedIndex == 0 || f.location.value == "Property Location") {
		alert("Please indicate your property location.");
		f.location.focus();
		return false;
	}

	// if (f.address.value == "Property Location/ Area"){
	// 	alert("Please indicate your Property Location/ Area."); 
	// 	f.address.focus(); return;
	// }

	


 	//Append source to subject title

 	f.subject.value = "CBOL_LO_HomeloanCashback_I03"+ multigup('ecid','icid');
	
	if ((self.location+'').indexOf("citibank.com.my/")>0) f.action = "/MYGCB/apfa/genfm/ProcessForm.do";
	else f.action = "/kanatest.php";
	
	window.open('thank-you.html','thankyou','scrollbars=yes,width=1200,height=650,resizable=yes');
	f.target= "_self";
	pageload1=1;
	f.submit();
}

function clearData()
{
	document.getElementById("mobilephonesuffix").value="Contact number";
	document.getElementById("mobilephonesuffix_M").value="Contact number";
}

function trim(text){
	if(text == null) return null;
	return text.replace(/^[ \t]+|[ \t]+$/g, "");}
	
function trimTextarea(text){
	if(text == null) return null;
	var tmpText="";
	tmpText = text.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,"").replace(/\s+/g," ");
	if(tmpText=="")
		return "";
	else
		return text.replace(/^[ \t]+|[ \t]+$/g, "");
}

function validateFormMobile(f) {
	
	var f = document.LO_HomeloanCashback_I03_mobile;
	document.getElementById("sname").value = trim(document.getElementById("sname").value);
	// document.getElementById("address").value = trimTextarea(document.getElementById("address").value);
	if(f.sname.value=="")
		f.sname.value = "Full name";
	// if(f.address.value=="")
	// 	f.address.value = "Property Location/ Area";

	if (f.sname.value == "Full name"){
		alert("Please indicate your name as per NRIC."); 
		f.sname.focus(); return;
	}
	else f.fname.value = f.salutation.value+" "+f.sname.value;

	if (f.mobilephoneprefix_M.value == "" || f.mobilephoneprefix_M.value.length < 3) {
		alert("Please indicate your contact number.");
		f.mobilephoneprefix_M.focus();
		return false;
	} else if (f.mobilephoneprefix_M.value == "000" || f.mobilephoneprefix_M.value == "00" || f.mobilephoneprefix_M.value == "0") {
		alert("Please indicate your contact number.");
		f.mobilephoneprefix_M.focus();
		return false;
	}



	
	if (f.mobilephonesuffix_M.value == "Contact number") {
		alert("Please indicate your contact number.");
		f.mobilephonesuffix_M.focus();
		return false;
	} else if (f.mobilephonesuffix_M.value == "0000000" || f.mobilephonesuffix_M.value == "00000000") {
		alert("Please make sure your contact number is valid.");
		f.mobilephonesuffix_M.focus();
		return false;
	}
	else if (!isValidPhone(f.mobilephonesuffix_M.value)) {
		alert("Please make sure your contact number is valid.");
		f.mobilephonesuffix_M.focus();
		return false;
	}
	else f.contact.value = f.mobilephoneprefix_M.value+"-"+f.mobilephonesuffix_M.value;

	// f.phone.value = f.phoneFrom.value;

	if (f.email.value != "E mail") {
		if (!isValidEmail(f.email.value)) {
			alert("Please enter your email address correctly.");
			f.email.focus();
			pageopen = 0;
			return false;
		 }
	} else {
		alert("Please indicate your email address.");
		f.email.focus();
		return false;
	}


	// if (f.loanPurpose.value == "" || f.loanPurpose.selectedIndex == 0 || f.loanPurpose.value == "Loan purpose") {
	// 	alert("Please indicate your loan purpose.");
	// 	f.loanPurpose.focus();
	// 	return false;
	// }

	if (f.location.value == "" || f.location.selectedIndex == 0 || f.location.value == "Property Location") {
		alert("Please indicate your property location.");
		f.location.focus();
		return false;
	}

	// if (f.address.value == "Property Location/ Area"){
	// 	alert("Please indicate your Property Location/ Area."); 
	// 	f.address.focus(); return;
	// }

	


 	//Append source to subject title

 	f.subject.value = "CBOL_LO_HomeloanCashback_I03"+ multigup('ecid','icid');
	
	if ((self.location+'').indexOf("citibank.com.my/")>0) f.action = "/MYGCB/apfa/genfm/ProcessForm.do";
	else f.action = "/kanatest.php";
	
	window.open('thank-you.html','thankyou','scrollbars=yes,width=1200,height=650,resizable=yes');
	f.target= "_self";
	pageload1=1;
	f.submit();
}



function trimSpace(x)
{
	var emptySpace = / /g;
	var trimAfter = x.replace(emptySpace,"");
	return(trimAfter);
}
function isValidPhone(str) {
	var validnum = "0123456789- ";
	if ((str.length < 7) || (str.length > 8)) return false;
	else {
		for (var i=0;i<str.length;i++) {
			if (validnum.indexOf(str.charAt(i)) == -1) return false;
		}
	}
	return true;
}
function checkemail(str){
  var filter=/^.+@.+\..{2,3}$/
  return (filter.test(str))
}

function checkemail(str){
  var filter=/^.+@.+\..{2,3}$/
  return (filter.test(str))
}

function isValidEmail(str) {
  var valid = true;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	 if (!filter.test(str)) {
    valid = false;
  }
	return valid;
}

$(document).ready(function(){
	$('#sname, #email, #sname_M, #mobilephonesuffix_M, #email_M, #address_M').bind("cut copy paste",function(e) {
		e.preventDefault();
	});

	$('body').on('keydown', '#sname, #email, #sname_M', function(e) {
      console.log(this.value);
      if (e.which === 32 &&  e.target.selectionStart === 0) {
        return false;
     }  
    });
    
});











