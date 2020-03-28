import Vue from 'vue';

Vue.directive('meu-transform',{

    bind(el, binding, vnode) {
        let current = 0;

        el.addEventListener('dblclick', () => {

          let incremento = binding.value || 0;

          let efeito;

            if(!binding || binding.arg == 'rotate')   {


            if(binding.modifiers.reverse) {
                current-=incremento;
            } else {
                current+=incremento;
            }
            efeito = `rotate(${current}deg)`

            }else if (binding.arg == 'scale'){

                efeito = `scale(${incremento})`;
            }

    
          /*
          let animate = false;
          if(binding.value){

                incremento = binding.value.incremento
                animate = binding.value.animate
          }
          */
          el.style.transform= efeito;
          console.log(el)
          if (binding.modifiers.animate) el.style.transition ='tranform 0.5s';
        });
      }
  
  });