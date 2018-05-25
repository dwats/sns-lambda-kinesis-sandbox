const chai = require('chai')
const { handler } = require('../handler')

chai.should()

describe('handler.js', () => {
  describe('handler()', () => {
    it('should be a function', () => {
      handler.should.be.a('function')
    })
    it('should return a string', () => {
      handler().should.equal('done')
    })
  })
})
