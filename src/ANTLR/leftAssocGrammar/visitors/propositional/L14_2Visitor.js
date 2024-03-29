/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { addParensAnd } from '@/js/Parentheses';

export default class L14_2Visitor extends antlr4.tree.ParseTreeVisitor {

	visitStart(ctx) {
		try {
			return this.visitNeg(ctx.formula());
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	visitNeg(ctx) {
		if (ctx.constructor.name === "NegContext") {
			if (ctx.formula().constructor.name === "ParenContext") {
                const paren = ctx.formula();
                if (paren.formula().constructor.name === "ImplContext") {
                    const impl = paren.formula();
                    if (impl.right.constructor.name === "NegContext") {
                        let left = impl.left.getText();
                        const right = impl.right.formula().getText();
						left = addParensAnd(impl.left.constructor.name, left);
                        return left + "∧" + right;
                    }
                }
            }
		}
        throw "Incompatible input"; 
	}
}