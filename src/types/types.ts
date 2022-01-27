import { ReactNode } from "react"

export interface IDataContext {

}

export interface IInput {
  props?: any,
  ref?: any,
  id: string,
  type: string,
  label: string,
  name: string,
  onChange?: (e: any) => any
}

export interface IDefaultComponent {
  props?: any,
  children?: ReactNode
}

export interface IFormComponent {
  props?: any,
  children?: ReactNode,
  onSubmit?: (e: React.FormEvent) => any
}