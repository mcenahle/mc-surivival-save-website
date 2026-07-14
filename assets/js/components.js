function loadComponent(id, file) {
  fetch(file)
    .then((res) => res.text())
    .then((data) => {
      document.querySelector(id).innerHTML = data;
    });
}

// 加载头尾
loadComponent("#header", "/components/header.html");
loadComponent("#footer", "/components/footer.html");

// 动态加载第三方 JS
function loadScript(src) {
  const script = document.createElement("script");
  script.src = src;
  document.body.appendChild(script);
}

// 复制存档种子

function copySaveSeed() {
  navigator.clipboard.writeText(document.getElementById("seed").innerText);

  document.getElementById("copy-btn").innerHTML =
    "<iconify-icon icon='material-symbols:check-rounded'></iconify-icon> 已复制";

  setTimeout(function () {
    document.getElementById("copy-btn").innerHTML =
      "<iconify-icon icon='si:copy-line'></iconify-icon> 复制";
  }, 2000);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js");

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js",
);

loadScript(
  "https://code.iconify.design/iconify-icon/3.0.0/iconify-icon.min.js",
);
