import chai from 'chai';
import Component from '../../src/core/component.js';

let expect = chai.expect;

describe('Component', () => {

  it('instantiates', () => {
    let component = new Component();
    expect(component).to.be.an.instanceof(Component);
  });

  it('uses events', () => {
    let subscriber = new Component();
    let publisher = new Component();
    let count = 0;
    subscriber.on('event', (data) => count = data.count);
    publisher.emit('event', {
      count: 1
    });
    expect(count).to.be.equal(1);
  })

});