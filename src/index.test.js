//importing chai for test
import { expect } from 'chai';
//DOM testing for that we need jsDOM and fs means filesystem to travel our folder.
import jsdom from 'jsdom';
import fs from 'fs';

//describe gives the title of task
describe('Our first test', () => {
  it('should pass', () => {
    //expect gives the output we have and equal gives the desired output we should get.
    expect(true).to.equal(true);
  })
})

//finding express running fine! is available or not in the window(browser).
describe('index.html',()=>{
  it('should have express',(done)=>{
    const file = fs.readFileSync('./src/index.html',"utf-8");
    jsdom.env(file,function(err,window){
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Express running fine!");
      done();
      window.close();
    });
  })
})

