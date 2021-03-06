import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import createFullStore from '../utils/createFullStore'
import codeOfConductPage from '~/pages/code-of-conduct'

const localVue = createLocalVue()
const store = () => createFullStore(Vuex)

localVue.use(Vuex)

describe('CodeOfConductPage', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(codeOfConductPage, {
      localVue,
      store,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })

    expect(wrapper.text()).toContain('行動規範')
  })
})
