const express=require('express');
var bodyParser = require('body-parser')
const mongoose= require('mongoose');
const cors=require('cors');
const path=require('path');
const foodRouter=require(path.join(__dirname,'./app/routes/foodRoutes'));
const authRouter=require(path.join(__dirname,'./app/routes/authRoutes'));

const app=express();



mongoose.connect(process.env.MONGODBURL || 'mongodb://127.0.0.1:27017/foodDB');


var db=mongoose.connection;

db.on('error',()=>{
    console.log("DB unable to connect")
});

db.on('open',()=>{
    console.log("connection successful")
})


// // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(foodRouter);
app.use(authRouter);

//cors
app.use(cors({
    origin:'*'
}));


app.listen( process.env.port || 3000,()=>{
    console.log(`web server is running at port ${process.env.port || 3000} `);
});

/*var bookSchema=new mongoose.Schema({name:String,price:Number});

const Book=mongoose.model('Book',bookSchema);

var book1=new Book({name:"JS",price:1000});
var book2=new Book({name:"Node",price:5000});

book1.save().then((book)=>{
console.log(book)
}).catch(()=>{
    console.log("Error while Saving");
})

book2.save().then((book)=>{
    console.log(book)
    }).catch(()=>{
        console.log("Error while Saving");
    })

//API to get all the books

router.get('/books',(req,res)=>{
    Book.find({}).then((books)=>{
        res.send(books);
    })
    .catch((err)=>{
        res.send(err);
    })
})


//API to save a doc

router.post('/book',(req,res)=>{
    const {name,price}=req.body;
    const book1=new Book({name:name,price:price});

    res.send("book saved");
})


*/

/*mongoose.connect('mongodb://localhost:27017/TestDB');
var db=mongoose.connection;

db.on('error',()=>{
    console.log('DB Unable to connect')
})


db.on('open',()=>{
    console.log("Connected to Db")
})

*/

/*
var bookSchema=mongoose.Schema({
    name:String,
    price:Number,
    quantity:Number
})

var Book=mongoose.model('Book',bookSchema,'bookStore')

var book1=new Book({id:10,name:"JS",price:40,quantity:50})
var book2=new Book({id:11,name:"NodeJS",price:50,quantity:3})

//Creation
book1.save().then(()=>{
    console.log("Book Saved")
})
.catch(()=>{
console.log("Some Error Occured")
})
//Reading
Book.find({name:"JS"}).then((books)=>{
    console.log(books)
}).catch((err)=>{
    console.log(err)
})
//Update
Book.updateOne({id:10},{price:10}).then(()=>{
    console.log("Updated Db")
}).catch(()=>{
    console.log("error")
})


//API to get all the books
router.get('/books',(req,res)=>{
Book.find({}).then((books)=>{
    res.send(books)
}).catch(()=>{
    res.status(400).send({message:"Something Went Wrong"})
})
})

//API for creating a new book
router.post('/book',(req,res)=>{
    const {name,price,quantity}=req.body;

    const book1=new Book({name:name,price:price,quantity:quantity});
    book1.save().then((book)=>{
        res.status(200).send(book)
    }).catch((err)=>{
    res.status(400).send(err);
    })
})

//Reading a single book with given id
router.get('/book/:id',(req,res)=>{
    console.log(req.params.id);
    Book.findOne({id:id}).then((book)=>{
          res.status(200).send(book)
    }).catch((err)=>{
        res.send(err);
    })

})

//


const DB=[{userName:"Mayank123",password:"hodalmay"}]

//MiddleWare
const myLogger=(req,res,next)=>{
    req.requestTime=Date.now();
    next();
}

app.use(myLogger);

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



router.get('/',(req,res)=>{
    console.log(req.body);
    res.send("Hello");
})


router.get('/home',(req,res)=>{
    res.send(`request at home logged at ${req.requestTime}`);
})

router.get('/profile',(req,res)=>{

    //Check whether the request contains the token or not
 // If present token is compared from the db
 //If present, the correct user is logged in
    res.send("hello from profile section");
})

router.post('/login',(req,res)=>{
    
    const {userName,password}=req.body;
    //UserName is correct or not
    
    const isUserName=DB.find((user)=>user.userName===userName)

    if(isUserName){
        
       //Convert the password to a hash value check it in database 
       const isCorrectPass=isUserName.password==password;

       if(isCorrectPass){

        //A token is generated
        //token is stored in the DB
        //Token is sent as a response back to the user.
        res.send({"token":"sjsxnxs"});
       }else{
        res.status(400).send("Incorrect Password");
       }

    }else{
        res.status(400).send("UserName is Incorrect");
    }

})

router.post('/register',(req,res)=>{
    const{userName,password,Name,Email}=req.body;

    //store all things in DB except password
     //Generate a hash value for the password
     //Hash value is store in the DB
})

router.get('/logout',(req,res)=>{
    //Manually remove the token from Db corresponding to the user
    res.send("hello from logout section");
})

app.use('/',router);
*/



