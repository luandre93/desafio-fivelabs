import { observable } from 'mobx';
import image01 from "../assets/veiculos/1.png"
import image02 from "../assets/veiculos/2.png"
import image03 from "../assets/veiculos/3.png"
import image04 from "../assets/veiculos/4.png"
import image05 from "../assets/veiculos/5.png"
import image06 from "../assets/veiculos/6.png"
import image07 from "../assets/veiculos/7.png"
import image08 from "../assets/veiculos/8.png"
import image09 from "../assets/veiculos/9.png"
import image10 from "../assets/veiculos/10.png"

class ImagesStore {
    @observable imagens = [
        image01,
        image02,
        image03,
        image04,
        image05,
        image06,
        image07,
        image08,
        image09,
        image10
    ];
}
const imagensStore = new ImagesStore();
export default imagensStore;