const path = require('path');
const express = require("express");
const morgan = require("morgan");
const app = express();
var handlebars = require("express-handlebars");
const port = 3000;
app.use(morgan("combined"));
//template engine để cấu trúc code hợp lý
//chia file thành các view, file layout code áp dụng cho các trang web
//cấu trúc file thành mô hình mvc(model, view, controller)
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'))
app.get("/", (req, res) => {
    res.render('home');
});
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
