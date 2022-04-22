import React from "react";
import st from './AboutPage.module.scss';

const AboutPage = () => {
    return (
        <div className={st.about}>
            <div className={st.about__header}>
                <h1>About</h1>
                <hr />
                <div className={st.about__body}>
                    <p>This site was developed to introduce the
                        characters and universe of the famous multi-series
                        "Rick and Morty". Here you can search for character 
                        cards of this universe, add them to your "favorite 
                        characters" list. The cards contain all the information 
                        about the characters. In order to add characters to the 
                        list of "favorite characters" you need to log in to your 
                        account or register.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;