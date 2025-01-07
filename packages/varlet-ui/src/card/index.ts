import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import Card from './Card.vue'
import { props as cardProps } from './props'

withInstall(Card)
withPropsDefaultsSetter(Card, cardProps)

export { cardProps }

export const _CardComponent = Card

export default Card
