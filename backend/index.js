const express = require('express')
const app =express()
var validate = require ('validator')
validate.isEmail('foo@bar.com'); //=> true
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.Promise = Promise
app.use(bodyParser.json())
const cor = require('cors')
app.use(cor());
mongoose.connect('mongodb://localhost:27017/users')
.then((err)=> console.log('Database connected!'));
const router = express.Router();
const User = require('./models/user');
app.post('/users/search', async(req, res) =>{
    const {id} = req.body
    console.log(req.body)
    const result = await User.findOne({id})
        console.log(result)
    if(result)
    {
        res.json(result);
    }
    else
    { console.log('errorrr');
        res.json(result)
    }
})

app.post('/users/update',async(req, res)=>{
    //console.log('heree')
    const {id, name, contact, email, datejoined} = req.body
    console.log(id)
    console.log(name)
    console.log(contact)
    console.log(email)
    console.log(datejoined)
    dateupdated = new Date()
    if(contact.length!=10)
    {
        res.json({retValue:'contact'})
        res.json({success:false});
    }
    if(!validate.isEmail(email))
    {
        console.log('please enter appropriate email id!')
        //window.alert('Please enter appropriate email id!')
        res.json({retValue:'email'})
        res.json({success:false});
    }
    else
    {
        const result = await User.update({id:id}, {$set:{"name":name,contact:contact,email:email, datejoined:datejoined, dateupdated:dateupdated}});
        console.log(result)
        if(result)
        {
            res.json({success:true})
        }
    }
    
})

app.post('/users/add', async(req, res) =>{
    count = await User.count();
    var regex = /^[a-zA-Z]+$/;
    console.log('Count has:',count);
    datejoined = new Date()
    dateupdated = new Date()
    id = count+1;
    const { name, contact, email} = req.body
    
    const user = new User({
        id, 
        name,
        contact,
        email,
        datejoined,
        dateupdated
    });
    if(regex.test(name)==false)
    {
        res.json({retValue:'name'})
        res.json({success:false});
        //console.log('Name must be in alphabets only')
    }
    if(user.contact.length!=10)
    {
        res.json({retValue:'contact'})
        res.json({success:false});
    }
    if(!validate.isEmail(email))
    {
        console.log('please enter appropriate email id!')
        //window.alert('Please enter appropriate email id!')
        res.json({retValue:'email'})
        res.json({success:false});
    }
    else
    {
        const result = await user.save()
        
        //console.log(count)
        //console.log(result);
        console.log('New record inserted');
        if(result)
        {
            //res.json()
            
            res.json({success:true, idcount:id})
        }
    }
       

    
})

app.listen(4000,()=>console.log('Server listening!'))