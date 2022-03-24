/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { addParensImpl } from '@/js/Parentheses';

// This class defines a complete generic visitor for a parse tree produced by PredGrammarParser.

export default class LS18_1Visitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by PredGrammarParser#start.
	visitStart(ctx) {
		try {
			return this.visitEq(ctx.formula());
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	// Visit a parse tree produced by PredGrammarParser#and.
	visitEq(ctx) {
		if (ctx.constructor.name === "EqContext") {
			let left = ctx.left.getText();
			let right = ctx.right.getText();
			left = addParensImpl(ctx.left.constructor.name, left);
			right = addParensImpl(ctx.right.constructor.name, right);
			return "(" + left + "⇒" + right + ")∧(" + right + "⇒" + left + ")";
		}
        throw "Incompatible input!";
		
	}
}