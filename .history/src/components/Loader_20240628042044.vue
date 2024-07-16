<template>
    
    <div v-if="ShowLoader" class="loader">
        <div class="lds-ripple"><div></div><div></div></div>
        <div class="text-center px-2">{{ text }}</div>
    </div>
    

</template>
<script>
import { mapState } from 'vuex'
export default{
    props:{
        text:{
            required:false,
            type:String,
            default:'Loading...'

        }
    },
    computed:{
        ...mapState({
            ShowLoader:(state)=>state.ShowLoader
        })
    }
}
</script>
<style scoped>
.loader{
    position: fixed;
    top: 30%;
    width: 20%;
    margin:auto;
    background: #fff;
    box-shadow: 0px 0px 9px -2px #000;
    z-index: 999;
    left: 0;
    right:0;
    text-align: center;
    padding: 2px;
}

.lds-ripple,
.lds-ripple div {
  box-sizing: border-box;
}
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid currentColor;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 8px;
    height: 8px;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 8px;
    height: 8px;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 8px;
    height: 8px;
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    width: 80px;
    height: 80px;
    opacity: 0;
  }
}


</style>