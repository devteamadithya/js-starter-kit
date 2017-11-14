//importing chai for test
import { expect } from 'chai';
//describe gives the title of task
describe('Our first test', () => {
  it('should pass', () => {
    //expect gives the output we have and equal gives the desired output we should get.
    expect(true).to.equal(true);
  })
})
