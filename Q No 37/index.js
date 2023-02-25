function make_shirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("The shirt is ".concat(size, " and has the message \"").concat(message, "\" printed on it."));
}
make_shirt();
make_shirt('medium');
make_shirt('small', 'TypeScript is awesome!');
