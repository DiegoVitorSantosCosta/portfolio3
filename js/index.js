// class efect{
//     constructor(){
//        this.begin()


//     }
//     begin(){
        
//          let element = document.querySelectorAll('.imagem')
//          let block = document.querySelectorAll('.block')


//          this.hover(element,'mouseover',block)
//         //  let boxs = document.querySelectorAll('.square')
//         //  let boxsLeft = document.querySelectorAll('.left')
//         //  let h1 = document.querySelectorAll('.h1')

//         //  let carousel = document.querySelector('.carousel')

//         //  this.ExtractExecut(element,'off1','on1');
//         //  this.ExtractExecut(boxs,'off1','on1');
//         //  this.ExtractExecut(boxsLeft,'off2','on2');
//         //  this.ExtractExecut(h1,'off2','on2')

//     }

//     // Add Efect
//     addEfect(element,efect){

//         element.classList.add(efect)
//     }
//     // Remove Efect
//     removeEfect(element,efect){
//         element.classList.remove(efect)
//     }

//     hover(el,ev,el2){
//         this.ExtractExecut(el2,'off','on')
//         el.forEach(e=>{
           
//             // this.addEfect(e,'off')
//             e.addEventListener(ev,()=>{
               
//         this.ExtractExecut(el2,'on','off')
               
//               console.log(4444444444);
            
                
//             })
//         })

//     }
//     // para o efeito de aparecer os elementos quando rolar a pagina
//     ExtractExecut(element,off,on){
//         element.forEach(el => {
             
//             this.addEfect(el,off)
           
//             window.addEventListener('scroll',()=>{

//                if(el.getBoundingClientRect().top < window.innerHeight + 50){

//                    this.removeEfect(el,off)
//                    this.addEfect(el,on)
//                }
//            })
            
//          });
//     }
// }

// window.efects = new efect