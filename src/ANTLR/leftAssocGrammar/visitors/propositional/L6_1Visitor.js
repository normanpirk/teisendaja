/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class L6_1Visitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by PredGrammarParser#start.
	visitStart(ctx) {
		try {
			return this.visitOr(ctx.formula());
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	// Visit a parse tree produced by PredGrammarParser#and.
	visitOr(ctx) {
		if (ctx.constructor.name === "OrContext") {
			const left = ctx.left;
            if (left.constructor.name === "ParenContext") {
                if (left.formula().constructor.name === "OrContext") {
                    const leftLeft = left.formula().left.getText();
                    const leftRight = left.formula().right.getText();
                    const right = ctx.right.getText();
                    return leftLeft + "∨(" + leftRight + "∨" + right + ")";
                }
            }
			
		}
        throw "Incompatible input"; 
		
	}
}