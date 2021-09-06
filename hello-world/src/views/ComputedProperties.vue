<template>
    <div>
        <div>
            <h3>Basic Computed Message</h3>
            <p>Has published books: <b>{{ hasPublishedBooks }}</b></p>
        </div>

        <hr>
        <dir>
            <h3>Computed Setter</h3>
            {{ fullName }}
            <button @click="changeName('Ahmad Fauzi')">Click to set new fullname</button>
        </dir>
    </div>
</template>

<script>
export default {
    data: () => ({
        author: {
            firstName: 'John',
            lastName: 'Doe',
            books: [
                'Vue 2 - Advanced Guide',
                'Vue 3 - Basic Guide',
                'Vue 4 - The Mystery'
            ]
        }
    }),
    computed: {
        hasPublishedBooks() {
            return this.author.books.length > 0 ? 'Yes' : 'No'
        },
        now() {
            return Date.now() // this will never update because Date.now() is not a reactive dependency
        },
        fullName: {
            get() {
                return this.author.firstName + ' ' + this.author.lastName
            },
            set(newVal) {
                const names = newVal.split(' ')
                this.author.firstName = names[0]
                this.author.lastName = names[names.length - 1]
            }
        },
    },
    methods: {
        changeName: function(newFullName) {
            this.fullName = newFullName
        }
    }
}
</script>