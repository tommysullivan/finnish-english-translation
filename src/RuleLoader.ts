import fs from "fs"
import { Collection } from "collections"
import { SimpleTransformRule } from "./SimpleTransformRule"

export class RuleLoader {
    loadRules = (simpleTransformRulesPath:string) => {
        const simpleTransformRulesFileContent = fs.readFileSync(simpleTransformRulesPath).toString();
        const simpleTransformRulesJSONArray = JSON.parse(simpleTransformRulesFileContent);
        const collectionOfArraysOfSuffices = new Collection(simpleTransformRulesJSONArray);
        function changeInnerArrayToSimpleTransformRule(arrayOfPreAndPostSuffix) {
            const oldSuffix = arrayOfPreAndPostSuffix[0];
            const newSuffix = arrayOfPreAndPostSuffix[1];
            return new SimpleTransformRule(oldSuffix, newSuffix);
        }
        return collectionOfArraysOfSuffices.map(changeInnerArrayToSimpleTransformRule);
    }
}