# iSELL
iSELL is a merchant payment web application leveraging rapyd APIs for wallet creation and checkout.

![image](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/227/665/datas/original.png)

Contents
=================
<!--ts-->
* [About](#About)
* [Technologies-&-Tools](#Technologies-&-Tools)
* [Requirements](#Requirements)
* [Run-On-Local-Machine](#Run-On-Local-Machine)
* [Links](#Links)
* [License](#License)
<!--te-->

About
============
We’re building this product to serve the vendors & traders in the Nigerian SME space, they face a series of problem while trying to sell their goods and services, and with iSELL, we plan to solve these problems, and hopefully expand it into other parts of Africa.

Some of the Problems vendors face in this part of the world is that there’s no centralized location where they can display all the goods and services they have available, using their social media accounts to trade and display goods isn’t scalable and comes with a lot of inconveniences, and using other third-party E-commerce platforms isn’t any better as they come with their own host of problems such as taking a huge percentage from their profits, and with these third-party platforms, there’s no guarantee that visitors would surely buy from your store rather than the hundreds of others there.

Vendors also have a lot of problems surrounding accepting payments, such as delays in payments and the inability to accept cross-border payments.

Technologies-&-Tools
============
- ReactJS
- NodeJS(ExpressJs)
- TypeScript
- Firebase(Firestore)
- Rapyd API

Requirements
============
* NPM and Node installed, download [HERE](https://phoenixnap.com/kb/install-node-js-npm-on-windows)
* [Create-React-app](https://reactjs.org/docs/create-a-new-react-app.html) must be installed.


Run-On-Local-Machine
============
* git clone the repository

```
  $ git clone https://github.com/Team-xyzdev/iSELL
```
* create `.env` file in the client and server directory

  ### Client

* open `client` in your text editor

```
  $ cd client
```

* in your `.env` file

```
   REACT_APP_apiKey="put your firebase credential"
   REACT_APP_authDomain="put your firebase credential"
   REACT_APP_projectId="put your firebase credential"
   REACT_APP_storageBucket="put your firebase credential"
   REACT_APP_messagingSenderId="put your firebase credential"
   REACT_APP_appId="put your firebase credential"
   REACT_APP_measurementId="put your firebase credential"
```

- install dependencies 
```
 $ npm install
```
- start scripts

```
 $ npm start
```

* or with yarn

- install dependencies 
```
$ yarn add
```
- start scripts
```
 $ yarn start
```

  ### Server
   
* open `server` in your text editor

```
  $ cd server
```

* in your `.env` file

```
  accessKey="// get it by creating a rapyd API account"
  secretKey="// get it by creating a rapyd API account"
  apirootURL="sandboxapi.rapyd.net"
```

- install dependencies 
```
 $ npm install
```
- start scripts

```
 $ npm start
```

* or with yarn

- install dependencies 
```
$ yarn add
```
- start scripts
```
 $ yarn start
```
Links
============
* [netlify-link](https://i-sell.netlify.app/)
* [iSELL-PRD](https://drive.google.com/file/d/1rS-kyjRK7UmENlO-NxZ8qRngGw4zNoqP/view?usp=sharing)
* [Devpost](https://devpost.com/software/isell)
* [Figma](https://www.figma.com/file/ZbSmB7scxfoeWxkgybsfpL/iSell?node-id=263%3A492)


License
============

Copyright iSELL 2022

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
