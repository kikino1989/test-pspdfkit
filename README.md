## How to get started  
  
First of all, you need to install [Node.js](https://nodejs.org/en/download/) and [visual studio 2017 or earlier] (https://my.visualstudio.com/Downloads?q=visual%20studio%202017&wt.mc_id=o~msft~vscom~older-downloads)

here is a guide on how to setup visual studio and how to run cordova apps: https://cordova.apache.org/docs/en/10.x/guide/platforms/windows/


$ sudo npm install -g ionic cordova native-run cordova-res
$ npm install 
$ ionic cordova platform add windows 
$ ionic cordova build windows --prod --release

after running the commands, open ./platforms/windows/CordovaApp.Windows.jsproj with visual studio and run the project.