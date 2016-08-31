var test = require('tape'),
    distinct = require('../');

test('values', function(t){
    t.plan(1);

    var items = [1,2,3,4,3,5,2,1,5];

    var result = distinct(items, x => x);

    t.deepEqual(result, [1,2,3,4,5]);
});

test('objects', function(t){
    t.plan(1);

    var items = [{label: 'foo'}, {label: 'bar'}, {label: 'foo'}];

    var result = distinct(items, x => x.label);

    t.deepEqual(result, [{label: 'foo'}, {label: 'bar'}]);
});