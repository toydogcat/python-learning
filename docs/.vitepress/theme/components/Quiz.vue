<script setup>
import { ref } from 'vue'

const props = defineProps({
  question: {
    type: String,
    required: true
  },
  options: {
    type: Array,
    required: true
  },
  answer: {
    type: [String, Number],
    required: true
  }
})

const selected = ref(null)
const submitted = ref(false)
const isCorrect = ref(false)

const submit = () => {
  if (selected.value === null) return
  submitted.value = true
  // Check if answer is index or text
  if (typeof props.answer === 'number') {
    isCorrect.value = selected.value === props.answer
  } else {
    isCorrect.value = props.options[selected.value] === props.answer
  }
}

const reset = () => {
  selected.value = null
  submitted.value = false
  isCorrect.value = false
}
</script>

<template>
  <div class="quiz-container">
    <p class="question">{{ question }}</p>
    <div class="options">
      <label 
        v-for="(option, index) in options" 
        :key="index" 
        :class="{ 
          'option-item': true, 
          'selected': selected === index,
          'correct': submitted && (typeof answer === 'number' ? index === answer : option === answer),
          'wrong': submitted && selected === index && !(typeof answer === 'number' ? index === answer : option === answer)
        }"
      >
        <input 
          type="radio" 
          v-model="selected" 
          :value="index" 
          :disabled="submitted"
        >
        {{ option }}
      </label>
    </div>
    
    <div class="actions">
      <button v-if="!submitted" @click="submit" :disabled="selected === null" class="btn btn-primary">
        提交
      </button>
      <button v-else @click="reset" class="btn btn-secondary">
        重試
      </button>
    </div>

    <div v-if="submitted" class="feedback" :class="isCorrect ? 'text-success' : 'text-danger'">
      <span v-if="isCorrect">✅ 正確！</span>
      <span v-else>❌ 錯誤，再試一次。</span>
    </div>
  </div>
</template>

<style scoped>
.quiz-container {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  background-color: var(--vp-c-bg-soft);
}

.question {
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.option-item {
  padding: 0.75rem 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  white-space: pre-wrap;
}

.option-item:hover:not(.submitted) {
  background-color: var(--vp-c-bg-mute);
}

.option-item.selected {
  border-color: var(--vp-c-brand);
  background-color: var(--vp-c-brand-soft);
}

.option-item.correct {
  border-color: #10b981;
  background-color: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

.option-item.wrong {
  border-color: #ef4444;
  background-color: rgba(239, 68, 68, 0.1);
  color: #ef4444;
}

.actions {
  display: flex;
  gap: 0.5rem;
}

.btn {
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  border: none;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-primary {
  background-color: var(--vp-c-brand);
  color: white;
}

.btn-secondary {
  background-color: var(--vp-c-bg-mute);
  color: var(--vp-c-text-1);
}

.feedback {
  margin-top: 1rem;
  font-weight: 600;
}

.text-success { color: #10b981; }
.text-danger { color: #ef4444; }

input[type="radio"] {
  margin-top: 0.2rem;
  flex-shrink: 0;
}
</style>
