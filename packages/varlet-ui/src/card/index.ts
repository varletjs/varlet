import Card from './Card.vue'
import { withInstall } from '../utils/components'

withInstall(Card)

export { props as cardProps } from './props'

export const _CardComponent = Card

export default Card
