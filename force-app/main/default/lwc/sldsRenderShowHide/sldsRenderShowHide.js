import { LightningElement } from 'lwc';

export default class SldsRenderShowHide extends LightningElement {


    showfirst = true;

    handleClick(){
        if(this.showfirst==true )
            {
                this.showfirst = false;
            }
            else
            {
                this.showfirst = true;
    }
}
}