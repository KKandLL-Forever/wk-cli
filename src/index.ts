import inquirer from 'inquirer';
import {PROMPT_LIST, CUSTOM_TEMPLATE, IPromptOption} from './assets/inquirer';
import {handlePromptMethod} from './handle';
import {createCommand} from './command';
import { copySync } from 'fs-extra'

const path = require('path')
const reactSrc = path.join(__dirname,'../src/template/react-17')
const vueSrc = path.join(__dirname,'../src/template/vue3')
const reactViteSrc = path.join(__dirname,'../src/template/react-vite-unocss-ts')
const nextUnoSrc = path.join(__dirname,'../src/template/next13-unocss-ts')
const destination = process.cwd()
// console.log(vueSrc)
// console.log(destination,'des')

/**
 * @description 向项目根目录写入template中的文件
 **/
async function write(source: string, destination: string) {
  try {
    await copySync(source, destination)
  }catch (err) {
    console.log(err)
  }
}

function entry() {
  inquirer.prompt<IPromptOption>(PROMPT_LIST).then(async (answer) => {
    const {templateName} = answer;
    let params = answer;
    console.log(params)
    switch (templateName) {
      case 'react@17':
        await write(reactSrc, destination)
        break;
      case 'vue3+pinia+router':
        await write(vueSrc, destination)
        break;
      case 'react17+vite+unocss+ts':
        await write(reactViteSrc, destination)
        break;
      case 'next13+unocss+ts':
        await write(nextUnoSrc, destination)
        break;
      case 'custom':
        const customParam = await inquirer.prompt(CUSTOM_TEMPLATE);
        params = Object.assign(params, customParam);
        break;
    }
    // handlePromptMethod(params);
  });
}

const cmd = createCommand();
entry();
