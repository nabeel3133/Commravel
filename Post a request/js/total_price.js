function totalPrice()
{
	var quantity = document.getElementById("quantity").value;
	var price = document.getElementById("price").value;
	var total_price = quantity*price;
	document.getElementById("total_price").innerHTML = "Total Price: "+total_price+"$";	
}


function disable() 
{
	var dis1 = document.getElementById("quantity");
	var dis2 = document.getElementById("priceSection");
	
  if (dis1.value === "" || dis1.value == 0) 
  {
    dis2.style.display = "none";
  } 
else 
	{
    dis2.style.display = "block";
  }
}
