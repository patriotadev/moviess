<template>
    <div id="modal">
      <div id="modal-container">
          <div class="modal-header">
            <h2>Modal Title</h2>
            <span>X</span>
          </div>
            <hr/>
          <div class="modal-body">
              <h2>Modal Body</h2>
              <div class="description">
                <p>Title</p>
                <p>Release Year</p>
                <p>Type</p>
              </div>
          </div>
          <div class="modal-footer">
            <button id="modal-submit-button" @click="handleCloseModal">Close</button>      
          </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ModalCustom',
  methods: {
    handleCloseModal() {
      console.log(this.isModalOpen)
    }
  },
  props: {
    isModalOpen: Boolean
  }
}
</script>

<style>

#modal {
  position: fixed;
  background-color: white;
  z-index: 9999;
  width: 1000px;
  height: 60vh;
  margin: 0 auto;
  left: 0;
  right: 0;
  border-radius: 8px;
  box-shadow: 0px 1px 1px 1px lightgray;;
}

#modal-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
}

.modal-header {
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
}

.modal-body {
    display: flex;
    justify-content: space-around;
    flex: 2;
    margin-top: 20px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  padding: 20px 20px;
}

.modal-body .description {
  display: flex;
  flex-direction: column;
  text-align: left;
  font-weight: bold;
}

#modal-submit-button {
  height: 40px;
  width: 80px;
  outline: none;
  border: none;
  border-radius: 8px;
  background-color: #1f2937;
  color: white;
  font-weight: bold;
}
</style>

