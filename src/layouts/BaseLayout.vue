<template>
    <div class="container">
        <header>
            This header is from layout
            <div>
                <slot name="header"></slot>
            </div>
        </header>
        <main class="bg-gray">
            This content is from layout
            <div>
                <slot></slot>
            </div>
        </main>
        <footer>
            This footer is from layout
            <div>
                <slot name="footer"></slot>
            </div>
        </footer>
    </div>
</template>

<style scoped>
.bg-gray {
    background: gray;
}
</style>