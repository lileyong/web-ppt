<template>
    <ul>
        <li v-for="item in language" :key="item">{{ item }}</li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            language: ["java", "javascript", "php"]
        }
    }
}
</script>