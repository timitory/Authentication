import mutations from "./mutations";
import actions
 from "./actions";

export default{
    namespaced:true,
    state: {
    cartItems: []
  },
  mutations,
  getters,
  actions
};
