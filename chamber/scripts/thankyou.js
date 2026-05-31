const userInfo = new URLSearchParams(window.location.search);
console.log(userInfo);

console.log(userInfo.get("first"));
console.log(userInfo.get("last"));
console.log(userInfo.get("email"));
console.log(userInfo.get("phone"));
console.log(userInfo.get("organization"));
console.log(userInfo.get("membership"));

document.querySelector("#submission").innerHTML = `
<p>Membership for ${userInfo.get("first")} ${userInfo.get("last")}</p>
<p>Email: ${userInfo.get("email")}</p>
<p>Phone: ${userInfo.get("phone")}</p>
<p>Business/Organization: ${userInfo.get("organization")}</p>
<p>Membership Level: ${userInfo.get("membership")}</p>
`
