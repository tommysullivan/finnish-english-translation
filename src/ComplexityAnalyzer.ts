import { Collection } from "collections";

export class ComplexityAnalyzer {
    constructor(private readonly collectionOfSimpleTransformRules:Collection) {}
    complexity = () => this.collectionOfSimpleTransformRules.map((rule:any) => rule.complexity()).fold((a:number,b:number) => a + b, 0)
    numTopLevelRules = () => this.collectionOfSimpleTransformRules.length()
}