import { ethers } from 'hardhat'
import { expect } from 'chai'

describe('CircleBlue contract tests', () => {
  before(async function () {
    this.accounts = await ethers.getSigners()
    this.owner = this.accounts[0]
    this.user = this.accounts[1]
    this.factory = await ethers.getContractFactory('CircleBlue')
  })

  describe('Constructor', function () {
    it('should deploy the contract with the correct fields', async function () {
      const name = 'CircleBlue'
      const symbol = 'BLUE'
      const version = '1.0.0'
      const baseUri = 'https://circleblue.xyz/metadata/metadata.json'
      const contract = await this.factory.deploy(name, symbol, version, baseUri)
      expect(await contract.symbol()).to.equal(symbol)
      expect(await contract.version()).to.equal(version)
      expect(await contract.baseURI()).to.equal(baseUri)
    })
  })
})
