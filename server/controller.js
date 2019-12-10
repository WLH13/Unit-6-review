module.exports = {
  getPosts: (req, res) => {
      const {id} = req.params;
      const db = req.app.get('db');
      db.get_posts(id).then(posts => {
          res.status(200).send(posts)
      })
      .catch(err => res.status(500).send(err))
  }  
}