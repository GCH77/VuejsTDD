<template>
  <div>
    <div class="color-picker">
      <ul class="muestras">
        <!-- <li class="muestra" style="background: rgb(227, 52, 47);"></li>
        <li class="muestra" style="background: rgb(52, 144, 220);"></li>
        <li class="muestra" style="background: rgb(246, 153, 63);"></li>
        <li class="muestra" style="background: rgb(56, 193, 114);"></li>
        <li class="muestra" style="background: rgb(255, 255, 255);"></li> -->
        <li 
          class="muestra" 
          v-for="(muestra, indice) in muestras" 
          :key="indice"
          :style="{ background: `#${muestra}` }"
          :class="{ 'active': indice === muestraActiva }"
          @click="muestraActiva = indice"
        ></li>
      </ul>

      <div class="modos-color">
        <!-- <button class="modo-color modo-color-hex"></button>
        <button class="modo-color modo-color-rgb"></button>
        <button class="modo-color modo-color-hsl"></button> -->
        <button 
          class="modo-color" 
          v-for="(modo, indice) in modos" 
          :key="indice"
          :class="[{'active': indice === botonActivo}, `modo-color-${modo}`]"
          @click="botonActivo = indice"
        >{{ modo }}</button>
      </div>

      <div class="codigo-color">
        {{ codigoActivo }}
      </div>
    </div>
  </div>
</template>
<script>
import { rgb, hex, hsl } from '@/utils/Color';

const modosFunc = { rgb, hex, hsl };

export default {
  props: {
    muestras: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      muestraActiva: 0,
      botonActivo: 0,
      modos: ["hex", "rgb", "hsl"]
    }
  },
  computed: {
    codigoActivo() {
      const colorActivo = this.muestras[this.muestraActiva];
      const modActivo = this.modos[this.botonActivo];
      return modosFunc[modActivo](colorActivo);
    }
  }
}
</script>
<style>
.color-picker {
  background-color: #fff;
  border: 1px solid #dae4e9;
  border-radius: 0.125rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  color: #596a73;
  font-family: BlinkMacSystemFont, Helvetica Neue, sans-serif;
  padding: 1rem;
}

.muestras {
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: -0.25rem -0.25rem 0.75rem;
  padding: 0;
}

.muestra {
  border-radius: 0.125rem;
  cursor: pointer;
  height: 2rem;
  margin: 0.25rem;
  position: relative;
  width: 2rem;
}

.muestra::after {
  border-radius: 0.125rem;
  bottom: 0;
  box-shadow: inset 0 0 0 1px #dae4e9;
  content: '';
  display: block;
  left: 0;
  mix-blend-mode: multiply;
  position: absolute;
  right: 0;
  top: 0;
}

.muestra svg {
  display: none;
  color: #fff;
  fill: currentColor;
  margin: 0.5rem;
}

.muestra.active svg {
  display: block;
}

.modos-color {
  display: flex;
  font-size: 1rem;
  letter-spacing: 0.05rem;
  margin: 0 -0.25rem 0.75rem;
}

.modo-color {
  background: none;
  border: none;
  color: #9babb4;
  cursor: pointer;
  display: block;
  font-weight: 700;
  margin: 0 0.25rem;
  padding: 0;
  text-transform: uppercase;
}

.modo-color.active {
  color: #364349;
}

.codigo-color {
  border: 1px solid #dae4e9;
  border-radius: 0.125rem;
  color: #364349;
  text-transform: uppercase;
  padding: 0.75rem;
}
  
</style>