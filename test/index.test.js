import isDomNodeList from './index'

describe('isDomNodeList(target)', () => {
	it('should return true when passed a NodeList', () => {
		const result = isDomNodeList(document.querySelectorAll('script'))
		expect(result).to.be.true
	})

	it('should return false when passed an Array<Node>', () => {
		const elements = document.querySelectorAll('body')
		const result = isDomNodeList(Array.prototype.slice.call(elements))
		expect(result).to.be.false
	})

	it('should return false when passed an invalid target', () => {
		expect(isDomNodeList(null)).to.be.false
		expect(isDomNodeList()).to.be.false
		expect(isDomNodeList({})).to.be.false
		expect(isDomNodeList('!')).to.be.false
	})
})
