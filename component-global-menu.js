class ComponentGlobalMenu extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML=`

            <link rel="stylesheet" href="style.css">

            <div class="globalmenu">

                <a href="index.html">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path d="M21.0806 3.96429V0.75L2.91797 3.96429H21.0806Z"/>
                        <path d="M17.7446 16.8214L21.0806 5.25H2.91797V11.6786H6.25397L2.91797 23.25H21.0806V16.8214H17.7446Z"/>
                    </svg>
                </a>

                <a href="javascript:history.back()">
                    <svg width="7" height="12" viewBox="0 0 7 12">
                        <path d="M7 11.0255L1.95617 6L7 0.974525L6.02192 0L0 6L6.02192 12L7 11.0255Z"/>
                    </svg>
                </a>

                <a href="javascript:history.forward()">
                    <svg width="7" height="12" viewBox="0 0 7 12">
                        <path d="M0 0.974524L5.04383 6L0 11.0255L0.978083 12L7 6L0.978083 0L0 0.974524Z"/>
                    </svg>
                </a>

                <a href="lessons.html">
                    Lessons
                </a>

                <a href="ipa-chart.html">
                    Phonetic
                </a>

                <a href="tools.html">
                    Tools
                </a>

            </div>

        `
    }
}

customElements.define('component-global-menu', ComponentGlobalMenu);