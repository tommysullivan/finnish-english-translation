import { ComplexityAnalyzer } from "./ComplexityAnalyzer"

export class Pluralizer {
    constructor(private complexityAnalyzer:ComplexityAnalyzer, private ruleApplier:any) {}

    pluralize = (stem:string) => { 
        return this.ruleApplier.applyRules(stem);
    }

    complexity = this.complexityAnalyzer.complexity
    numTopLevelRules = this.complexityAnalyzer.numTopLevelRules
}