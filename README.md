# distinct-values

return a distinct set of values based on a hashing function

## Usage

```javascript
var distinct = require('distinct-values');

var books = [
        {
            title: 'the wind in the willows'
        },
        {
            title: 'harry potter'
        },
        {
            title: 'something else'
        },
        {
            title: 'harry potter'
        }
    ];

var distinctBooks = distinct(books, function(book){
        return book.title;
    });

```