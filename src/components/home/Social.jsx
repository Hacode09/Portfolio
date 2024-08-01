import React from "react";

const Social = () => {
    return (
        <div className="home__social">
            <a
                href="https://wa.me/7667163125"
                className="home__social-icon home__social-icon-whatsapp"
                // className="home__social-icon-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i class="uil uil-whatsapp"></i>
            </a>

            <a
                href="https://www.linkedin.com/in/er-rahul/"
                className="home__social-icon-linkedin"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i class="uil uil-linkedin-alt"></i>
            </a>

            <a
                href="https://github.com/Hacode09"
                className="home__social-icon-github"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i class="uil uil-github-alt"></i>
            </a>
        </div>
    );
};

export default Social;
