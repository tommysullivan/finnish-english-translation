import { Collection } from "collections"

export class RuleApplier {
    constructor(private collectionOfSimpleTransformRules:Collection, private ruleToApplyIfNoRulesAreApplicable:any) {}

    applyRules = (inputWord:any) => {
        const doesRuleApplyToStem = (rule:any) => rule.applies(inputWord)
        const applicableRules = this.collectionOfSimpleTransformRules.filter(doesRuleApplyToStem)
        if(applicableRules.isEmpty()) return this.ruleToApplyIfNoRulesAreApplicable.apply(inputWord)
        const applyRuleToStem = (rule:any) => rule.apply(inputWord)
        const resultCandidates = applicableRules.map(applyRuleToStem)
        if(resultCandidates.unique().length() != 1) {
            throw new Error(
                "Multiple rules applied and gave different results for inputWord "+inputWord+"\n"+
                applicableRules.map((rule:any, i:number) => `${rule.toString()} gave result: ${resultCandidates.get(i)}`).join("\n")
            )
        }
        return resultCandidates.first()
    }
}