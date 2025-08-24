class ComponentFooter extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML=`

            <style>

                .footer-style {
                    background-image: linear-gradient(to right, var(--graycool1000), var(--graycool900));
                    color: var(--graycool0);
                    font-weight: 300;
                    font-size: 16px;
                    padding-top: 32px;
                    padding-bottom: 32px;
                    margin-top: 40px;
                }

                .footer-copyright-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .footer-logo-container {
                    margin-left: 0px;
                }

                .footer-text-container {
                    margin-left: 4px;
                    line-height: 4px;
                }

                .footer-style img {
                    display: flex;
                    justify-content: center;
                }

                .contacts-container {
                    gap: 4px;
                    display: flex;
                    justify-content: center;
                }

                .contacts-link {
                    border-radius: 4px;
                    padding: 4px;
                    cursor: pointer;
                    align-items: center;
                }

                .contacts-link:hover {
                    background-color: var(--cerulean100);
                    transition-duration: 0.2s;
                    box-shadow: 0px 0px 4px var(--cerulean300);
                }

            </style>

            <div class="footer-style">

                <div id="contatos" class="contacts-container">

                    <a href="https://teacherzeantonio.com.br" target="_blank">

                        <img class="contacts-link" src="images/icons/website-icon.svg" alt="Website Logo">

                    </a>

                    <a href="https://wa.me/qr/U2BU7A5QAB3HG1" target="_blank">

                        <img class="contacts-link" src="images/icons/whatsapp-icon.svg" alt="Whatsapp Logo">

                    </a>

                    <a href="https://www.youtube.com/@teacher.zeantonio" target="_blank">

                        <img class="contacts-link" src="images/icons/youtube-icon.svg" alt="YouTube Logo">

                    </a>

                    <a href="https://www.instagram.com/teacher.zeantonio" target="_blank">

                        <img class="contacts-link" src="images/icons/instagram-icon.svg" alt="Instagram Logo">

                    </a>

                    <a href="https://www.tiktok.com/@teacher.zeantonio" target="_blank">

                        <img class="contacts-link" src="images/icons/tiktok-icon.svg" alt="TikTok Logo">
                        
                    </a>

                </div>

                <div class="footer-copyright-container">

                    <div class="footer-logo-container">

                        <img src="images/footer-logo.svg" alt="footer logo">

                    </div>

                    <div class="footer-text-container">

                        <p>Teacher Zé | English Classes</p>
                        <p>®2025 | All Rights Reserved</p>

                    </div>

                </div>

            </div>

        `
    }
}

customElements.define('component-footer', ComponentFooter);