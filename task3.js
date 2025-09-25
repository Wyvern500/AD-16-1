window.onload = function() {
    const links = document.querySelectorAll("a");
    alert("hay" + links.length + " links, el primero es: " + links[0] + " y el ultimo es: " + links[links.length - 1]);
}