<template>
  <div class="background">
    <div class="foreground">
      <div class="intro">
        <div>{{ $t("insertNew", getSelectedRule()) }}</div>
      </div>
      <div class="btns-err">
        <SymbolButtons target="newFormula"></SymbolButtons>
      </div>
      <div>
        <input
          id="selectable-new"
          v-model="newFormula"
          :class="{ faulty: !isCorrect() }"
          @click="clearError"
          @input="
            renderMathSymbols();
            clearError();
          "
          :placeholder="getPlaceholder()"
          @keyup.enter="pressReady"
          data-cy="selectable-new"
        />
      </div>
      <div class="confirm-btns">
        <button @click="cancelConversion" data-cy="cancel-add-new-formula">
          {{ $t("cancel") }}
        </button>
        <button id="add-new-formula" data-cy="add-new-formula">
          {{ $t("ready") }}
        </button>
      </div>
      <div class="error-message-div">
        <ErrorMessages type="3"></ErrorMessages>
      </div>
    </div>
  </div>
</template>

<script>
import SymbolButtons from "./SymbolButtons.vue";
import getNewPosition from "../js/CursorPosition.js";
import validateInput from "../js/InputValidator.js";
import texAndDigitsToMathSymbols from "@/js/MathSymbolConverter.js";
import ErrorMessages from "./ErrorMessages.vue";
import ruleSubFormulaMapping from "@/assets/inputRuleMapping.json";
import ruleCodes from "@/assets/specialConversionCodes.json";
import getErrorMessage from "@/js/ErrorMessageHelper.js";

export default {
  name: "NewSubformulaPrompt",
  data() {
    return {};
  },
  components: {
    SymbolButtons,
    ErrorMessages,
  },
  computed: {
    newFormula: {
      get() {
        return this.$store.getters.newFormula;
      },
      set(value) {
        this.$store.commit("updateNewFormula", value);
      },
    },
  },
  methods: {
    getSelectedRule() {
      let ct = this.$store.getters.conversionType;
      if (ruleCodes.withUserInput.includes(ct)) {
        ct = ct.split("_")[0];
        const rule = ruleSubFormulaMapping[ct][0];
        return { rule: rule };
      }
    },
    getPlaceholder() {
      let ct = this.$store.getters.conversionType;
      if (ruleCodes.withUserInput.includes(ct)) {
        ct = ct.split("_")[0];
        const toInsert = ruleSubFormulaMapping[ct][1];
        return this.$i18n.t("newInputDescription", { toInsert: toInsert });
      }
    },
    cancelConversion() {
      this.newFormula = "";
      this.clearError();
      this.$store.commit("newFormulaAdded");
    },
    isCorrect() {
      if (this.newFormula.length > 0) {
        try {
          validateInput(this.newFormula);
          return true;
        } catch (error) {
          const errorMessage = getErrorMessage(error, this.newFormula);
          this.$store.commit("setError", { message: errorMessage, type: "3" });
          return false;
        }
      }
      return true;
    },
    clearError() {
      this.$store.commit("clearErrors");
    },
    renderMathSymbols() {
      let el = document.getElementById("selectable-new");
      let position = el.selectionStart;
      let formulaBeginning = el.value.substring(0, position);
      let newPosition = getNewPosition(formulaBeginning, position);
      this.newFormula = texAndDigitsToMathSymbols(this.newFormula);
      this.$nextTick(() => {
        el.selectionEnd = newPosition;
      });
    },
    pressReady() {
      document.getElementById("add-new-formula").click();
    },
  },
};
</script>

<style scoped>
input {
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  text-align: left !important;
  vertical-align: middle !important;
  margin: 2em 0 1em 0;
  font-size: 1em;
}

.btns-err {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
