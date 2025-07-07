import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom/client";
function AvatarItem(_a) {
    var name = _a.name, _b = _a.status, status = _b === void 0 ? 'offline' : _b, _c = _a.size, size = _c === void 0 ? 64 : _c;
    var iconPath = "/icons/status-".concat(status, ".svg");
    var statusMessage = '';
    switch (status) {
        case 'offline':
            statusMessage = '오프라인';
            break;
        case 'online':
            statusMessage = '온라인';
            break;
        case 'dont-disturb':
            statusMessage = '방해금지';
            break;
        case 'away':
            statusMessage = '자리비움';
            break;
    }
    var label = "".concat(name, ": ").concat(statusMessage);
    return (React.createElement("li", { className: "avatar" },
        React.createElement("figure", { "aria-lable": label, title: label },
            React.createElement("div", { className: "cover" },
                React.createElement("img", { src: "/avatar/".concat(name, ".png"), alt: "" })),
            React.createElement("figcaption", null,
                React.createElement("img", { src: iconPath, alt: "" })))));
}
function AvatarList() {
    return (React.createElement("ul", { className: "avatarList" },
        React.createElement(AvatarItem, { name: "\uB9F9\uAD6C", status: "offline" }),
        React.createElement(AvatarItem, { name: "\uC9F1\uAD6C", status: "dont-disturb" }),
        React.createElement(AvatarItem, { name: "\uCCA0\uC218", status: "online" }),
        React.createElement(AvatarItem, { name: "\uC720\uB9AC", status: "away" }),
        React.createElement(AvatarItem, { name: "\uD6C8\uC774", status: "offline" })));
}
var container = document.getElementById('app');
if (container) {
    var reactDomRoot = ReactDOM.createRoot(container);
    reactDomRoot.render(React.createElement(AvatarList, null));
}
