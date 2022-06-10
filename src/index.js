const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
const { engine } = require("express-handlebars");
const port = 3000;
app.use(express.static(path.join(__dirname, 'public')))
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
app.get("/", (req, res) => {
  res.render("home");
});
app.get('/news', (req, res) => {
    res.render('news')
});
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
