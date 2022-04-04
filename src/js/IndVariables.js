import FreeVarsVisitor from "../ANTLR/leftAssocGrammar/visitors/freeVariables/FreeVarsVisitor.js";
import store from "@/store/index.js";

export default function getNewVariable() {
  const indVariables = ["x", "y", "z", "u", "v", "w", "p", "q", "r", "s", "t"];
  for (let i = 0; i < indVariables.length; i++) {
    if (!store.getters.formula.includes(indVariables[i])) {
      return indVariables[i];
    }
  }
  return null;
}

export function getFreeIndVars(formula) {
  const visitor = new FreeVarsVisitor();
  const result = visitor.visit(formula);

  return result;
}
