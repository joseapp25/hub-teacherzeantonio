class ComponentMovetoTop extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML=`

            <link rel="stylesheet" href="style.css">

            <a href="#">
            
                <svg class="move-to-top" viewBox="0 0 1024 1024">
                    <path d="M853.335 170.667H170.668V85.334H853.335V170.667Z"/>
                    <path d="M512.001 238.328L798.171 524.497L737.831 584.837L554.668 401.674L554.668 938.667H469.335V401.674L286.171 584.837L225.831 524.497L512.001 238.328Z"/>
                </svg>

            </a>
            
        `
    }
}

customElements.define('component-move-to-top', ComponentMovetoTop);