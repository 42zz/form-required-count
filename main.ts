class reqForm {
    private target: HTMLFormElement;
    private targetNames: string[] = [];
    private count: number = 0;
    private total: number = 0;
    private nokoriEl: HTMLElement;
    private totalEl: HTMLElement;

    constructor(target: string, total: string, nokori: string) {
        this.target = document.getElementById(target) as HTMLFormElement;
        this.totalEl = document.getElementById(total) as HTMLElement;        
        this.nokoriEl = document.getElementById(nokori) as HTMLElement;


        this.setTargetNames(this.target);
        this.writeInnerHtml(this.totalEl, this.total.toString());
        console.log(this.total);
        

        this.count = this.target.length;
    }

    setTargetNames(target: HTMLFormElement):void {
        const elements: HTMLFormControlsCollection = target.elements as HTMLFormControlsCollection;
        for(let i = 0; i < target.elements.length; i++) {
            if(this.targetNames.indexOf(elements[i].getAttribute('name')) === -1 && elements[i].getAttribute('name') !== null) {
                this.targetNames.push(elements[i].getAttribute('name'));
                this.total++;
            }
        }
        return;
    }
    

    writeInnerHtml(targetHtml: HTMLElement, writeContent: string):void {
        targetHtml.innerHTML = writeContent;
        return;
    }
}



const formInit = new reqForm('remaining-target', 'total', 'nokori');