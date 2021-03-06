const router = require('koa-router')()
const { User } = require('../config/model')

router.get('/list', async (ctx, next) => {
  const user = await User.find({username: "xians1"})
  ctx.body = user
})

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
