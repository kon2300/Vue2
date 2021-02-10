import { createStore } from 'vuex'

export default createStore({
  state: {
    myGender: '',
    myYear: '2000年 (平成12年)',
    myMonth: 1,
    myDate: 1,
    myInsurance1: null,
    myInsurance2: null,
    myInsurance3: null,
    consultationContent: ''
  },
  mutations: {
    changeStateMyGender (state, value) {
      state.myGender = value
    },
    changeStateMyYear (state, value) {
      state.myYear = value
    },
    changeStateMyMonth (state, value) {
      state.myMonth = value
    },
    changeStateMyDate (state, value) {
      state.myDate = value
    },
    changeStateMyInsurance1 (state, value) {
      state.myInsurance1 = value
    },
    changeStateMyInsurance2 (state, value) {
      state.myInsurance2 = value
    },
    changeStateMyInsurance3 (state, value) {
      state.myInsurance3 = value
    },
    changeStateConsultationContent (state, value) {
      state.consultationContent = value
    }
  },
  getters: {
    getStateMyGender: (state) => state.myGender,
    getStateMyYear: (state) => state.myYear,
    getStateMyMonth: (state) => state.myMonth,
    getStateMyDate: (state) => state.myDate,
    getStateMyInsurance1: (state) => state.myInsurance1,
    getStateMyInsurance2: (state) => state.myInsurance2,
    getStateMyInsurance3: (state) => state.myInsurance3,
    getStateConsultationContent: (state) => state.consultationContent
  },
  actions: {
  },
  modules: {
  }
})
