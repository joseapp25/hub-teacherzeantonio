class ComponentGlobalMenu extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML=`

            <link rel="stylesheet" href="style.css">

            <div class="global-menu">

                <a href="index.html">

                    <svg class="global-menu-logo" viewBox="0 0 1024 1024">
                        <path d="M899.471 169.143V32L124.531 169.143H899.471Z"/>
                        <path d="M757.135 717.714L899.471 224H124.531V498.286H266.867L124.531 992H899.471V717.714H757.135Z"/>
                    </svg>

                </a>

                <a href="javascript:history.back()">

                    <svg class="global-menu-chevron" viewBox="0 0 1024 1024">
                        <path d="M712.835 823.161L401.672 511.997L712.835 200.834L652.495 140.494L280.992 511.997L652.495 883.501L712.835 823.161Z"/>
                    </svg>

                </a>

                <a href="javascript:history.forward()">

                    <svg class="global-menu-chevron" viewBox="0 0 1024 1024">
                        <path d="M311.168 200.84L622.331 512.003L311.168 823.167L371.508 883.507L743.011 512.003L371.508 140.5L311.168 200.84Z"/>
                    </svg>

                </a>

                <a href="lessons.html">

                    Lessons

                </a>

                <a href="phonetics.html">

                    Phonetics

                </a>

            </div>

        `
    }
}

customElements.define('component-global-menu', ComponentGlobalMenu);