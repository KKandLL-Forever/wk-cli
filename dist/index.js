#!/usr/bin/env node
"use strict";var inquirer=require("inquirer"),fs=require("fs"),path$1=require("path");require("superagent");var commander=require("commander"),fsExtra=require("fs-extra");function _interopDefaultLegacy(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var inquirer__default=_interopDefaultLegacy(inquirer),fs__default=_interopDefaultLegacy(fs),path__default=_interopDefaultLegacy(path$1),repository={"react@17":"direct:https://github.com/KKandLL-Forever/react-template/archive/refs/heads/master.zip","vue3+pinia+router":"direct:https://github.com/KKandLL-Forever/react-template/archive/refs/heads/master.zip"};const IS_PRODUCTION="production"===process.env.NODE_ENV,DEV_LAYER=IS_PRODUCTION?__dirname:path__default.default.resolve(__dirname,"..",".."),SAVE_PATH=path__default.default.resolve(DEV_LAYER,"local"),FILE_NAME="repository.json",SAVE_FILE_NAME=path__default.default.resolve(SAVE_PATH,FILE_NAME);function getRepositoryData(){return fs__default.default.existsSync(SAVE_FILE_NAME)?require(SAVE_FILE_NAME):{}}const PROMPT_LIST=[{type:"input",message:"enter your projectName",name:"projectName",default:"test"},{type:"list",message:"choose download template",name:"templateName",choices:Object.keys(Object.assign(repository,getRepositoryData(),{custom:""}))}],CUSTOM_TEMPLATE=[{type:"list",message:"choose your repository type",name:"repositoryType",choices:["public","private"]},{type:"input",when({repositoryType:e}){return"private"===e},name:"repositoryUser",message:"input your git username"},{type:"password",when({repositoryType:e}){return"private"===e},name:"repositoryPass",message:"input your git password"},{type:"input",message:"custom repository url",name:"repositoryUrl"}];function createCommand(){const e=new commander.Command;return e.version("0.1.1"),e.addHelpText("after","test"),e.parse(process.argv),e}const path=require("path"),reactSrc=path.resolve(__dirname,"template/react-17"),vueSrc=path.resolve(__dirname,"template/vue3"),destination=process.cwd();async function write(e,t){try{await fsExtra.copySync(e,t)}catch(e){console.log(e)}}function entry(){inquirer__default.default.prompt(PROMPT_LIST).then(async e=>{var{templateName:t}=e,r=e;switch(t){case"react@17":await write(reactSrc,destination);break;case"vue3+pinia+router":await write(vueSrc,destination);break;case"custom":var a=await inquirer__default.default.prompt(CUSTOM_TEMPLATE);Object.assign(r,a)}})}createCommand(),entry();