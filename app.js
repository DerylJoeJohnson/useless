var exp=require("express");
const app=exp();
var bodyparser=require('body-parser');
var barray=[
{
    title1:"War And Peace",
    genre:"Historical Fiction",
    author:"Lev Nicolayevich",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4UtJjBgHB2ZMgAKoGL-Z2XSHWL5OFWiyZ0vOKmzGDUI68SUKc",
},
{
    title1:"Wings of fire",
    genre:"Autobiography",
    author:"APJ ABDUL KALAM",
    img:"https://s3.india.com/wp-content/uploads/2015/10/0001.jpg",
},
{
    title1:"Ramayana",
    genre:"Religious",
    author:"VAlmiki",
    img:"https://www.haribhoomi.com/cms/gall_content/2018/10/maharishi-valmiki-katha_2018102312115607.jpg",
},
{
    title1:"Harry Potter",
    genre:"Fantasy Fiction ",
    author:"J K Rowling",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM_EHmQlzsOO3R9mR1V_5yRlTi6kuHjE5rDWJ8jnLCoj8rWZ5e",
}];
app.use(bodyparser.urlencoded({extended:true}));
const path=require('path');
var bookrouter=require("./routes/bookrouter")
//var emprouter=require("./routes/emp")
app.listen(3000,function(){
    console.log("Server thudangi makkale....")
});
app.get('/',function(req,res){
    //res.sendFile(__dirname+"/src/views/index.html")
    res.render('index',{pageTitle:"Library",nav:[{link:"/book",title:"Books"},{link:"/author",title:"AUTHOR"}]});
});
//app.get('/book',function(req,res){
  //  res.render('books',{pageTitle:"Library",nav:[{link:"/book",title:"Books"},{link:"/author",title:"AUTHOR"}],bk:barray});
//});
//app.get("/book/:id",function(req,res){
  //  var id=req.params.id
    //console.log(id)
    //console.log(barray[id].title1)

    
    //res.render("singlebook",{pageTitle:"Library",nav:[{link:"/book",title:"Books"},{link:"/author",title:"AUTHOR"}],bk:barray[id]});
//})

app.get('/author',function(req,res){
    //res.send("Higly Confidential")
    res.render('authors',{pageTitle:"Library",nav:[{link:"/book",title:"Books"},{link:"/author",title:"AUTHOR"}],bk:barray});
})
app.get('/author/:id',function(req,res){
    res.render('singleauthor',{pageTitle:"Library",nav:[{link:"/book",title:"Books"},{link:"/author",title:"AUTHOR"}],bk:barray[id]});
})
app.use(exp.static(path.join(__dirname,"/Public")));
app.set("view engine","ejs");
app.set("views","./src/views")
app.use("/book",bookrouter);
//app.use("/emp",emprouter);