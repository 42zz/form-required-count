interface ArrayConstructor {
    from(arrayLike: any, mapFn?: any, thisArg?: any): Array<any>;
}
declare class reqForm {
    private target;
    private submit;
    private targetNames;
    private total;
    private totalEl;
    private remaining;
    private remainingEl;
    constructor(target: string, total: string, remaining: string);
    private setTargetNames;
    private updateRemainingCount;
    private writeInnerHtml;
}
//# sourceMappingURL=main.d.ts.map