import Tag from './Tag.vue'

Tag.install = function(app) {
  app.component(Tag.name, Tag)
}

export default Tag
