interface ArrayConstructor {
    from(arrayLike: any, mapFn?, thisArg?): Array<any>;
}

class reqForm {
	private target: HTMLFormElement;
	private targetNames: string[] = [];
	private total: number = 0;
	private totalEl: HTMLElement;
	private remaining: number = 0;
	private remainingEl: HTMLElement;

	constructor(target: string, total: string, remaining: string) {
		this.target = document.getElementById(target) as HTMLFormElement;
		this.totalEl = document.getElementById(total) as HTMLElement;
		this.remainingEl = document.getElementById(remaining) as HTMLElement;

		this.setTargetNames(this.target);
		this.writeInnerHtml(this.totalEl, this.total.toString());
		this.writeInnerHtml(this.remainingEl, this.total.toString());

		this.updateRemainingCount();
	}

	// 対象となる項目のnameを取得する
	private setTargetNames(target: HTMLFormElement): void {
		const elements: HTMLFormControlsCollection = target.elements as HTMLFormControlsCollection;
		for (let i = 0; i < target.elements.length; i++) {
			if (this.targetNames.indexOf(elements[i].getAttribute('name')) === -1 && elements[i].getAttribute('name') && elements[i].getAttribute('type') !== 'submit') {
				this.targetNames.push(elements[i].getAttribute('name'));
				this.total++;
			}
		}
		return;
	}

	private updateRemainingCount(): void {
		const elements: any[] = [];
		for (let i = 0; i < this.targetNames.length; i++) {
			elements.push(document.getElementsByName(this.targetNames[i])[0]);
		}

		document.addEventListener('change', (_) => {
            // const target: HTMLInputElement = e.target as HTMLInputElement;
			const remainingNames = this.targetNames.filter((name) => {
                const targetInput: NodeList = document.getElementsByName(name);
				if ((targetInput[0] as HTMLInputElement).getAttribute('type') === 'radio') {
                    const radio: HTMLInputElement[] = Array.from(document.querySelectorAll(`input[name=${name}]`));
    
                    for(let item of radio) {
                        if(item.checked) {
                            return item.name;
                        }
                    }
				} else if ((targetInput[0] as HTMLInputElement).value) {
					return name;
                }
                return;
			});
			this.remaining = this.total - remainingNames.length;
            this.writeInnerHtml(this.remainingEl, this.remaining.toString());
		});
		return;
	}

	private writeInnerHtml(targetHtml: HTMLElement, writeContent: string): void {
		targetHtml.innerHTML = writeContent;
		return;
	}
}
