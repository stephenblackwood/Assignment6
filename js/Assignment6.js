function MenuSelect()

{
    if (document.getElementById("menu").value == "Add New Customer")
    {
        document.getElementById("sectiontop").style.visibility = "hidden";
        document.getElementById("section1").style.visibility = "visible";
        document.getElementById("section2").style.visibility = "hidden";
	document.getElementById("section3").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "Change Shipping Address")
    {
        document.getElementById("sectiontop").style.visibility = "visible";
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "visible";
	document.getElementById("section3").style.visibility = "hidden";
    }
    
    else if (document.getElementById("menu").value == "Delete Customer")
    {
        document.getElementById("sectiontop").style.visibility = "visible";
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
	document.getElementById("section3").style.visibility = "visible";
    }

    else
    {
        document.getElementById("sectiontop").style.visibility = "hidden";
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
	document.getElementById("section3").style.visibility = "hidden";
    }
}


//------------------------------------------------------------------------


function CreateCustomer()

    {
	var objRequest = new XMLHttpRequest();
	var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/CreateCustomer";
	
	
	//Collect Customer data from web page
	var customerID = document.getElementById("customerID").value;
	var customerName = document.getElementById("customerName").value;
	var customerCity = document.getElementById ("customerCity").value;
	
	
	//Create the Customer parameter string
	var newCustomer = '{"CustomerID":"' + customerID + '","CompanyName":"' + customerName + '","City":"' + customerCity + ' "}';
	
	
	//Checking for AJAx operation return
	objRequest.onreadystatechange = function()
	{
	    if (objRequest.readyState == 4 && objRequest.status == 200)
	    {
		var result = JSON.parse(objRequest.responseText);
		
		OperationResult(result);
	    }
	}
	
    //Start AJAX request

	objRequest.open("POST", url, true);
	objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	objRequest.send(newCustomer);
    }
    
function OperationResult(output)

    {
	if (output.WasSuccessful == 1)
	{
	    document.getElementById("result").innerHTML = "The operation was successful!"
	}
	else
	{
	    document.getElementById("result").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
	}
    }
 
// ----------------------------------------------------------------------------   
    
function ChangeShipAddress()

    {
	var objRequest = new XMLHttpRequest();
	var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/updateOrderAddress";
	
	
	//Collect Order data from web page
	var orderID = document.getElementById("orderID").value;
	var shipName = document.getElementById("shipName").value;
	var shipAddress = document.getElementById("shipAddress").value;
	var shipCity = document.getElementById ("shipCity").value;
	var shipPostcode = document.getElementById ("shipPostcode").value;
	
	
	//Create the  Order parameter string
	var newShip = '{"OrderID": '+ orderID +' ,"ShipName":"' + shipName + '","ShipAddress":"' + shipAddress + '","ShipCity":"' + shipCity + ' ","ShipPostcode":"' + shipPostcode + '"}';
	
	
	//Checking for AJAx operation return
	objRequest.onreadystatechange = function()
	{
	    if (objRequest.readyState == 4 && objRequest.status == 200)
	    {
		var result2 = JSON.parse(objRequest.responseText);
		
		OperationResult2(result);
	    }
	}
	
    //Start AJAX request

	objRequest.open("POST", url, true);
	objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	objRequest.send(newShip);
    }
    
 
function OperationResult2(output)

    {
	if (output.WasSuccessful == 1)
	{
	    document.getElementById("result2").innerHTML = "The operation was successful!"
	}
	else if (output.WasSuccessful == 0)
	{
	    document.getElementById("result2").innerHTML = "The operation failed with an unspecified error!"
	}
	else if (output.WasSuccessful == -2)
	{
	    document.getElementById("result2").innerHTML = "Operation failed because the data string supplied could not be deserialized into the service object";
	}
	else (output.WasSuccessful == -3)
	{
	    document.getElementById("result2").innerHTML = "Operation failed because a record with the supplied Order ID could not be found";
	}
    }   
    

// --------------------------------------------------------------------------------------

function DeleteCustomerID()

    {
	var objRequest = new XMLHttpRequest();
	var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/deleteCustomer/";
	url += document.getElementById("deleteCustomerID").value;
	
	//Collect Customer data from web page
	// var deleteCustomerID = document.getElementById("deleteCustomerID").value;
	
	//Create the Customer parameter string
	// var deleteCustomer = '{"CustomerID":"' + deleteCustomerID + '"}';
	
	
	//Checking for AJAx operation return
	objRequest.onreadystatechange = function()
	{
	    if (objRequest.readyState == 4 && objRequest.status == 200)
	    {
		var result3 = JSON.parse(objRequest.responseText);
		
		OperationResult3(result);
	    }
	}
	
    //Start AJAX request

	objRequest.open("GET", url, true);
	objRequest.send();
    }
  

function OperationResult3(output)

    {
	if (result.DeleteCustomerResult.WasSuccessful == 1)
	{
	    document.getElementById("result3").innerHTML = "The operation was successful!"
	}
	else
	{
	    document.getElementById("result3").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
	}
    }

