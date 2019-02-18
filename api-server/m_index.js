
const conn = require('./db')
function mgetindex(callback){
    conn.query('SELECT * FROM `todos`',(err,data)=>{
        if(err){
            callback(err)
            return
        }
        callback(null,data)
    })
}
function mdelbyid(req,callback){
    conn.query('DELETE FROM `todos` WHERE id=?',req.params.todoID,(err,data)=>{
        if(err){
            callback(err)
            return
        }
        callback(null,data)
    })
}
module.exports ={
    mgetindex,
    mdelbyid
}