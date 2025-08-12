const createDOMPurify = require('dompurify')
const { JSDOM } = require('jsdom')

const { window } = new JSDOM('')
const DOMPurify = createDOMPurify(window)

module.exports = (req, res, next) => {
  if (req.body) {
    for (const key in req.body) {
      if (typeof req.body[key] === 'string') {
        req.body[key] = DOMPurify.sanitize(req.body[key], { FORBID_TAGS: ['script', 'iframe'], FORBID_ATTR: ['on*'] })
      }
    }
  }
  next()
}