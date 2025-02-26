<template>
  <div
    :class="`bg-[${props.bgColor}] p-4 rounded-md shadow-md w-full max-w-2xl mx-auto mt-10`"
  >
    <textarea
      class="w-full h-24 p-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 resize-none border-none"
      placeholder="Add a new note"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
    ></textarea>
    <div className="flex justify-end mt-2">
      <slot name="button" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: "#257953",
  },
});
const emit = defineEmits(["update:modelValue"]);
</script>
