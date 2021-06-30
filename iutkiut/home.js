var view_chat = () => {
    const chat_panel = document.getElementById("chat-panel");
    if(chat_panel.style.display === "none"){
        chat_panel.style.display = "block";
    }
    else{
        chat_panel.style.display = "none";
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

var view_community = () => {
    const login_panel = document.getElementById("login-panel");

}