const organization = {
    namespaced: true,
    state: {
        selectedType: 'home'
    },
    mutations: {
        setSelectedType(state, selectedType) {
            state.selectedType = selectedType;
        }
    },
    actions: {
    },
    modules: {
    }
}

export default organization;