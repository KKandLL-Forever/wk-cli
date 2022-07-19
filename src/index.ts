import inquirer from 'inquirer';
import {PROMPT_LIST, CUSTOM_TEMPLATE, IPromptOption} from './assets/inquirer';
import {handlePromptMethod} from './handle';
import {createCommand} from './command';
import { copySync } from 'fs-extra'

const path = require('path')
const reactSrc = path.resolve(__dirname,'template/react-17')
const vueSrc = path.resolve(__dirname,'template/vue3')
const destination = process.cwd()
// console.log(destination,'des')
// console.log(path.resolve(__dirname,'template/react-17'),'path')

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
    // console.log(params)
    switch (templateName) {
      case 'react@17':
        await write(reactSrc, destination)
        break;
      case 'vue3+pinia+router':
        await write(vueSrc, destination)
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
