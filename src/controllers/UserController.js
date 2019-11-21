const User = require('../models/User');
module.exports = {

    async store(req, res){

        const {name, email, password, loginType} = req.body;

        let user = await User.findOne({ email });

        if(!user){

            user = await User.create({ name, email, password, loginType });

        }else{

            res.send('Usuário já cadastrado');
        }

        return res.json({ user });

    },

    async index(req, res){
        
        let users = await User.find();

        return res.json({users});

    },
    async destroy(req, res){
        const { id } = req.headers;

        await User.findById(id).then(()=>{
            
            let user = await User.findOneAndDelete({ user: id });

            return res.json(user);
    
        }).catch(err=>{

            res.status(400);
            res.send(err);
        });

    },
    update(req, res){

    }
}
