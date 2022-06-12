const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
const { engine } = require("express-handlebars");
const port = 3000;
const route = require('./routes');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
//XMLHttlRequest, fetch, axios, để gửi yêu cầu lên server
// http logger
app.use(morgan("combined"));
//template engine để cấu trúc code hợp lý
//chia file thành các view, file layout code áp dụng cho các trang web
//cấu trúc file thành mô hình mvc(model, view, controller)
app.engine("hbs", engine({
  extname: '.hbs'
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
//HOme, search, contact không biết nên đưa vào controller nào cách giải quyết đưa vào 1 file
route(app);
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
