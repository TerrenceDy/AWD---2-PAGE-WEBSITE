function submitForm(){

    const userName = document.getElementById("userName").value;
    const age = document.getElementById("age").value;

    if (!userName || !age){
        alert("PLEASE INPUT ON ALL.");
        return;
    }

    localStorage.setItem("userName", userName);
    localStorage.setItem("age", age);

    window.location.href = "page2Index.html";
}