const userInfo = new URLSearchParams(window.location.search);
console.log(userInfo);

console.log(userInfo.get("first"));
console.log(userInfo.get("last"));
console.log(userInfo.get("email"));
console.log(userInfo.get("organization"));


document.querySelector("#submission").innerHTML = `
<p>Application for ${userInfo.get("first")} ${userInfo.get("last")}</p>
<p>Email: ${userInfo.get("email")}</p>
<p>Business/Organization: ${userInfo.get("organization")}</p>
`