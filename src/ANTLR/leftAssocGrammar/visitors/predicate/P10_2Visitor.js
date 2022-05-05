/* eslint-disable */
// jshint ignore: start
import antlr4 from 'antlr4';
import { getFreeVars } from '@/js/IndVariables';

export default class P10_2Visitor extends antlr4.tree.ParseTreeVisitor {

    visitStart(ctx) {
        try {
            if (ctx.formula().constructor.name === "ImplContext") {
                return this.visitImpl(ctx.formula());
            }
        } catch (err) {
            console.log(err);
        }
        return null;
    }

    visitImpl(ctx) {
        if (ctx.right.constructor.name === "ExistsContext") {
            const freeVarsLeft = getFreeVars(ctx.left);
            const freeVarsRight = getFreeVars(ctx.right.formula());
            const ind = ctx.right.SYMBOL().getText();
            if (freeVarsRight.has(ind) && !freeVarsLeft.has(ind)) {
                const left = ctx.left.getText();
                const right = ctx.right.formula().getText();
                return "∃" + ind + "(" + left + "⇒" + right + ")"
            }
        }
        throw "Incompatible input!";
    }

}