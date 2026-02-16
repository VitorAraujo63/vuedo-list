<script setup>
defineProps({
    show: Boolean
})

const emit = defineEmits(['close'])
</script>

<template>
    <Teleport to="body">

        <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div
                v-if="show"
                class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                @click="$emit('close')"
            >
                <div
                    class="bg-gray-800 rounded-lg shadow-xl w-full max-w-sm p-6 transform transition-all scale-100"
                    @click.stop
                >

                    <slot></slot>

                    <button
                        @click="$emit('close')"
                        class="absolute top-3 right-3 text-gray-400 hover:text-white"
                    >
                        x
                    </button>

                </div>

            </div>
        </Transition>
    </Teleport>
</template>