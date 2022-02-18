const server = require('./src/app.js');
const { conn } = require('./src/db.js');

conn.sync({ force: true }).then(() => {
  try{
    server.listen(3002, async() => {
      console.log('%s listening at 3002');
    });
  }catch(err){
    console.log(err);
  }
});
