import type { Directive } from 'vue'

const clickOutsideDirective: Directive = {
  beforeMount(el, binding) {
    const handleClickOutside = (event: MouseEvent) => {
      if (!el.contains(event.target as Node) && el !== event.target) {
        binding.value()
      }
    }

    document.addEventListener('click', handleClickOutside)

    el.__vueClickOutside__ = handleClickOutside
  },

  unmounted(el) {
    document.removeEventListener('click', el.__vueClickOutside__)
    delete el.__vueClickOutside__
  }
}

export default clickOutsideDirective