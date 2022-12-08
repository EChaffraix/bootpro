function process() {
    const items = document.getElementsByClassName("process");
    const internal = container => {
        const separator = container.getAttribute("separator");
        const items = container.getElementsByClassName("hidden");
        let value = "";
        for (let i = 0; i < items.length; i++) {
            value += items[i].innerText;
            if (i < items.length - 1) {
                value += separator;
            }
        }
        const link = container.getElementsByTagName("a")[0];
        const href = link["href"];
        console.log("Setting value : " + value);
        link.innerText = value;
        value = href + value;
        console.log("Setting href : " + value);
        link["href"] = value;


        while (items.length > 0){
            container.removeChild(items[0]);
        }
    };

    for (let item of items) {
        internal(item);
    }
}