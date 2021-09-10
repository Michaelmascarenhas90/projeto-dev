import React from "react";

function Header() {
    return (
        <header className="header">
            <div className="toolbar">
                <div>
                    <span className="logo">Michael Mascarenhas</span>
                </div>
                <div>
                    <button>Novo Post</button>
                    <span>img1</span>
                    <span>img2</span>
                </div>
            </div>
        </header>
    )
}

export default Header;