import { action, observable } from 'mobx';

export default class HomeStore {
    @observable numbers = 0;

    @action reset = () => {
        this.numbers = 0;
    }

    @action increment = () => {
        this.numbers += 1;
    }

    @action decrement = () => {
        if(this.numbers > 0){
            this.numbers -= 1;
        }
    }

    @action sum = () =>{
        this.numbers = this.numbers + this.numbers
    }

}
const homeStore = new HomeStore();
export { homeStore };