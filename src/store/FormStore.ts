import { makeAutoObservable } from 'mobx';

interface IData {
  firstName?: string,
  lastName?: string,
  phone?: string,
  hasPhone?: string,
  email?: string
}


class FormStore {
  data: IData ={}
  constructor(){
    makeAutoObservable(this);
  }
  setData(newData: any){
    this.data = {...this.data, ...newData}
  }

}

export default new FormStore();