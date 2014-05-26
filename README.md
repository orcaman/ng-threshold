ng-threshold
==========

ng-threshold is a simple angular.js directive that allows you to specify the maximum amount of allowed time for an image to load. If the image fails to load because the maximum amount of time has elapsed or because the image failed to load immediatly (because of a 404 error, for example), a fallback image is loaded instead. 

how to use
==========

1. include the ng-threshold.js directive in your index file
2. anywhere in the scope of the app, use the 'threshold' attribute to specify this is an image to be used with ng-threshold
3. specify data-src-maxtime in milliseconds (maximum time to wait for the original image src to load)
4. specify data-src-fallback (this is your fallback URL in case the original image does not load)


example 
==========

```js
<!doctype html>
<html>
<head>
<body ng-app="myAngularApp">
    <img  src="http://localhost:23080/this_image_takes_more_than_5_sec_to_load.jpg" data-src-fallback="https://www.google.com/images/srpr/logo11w.png" data-src-maxtime="5000" threshold=""/>
  </div>
```

license  
==========

ng-threshold is developed by <a href="https://www.linkedin.com/profile/view?id=116617874">Or Hiltch</a> and 
<a href="https://www.linkedin.com/profile/view?id=3535001">Maurice McGinley</a>

The MIT License

Copyright (c) 2010-2014 AVG Innovation Labs B.V, Inc. http://www.avg.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.