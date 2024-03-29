/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

export default class P2_1Visitor extends antlr4.tree.ParseTreeVisitor {

	visitStart(ctx) {
		try {
            if (ctx.formula().constructor.name === "NegContext") {
                return this.visitNeg(ctx.formula());
            }
		} catch (err) {
			console.log(err);
		}
		return null;
	}

	visitNeg(ctx) {
        if (ctx.formula().constructor.name === "ExistsContext") {
            const ind = ctx.formula().SYMBOL().getText();
            const formula = ctx.formula().formula().getText();
            return "∀" + ind + "¬" + formula;
        }
		throw "Incompatible input!";		
	}

}