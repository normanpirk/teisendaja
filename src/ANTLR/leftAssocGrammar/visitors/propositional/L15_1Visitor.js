/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { addParensNeg } from '@/js/Parentheses';

export default class L15_1Visitor extends antlr4.tree.ParseTreeVisitor {

	visitStart(ctx) {
		try {
			return this.visitOr(ctx.formula());
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	visitOr(ctx) {
		if (ctx.constructor.name === "OrContext") {
			let left = ctx.left.getText();
			const right = ctx.right.getText();
			left = addParensNeg(ctx.left.constructor.name, left);
			return "¬" + left + "⇒" + right;
		}
        throw "Incompatible input!";
		
	}
}