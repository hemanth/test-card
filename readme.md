# test-card [![Build Status](https://travis-ci.org/hemanth/test-card.svg?branch=master)](https://travis-ci.org/hemanth/test-card)

> Credit, Debit and Prepaid cards for testing.


## Install

```
$ npm install --save test-card
```


## Usage

```js
const testCard = require('test-card');

testCard('visa');
//=> '4242424242424242'

testCard('meow');
//=> null

testCard(123);
//=> 'Expected a string, got number'
```


## API

### testCard(cardName)

#### cardName

Type: `string`

On of the below:

```js
[ 'visa',
  'visa-debit',
  'mastercard',
  'mastercard-debit',
  'mastercard-prepaid',
  'american-express',
  'discover',
  'diners-club',
  'jcb' ]
```

P.S: 

* Expiry date for these cards must be some day in the future.

* Any random CVC number.

* Sample cards are from stripe docs.

## License

MIT © [Hemanth.HM](https://h3manth.com)
