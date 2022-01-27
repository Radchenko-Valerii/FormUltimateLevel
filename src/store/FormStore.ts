import { makeAutoObservable } from 'mobx';

class FormStore {
  data: any={}
  constructor(){
    makeAutoObservable(this);
  }
  setData(newData: any){
    this.data = {...this.data, newData}
  }

}

export default new FormStore();