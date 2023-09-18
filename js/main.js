
var productNameinput=document.getElementById('productName')
var productcategoryinput=document.getElementById('productcategory')
var productpriceinput=document.getElementById('productprice')
var productdescriptioninput=document.getElementById('productdescription')

var productcontainer=[]

if(localStorage.getItem('products')!=null){
    productcontainer=JSON.parse(localStorage.getItem('products'))//step 2
}

function addProduct(){
    var productopject = {
        name :productNameinput.value,
        category :productcategoryinput.value,
        price :productpriceinput.value,
        description :productdescriptioninput.value,
    }
    productcontainer.push(productopject)
    localStorage.setItem('products',JSON.stringify(productcontainer))//step 1
    // console.log(productcontainer);
    addbody()
    clearProduct()
}


function addbody(){
var cartona=``
    for(var i = 0;i<productcontainer.length;i++){
        cartona+=`<tr>
        <td>${i}</td>
        <td>${productcontainer[i].name}</td>
        <td>${productcontainer[i].category}</td>
        <td>${productcontainer[i].price}</td>
        <td>${productcontainer[i].description}</td>
        <td><butten onclick="DeleteProduct(${i})" class="btn btn-danger btn-sm">Delete</butten></td>
        <td><butten class="btn btn-success btn-sm">Update</butten></td>
    </tr>`
    }
    document.getElementById('tbody').innerHTML=cartona
}
addbody()//step3
// localStorage.clear()

function clearProduct(){
    productNameinput.value="";
    productcategoryinput.value="";
    productpriceinput.value="";
    productdescriptioninput.value="";
}

function DeleteProduct(Index){
    productcontainer.splice(Index ,1)
    localStorage.setItem('products',JSON.stringify(productcontainer))
    addbody()
}

function search(){
    var searchinput=document.getElementById('search').value
    var box=``
    for(var i = 0;i<productcontainer.length;i++){
        if(productcontainer[i].name.toLowerCase().includes(searchinput.toLowerCase())){
            box+=`<tr>
            <td>${i}</td>
            <td>${productcontainer[i].name.replace(searchinput,'<span>'+searchinput+'</span>')}</td>
            <td>${productcontainer[i].category}</td>
            <td>${productcontainer[i].price}</td>
            <td>${productcontainer[i].description}</td>
            <td><butten onclick="DeleteProduct(${i})" class="btn btn-danger btn-sm">Delete</butten></td>
            <td><butten class="btn btn-success btn-sm">Update</butten></td>
        </tr>`
        }
    }
    document.getElementById('tbody').innerHTML=box
}
// localStorage.clear()


// localStorage.setItem("myname","Ahmed")
// localStorage.setItem("myname1","Ali")
// localStorage.removeItem("myname1")
// var x=localStorage.getItem("myname")
// console.log(x)
// localStorage.clear()













