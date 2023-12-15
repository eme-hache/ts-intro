# Project to reinforce TypeScript - ECMAScript 20XX

* The first thing we need to do after downloading the code is to run the following command:

```
npm install
```
This command will download all the necessary Node modules to run the project

Once the installation of the node_modules is complete, you can run the project with the following command:

### Windows
```
npm run start:windows
```

### Linux/OS X
```
npm start
```

To make this work, remember to execute this command in the same directory where the ```package.json``` file is located

## Change the Port

By default, the port configured for this project is ```8081```, but if you need to change it because your computer might be using that port, you can do so by opening the ```package.json``` file and navigating to the scripts section. There, you will find the instruction that launches the development server:

```
"start:windows": "set NODE_OPTIONS=--openssl-legacy-provider && webpack-dev-server --mode development --open --port=8081",
"start": "export NODE_OPTIONS=--openssl-legacy-provider && webpack-dev-server --mode development --open --port=8081"
```

Simply change the port to the one you need, save the changes, and then run npm start again


