import {stub, extend} from 'supertape';
import * as operator from './stub.js';

const test = extend(operator);

test('supertape: operator: stub: not called', (t) => {
    const fn = stub();
    
    t.notCalled(fn);
    t.end();
});

test('supertape: operator: stub: not called: not stub', (t) => {
    const fn = () => {};
    const fail = stub();
    
    const notCalled = operator.notCalled({
        fail,
    });
    
    notCalled(fn);
    
    t.calledWith(fail, [`Expected stub, but received ${fn.toString()}`]);
    t.end();
});

test('supertape: operator: stub: called', (t) => {
    const fn = stub();
    const fail = stub();
    
    const called = operator.called({
        fail,
    });
    
    called(fn);
    
    t.calledWith(fail, [`'t.called' is to general, looks like you need 't.calledWith' or 't.calledWithNoArgs'`]);
    t.end();
});

test('supertape: operator: stub: called: not stub', (t) => {
    const fn = () => {};
    const fail = stub();
    
    const called = operator.called({
        fail,
    });
    
    called(fn);
    
    t.calledWith(fail, [`Expected stub, but received ${fn.toString()}`]);
    t.end();
});

test('supertape: operator: stub: called with', (t) => {
    const fn = stub();
    
    fn('hello');
    
    t.calledWith(fn, ['hello']);
    t.end();
});

test('supertape: operator: stub: calledWith: not stub', (t) => {
    const fn = () => {};
    const fail = stub();
    
    const calledWith = operator.calledWith({
        fail,
    });
    
    calledWith(fn, []);
    
    t.calledWith(fail, [`Expected stub, but received ${fn.toString()}`]);
    t.end();
});

test('supertape: operator: stub: called count', (t) => {
    const fn = stub();
    
    fn();
    fn();
    
    t.calledCount(fn, 2);
    t.end();
});

test('supertape: operator: stub: calledCount: not stub', (t) => {
    const fn = () => {};
    const fail = stub();
    
    const calledCount = operator.calledCount({
        fail,
    });
    
    calledCount(fn, 1);
    
    t.calledWith(fail, [`Expected stub, but received ${fn.toString()}`]);
    t.end();
});

test('supertape: operator: stub: called once', (t) => {
    const fn = stub();
    
    fn('hello');
    
    t.calledOnce(fn);
    t.end();
});

test('supertape: operator: stub: calledOnce: not stub', (t) => {
    const fn = () => {};
    const fail = stub();
    
    const calledOnce = operator.calledOnce({
        fail,
    });
    
    calledOnce(fn);
    
    t.calledWith(fail, [`Expected stub, but received ${fn.toString()}`]);
    t.end();
});

test('supertape: operator: stub: called twice', (t) => {
    const fn = stub();
    
    fn('hello');
    fn('world');
    
    t.calledTwice(fn);
    t.end();
});

test('supertape: operator: stub: called with new', (t) => {
    const fn = stub();
    
    new fn();
    
    t.calledWithNew(fn);
    t.end();
});

test('supertape: operator: stub: calledWith: last', (t) => {
    const fn = stub();
    
    fn('hello');
    fn('world');
    
    t.calledWith(fn, ['world']);
    t.end();
});

test('supertape: operator: stub: calledWith called with no args', (t) => {
    const fn = stub();
    const fail = stub();
    
    const calledWith = operator.calledWith({
        fail,
    });
    
    fn();
    calledWith(fn);
    
    t.calledWith(fail, [`You haven't provided 'arguments', looks like you need 't.calledWithNoArgs()'`]);
    t.end();
});

test('supertape: operator: stub: calledWith: not called', (t) => {
    const fn = stub();
    const fail = stub();
    
    const calledWith = operator.calledWith({
        fail,
    });
    
    calledWith(fn, [1, 2]);
    
    t.calledWith(fail, [`Expected function to be called with arguments '[1,2]', but not called at all`]);
    t.end();
});

test('supertape: operator: stub: calledWithNoArgs', (t) => {
    const fn = stub();
    const fail = stub();
    
    const calledWithNoArgs = operator.calledWithNoArgs({
        fail,
    });
    
    calledWithNoArgs(fn);
    
    t.calledWith(fail, [`Expected function to be called with no arguments, but not called at all`]);
    t.end();
});

test('supertape: operator: stub: calledWithNoArgs', (t) => {
    const fn = stub();
    
    fn();
    
    t.calledWithNoArgs(fn);
    t.end();
});

test('supertape: operator: stub: calledWithNoArgs: not stub', (t) => {
    const fn = () => {};
    const fail = stub();
    
    const calledWithNoArgs = operator.calledWithNoArgs({
        fail,
    });
    
    calledWithNoArgs(fn);
    
    t.calledWith(fail, [`Expected stub, but received ${fn.toString()}`]);
    t.end();
});

test('supertape: operator: stub: calledWithNew: not stub', (t) => {
    const fn = () => {};
    const fail = stub();
    
    const calledWithNew = operator.calledWithNew({
        fail,
    });
    
    calledWithNew(fn);
    
    t.calledWith(fail, [`Expected stub, but received ${fn.toString()}`]);
    t.end();
});

