class ComponentFooter extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML=`

            <link rel="stylesheet" href="style.css">

            <div class="footer-style">

                <div class="contacts-container">

                    <a href="https://teacherzeantonio.com.br" target="_blank">

                        <img class="contacts-link" src="images/icons/website-icon.svg" alt="Website Logo">

                    </a>

                    <a href="https://wa.me/qr/U2BU7A5QAB3HG1" target="_blank">

                        <img class="contacts-link" src="images/icons/whatsapp-icon.svg" alt="Whatsapp Logo">

                    </a>

                    <a href="https://www.youtube.com/@phoneticando" target="_blank">

                        <svg class="contacts-link" viewBox="0 0 1024 1024">
                            <g clip-path="url(#clip0_3507_1895)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M931.839 386.986C929.279 352.853 925.439 325.973 919.892 305.92C909.225 267.52 884.479 242.773 846.079 232.106C802.132 220.16 690.772 213.333 511.999 213.333L444.159 215.893C397.225 215.893 346.452 217.173 290.985 220.16C234.665 222.72 197.972 226.56 177.919 232.106C139.519 242.773 114.772 267.52 104.105 305.92C92.1587 349.866 85.332 418.56 85.332 512L87.892 547.84C87.892 573.44 89.172 602.88 92.1587 637.013C94.7187 671.146 98.5587 698.026 104.105 718.08C114.772 756.48 139.519 781.226 177.919 791.893C221.865 803.84 333.225 810.666 511.999 810.666L579.839 808.106C626.772 808.106 677.545 806.826 733.012 803.84C789.332 801.28 826.025 797.44 846.079 791.893C884.479 781.226 909.225 756.48 919.892 718.08C931.839 674.133 938.665 605.44 938.665 512L936.105 476.16C936.105 450.56 934.825 421.12 931.839 386.986ZM648.105 512L426.665 640V384L648.105 512Z"/>
                            </g>
                        </svg>

                    </a>

                    <a href="https://www.instagram.com/phoneticando" target="_blank">

                        <img class="contacts-link" src="images/icons/instagram-icon.svg" alt="Instagram Logo">

                    </a>

                    <a href="https://www.tiktok.com/@phoneticando" target="_blank">

                        <svg class="contacts-link" viewBox="0 0 1024 1024">
                            <path d="M663.035 128C663.023 172.264 679.096 215.024 708.262 248.32C766.288 315.307 846.502 311.467 846.502 311.467V443.307C780.682 443.42 716.496 422.82 663.035 384.427V652.8C663.035 787.2 554.235 896 420.262 896C295.248 896 177.488 794.88 177.488 652.8C177.488 506.88 306.342 392.533 453.542 412.16V546.987C380.582 524.373 309.755 579.413 309.755 652.8C309.755 714.24 360.102 763.733 420.688 763.733C449.337 763.729 476.866 752.608 497.478 732.712C518.091 712.816 530.178 685.697 531.195 657.067V128H663.035Z"/>
                        </svg>
                        
                    </a>

                </div>

                <div class="footer-copyright-container">

                    <div class="footer-logo-container">

                        <img src="images/footer-logo.svg" alt="footer logo">

                    </div>

                    <div class="footer-text-container">

                        <p>Zé Antonio — Phoneticando</p>
                        <p>&#174;2026 | All Rights Reserved</p>

                    </div>

                </div>

            </div>

        `
    }
}

customElements.define('component-footer', ComponentFooter);