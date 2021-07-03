var view_chat = () => {
    const chat_panel = document.getElementById("chat-panel");
    const chat_button = document.getElementById("chat-button");
    if(chat_panel.style.display === "none"){
        chat_panel.style.display = "block";
        chat_button.style.borderBottom = "4px solid #df7000";
    }
    else{
        chat_panel.style.display = "none";
        chat_button.style.borderBottom = "none";
    }
}

var view_login = () => {
    const login_panel = document.getElementById("login-panel");
    const login_background_panel = document.getElementById("login-background-panel");

    login_panel.style.display = "block";
    login_background_panel.style.display = "block";
}

var close_login = () => {
    const login_panel = document.getElementById("login-panel");
    const login_background_panel = document.getElementById("login-background-panel");

    login_panel.style.display = "none";
    login_background_panel.style.display = "none";
}

