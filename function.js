const curConvert = () => {
    let curFrom = from.value;    // console.log(curFrom);
    let curTo = to.value;    // console.log(curTo);
    let xmlhttp = new XMLHttpRequest();
    url = "https://api.exchangeratesapi.io/latest?base=" + curFrom;    // console.log(url);
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            let result = xmlhttp.responseText;
            let resultJSON = JSON.parse(result);
            let oneCurUnit = curAmount.value * resultJSON.rates[curTo];
            chnAmount.value = oneCurUnit.toFixed(2);
        }
    }
};
