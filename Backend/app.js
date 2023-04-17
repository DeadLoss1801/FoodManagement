const express = require('express');
const app = express();

app.use(express.json());

const cors = require('cors');

app.use(
  cors({
    origin: "*",
  })
)



const itemsRouter = require('./routes/itemsRouter')
const userRouter = require('./routes/userRouter')
app.use('/items', itemsRouter);

app.use('/user', userRouter)




app.listen(8000, () => {
  console.log(`Listening to the port : 8000`);
})
