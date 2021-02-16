import AttributePage from '../pages/AttributePage.vue'
import { VIRTUE_ATTRIBUTES } from '../constants/virtue.constants'

const attributeRoutes = Object.keys(VIRTUE_ATTRIBUTES)
  .map((attribute) => ({
    path: `/${attribute.toLowerCase()}`,
    name: attribute,
    component: AttributePage,
    props: { attribute: VIRTUE_ATTRIBUTES[attribute as VIRTUE_ATTRIBUTES] }
  }))

export { attributeRoutes }
