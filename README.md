# Simple Lazy

Simple Lazy is a lightweight script for lazy loading and multi-serving images. It’s written in pure JavaScript why it doesn’t depend on 3rd-party libraries such as jQuery. simpleLazy works on all modern browsers, including on IE7+.

## Install

```
npm install simple-lazy --save
```

## Usage

```
// css

.s-lazy {
    transition: opacity .5s ease-in-out;
    max-width: 100%;
    opacity: 0;
    transition: all .5s ease;
    transform: scale(.5);
}

.s-loaded {
    opacity: 1;
    transform: scale(1);
}

.s-error {
    content: url(/images/empty.png);
    opacity: .2;
    transform: scale(1);
}

// html

<img class="s-lazy" data-src="img1">
<img class="s-lazy" data-src="img2">
...
<img class="s-lazy" data-src="img200">

// js

import simpleLazy from 'simple-lazy

simpleLazy('.content-list')
```
## Example

[simple-lazy](https://desarrolloactivo.com/blog/simple-lazy/)

## Credits

[estebanrfp](https://desarrolloactivo.com/)

## License

[MIT](https://opensource.org/licenses/MIT)
