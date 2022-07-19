/**
 * @description 组件库typings
 **/
import { ElForm, ElDialog } from 'element-plus'
import { FormItemRule } from 'element-plus/es/tokens/form'

export type IForm = InstanceType<typeof ElForm>
export type IFormRule = Record<string, FormItemRule[]>

export type IElDialog = InstanceType<typeof ElDialog>
