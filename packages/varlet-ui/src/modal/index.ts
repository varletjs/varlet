import Modal from './Modal.vue'

Modal.install = function(app) {
  app.component(Modal.name, Modal)
}

export default Modal
