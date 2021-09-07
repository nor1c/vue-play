<template>
    <div>
        <h3>Watch Example</h3>
        <p>
            Ask a yes/no question:
            <input v-model="question">
        </p>
        <p>{{ answer }}</p>
    </div>
</template>

<script>
export default {
    data: () => ({
        question: 'Are you gay', // add "?" on the input text
        answer: 'Question usually contain a question mark.'
    }),
    watch: {
        question(newQuestion, oldQuestion) {
            if (newQuestion.indexOf('?') > -1) {
                this.getAnswer()
            }
        }
    },
    methods: {
        getAnswer() {
            this.answer = 'Thinking...'
            setTimeout(() => {
                this.answer = 'Of course not!'
            }, 500);
        }
    }
}
</script>