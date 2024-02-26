

class NewsController {
    index(req, res){
        res.render('news');
    };

    show(req, res){
        res.send('New DETAIL!');
    }
}

module.exports = new NewsController;
