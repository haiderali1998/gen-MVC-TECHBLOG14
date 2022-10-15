const router = require('express').Router();
const { Post } = require('../models/');
const withAuth = require('../utils/auth');

// router.get('/', withAuth, async (req, res) => {
//   try {
//     const postData = await Post.findAll({
//       where: {
//         userId: req.session.userId,
//       },
//     });

//     const posts = postData.map((post) => post.get({ plain: true }));

//     res.render('all-posts-admin', {
//       layout: 'dashboard',
//       posts,
//     });
//   } catch (err) {
//     res.redirect('login');
//   }
// });

router.get('/', withAuth, async (req, res) => {
    try {
      const postData = await Post.findAll({
        where: {
          id: req.session.user_id,  // ==> should be id: req.session.user_id,
        },
      });
  
      const posts = postData.map((post) => post.get({ plain: true }));
  
      // you don't have a template called all-posts-admin, so this will fail
      // you could choose to just render the dashboard like: res.render('dashboard', {posts})
      res.render('create-post', {
        layout: 'dashboard',
        posts,
      });
    } catch (err) {
      res.redirect('login');
    }
  });

router.get('/new', withAuth, (req, res) => {
  res.render('new-post', {
    layout: 'dashboard',
  });
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });

      res.render('edit-post', {
        layout: 'dashboard',
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});


module.exports = router;
