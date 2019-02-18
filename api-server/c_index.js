const m_index= require('./m_index')

var getindex = (req,res,next)=>{
    m_index.mgetindex(function(err,data){
        if(err){
            return res.send({
                code:500,
                message:err.message
            })
        }
        res.render('index.html',{
            data
        })
    })
 }
 var delbyid = (req,res,next)=>{
    m_index.mdelbyid(req,function(err,data){
        if(err){
            return res.send({
                code:500,
                message:err.message
            })
        }
        res.send({
        code:200,
        message:'成功'
        }
        )
    })
}


 module.exports = {
    getindex,
    delbyid
 }