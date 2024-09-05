import Highway from '@dogstudio/Highway';

import Tween from 'grap';

class Fade extends Highway.Transition{
    in( {from, to,done}){
        from.remove();

        Tween.fromTo(to, 1, {opacity:0},  {opacity:1, onComplete: done})
    }
    out({ from, done}){
        Tween.fromTo(from, 0, {opacity:1}, {opacity:0, onComplete: done})
    }
}

export default Fade;