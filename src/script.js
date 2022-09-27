disp_arr =[];
function addProd(){
    var pid = document.getElementById("prod_id").value;

    var pname = document.getElementById("prod_name").value;

    var pprice = document.getElementById("prod_price").value;

    var cart ={product_id:pid ,product_name:pname ,product_price:pprice} ;

    console.log("HI");
    disp_arr.push(cart);
  s="<tr><th>Product Id</th>        <th>Product Name</th>        <th>Product Price</th></tr>";

  s= disp_arr.forEach( value => {
    s+="<tr><td>" + value.product_id +"</td>" + "<td>" + value.product_name + "</td>"+"<td>"+value.product_price+"</td></tr>";
    document.getElementById("table1").innerHTML=s;
  })
}