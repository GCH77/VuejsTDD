import { shallowMount } from "@vue/test-utils"
import ColorPicker from "@/components/ColorPicker"
import convert from "color-convert"

let instanceComponent = null

const propsData = {
  muestras: ['e3342f', '3490dc', 'f6993f', '38c172', 'fff']
}

beforeEach(() => {
  instanceComponent = shallowMount(ColorPicker, { propsData });
})

afterEach(() => {
  instanceComponent.destroy();
})

describe("ColorPicker", () => {
  describe("Muestras", () => {
    test("Mostrar cada color como una muestra individual", () => {
      const muestras = instanceComponent.findAll('.muestra');
      propsData.muestras.forEach((muestra, indice) => {
        expect(muestras.at(indice).attributes().style).toBe(
          `background: rgb(${convert.hex.rgb(muestra).join(', ')});`
        )
      });
    })

    test("obtener la primera muestra seleccionada por defecto - activada", () => {
      const primeraMuestra = instanceComponent.find('.muestra');
      expect(primeraMuestra.classes()).toContain('active');
    })

    test("hacer que una muestra se active cuando den clic sobre ella", () => {
      const siguienteMuestra = instanceComponent.findAll('.muestra').at(2);
      siguienteMuestra.trigger('click');
      expect(siguienteMuestra.classes()).toContain('active');
    })
  })

  describe('Modo', () => {
    test("mostrar cada modo como un boton individual", () => {
      const botones = instanceComponent.findAll('.modo-color');
      botones.wrappers.forEach(boton => {
        expect(boton.classes()).toEqual(
          expect.arrayContaining([expect.stringMatching(/modo-color-\w{1,}/)])
        )
      });
    })

    test("obtener el primer modo seleccionado por defecto", () => {
      const primerBoton = instanceComponent.find('.modo-color');
      expect(primerBoton.classes()).toContain('active');
    })

    test("obtener el modo del color cuando den clic sobre el boton", () => {
      const segundoBoton = instanceComponent.findAll('.modo-color').at(2);
      segundoBoton.trigger('click');
      expect(segundoBoton.classes()).toContain('active');
    })
  })

  describe("Codigo color por modo", () => {
    test("mostrar el codigo del modo por defecto", () => {
      expect(instanceComponent.find('.codigo-color').text()).toEqual('#e3342f');
    })

    test("muestre el codigo del color correspondiente al modo cuando den clic", () => {
      instanceComponent.find('.modo-color-hsl').trigger('click');
      expect(instanceComponent.find('.codigo-color').text()).toEqual('2°, 76%, 54%')
    })

    test("mostrar el codigo de acuerdo al color cuando cambie", () => {
      instanceComponent.findAll('.muestra').at(2).trigger('click');
      expect(instanceComponent.find('.codigo-color').text()).toEqual('#f6993f');
    })
  })
})