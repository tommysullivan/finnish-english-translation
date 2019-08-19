export class Predicates {
    equals = (valueToReturnTrueFor:any) => (valueToCompare:any) => valueToCompare == valueToReturnTrueFor
}