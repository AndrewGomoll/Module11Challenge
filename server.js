const express = require('express');

const PORT = 4000 || process.env.PORT;

// const notesRouter = require('./public/notes');
// const indexRouter = require('./public/index');

const app = express();

const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("public"))

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, ()=>{console.log(`server running on ${PORT}`)})