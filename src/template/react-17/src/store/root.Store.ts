import { makeAutoObservable } from 'mobx'

class RootStore {
  constructor () {
    makeAutoObservable(this)
  }
}

export const rootStore = new RootStore()
