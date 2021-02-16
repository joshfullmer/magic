import VirtuePage from '../pages/VirtuePage.vue'
import { VIRTUES } from '../constants/virtue.constants'

const virtueRoutes = Object.keys(VIRTUES)
  .map((virtue) => ({
    path: `/${virtue.toLowerCase()}`,
    name: virtue,
    component: VirtuePage,
    props: { virtue: VIRTUES[virtue as VIRTUES] }
  }))

export { virtueRoutes }
