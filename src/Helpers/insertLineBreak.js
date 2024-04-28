function insertLineBreaks(text,lines=50) {
    const words = text.split(' ');
    let result = '';
    let currentLine = '';

    for (let i = 0; i < words.length; i++) {
        if (currentLine.length + words[i].length <= lines) {
            // Si agregar la palabra no supera los 50 caracteres, agregarla a la línea actual
            currentLine += (currentLine ? ' ' : '') + words[i];
        } else {
            // Si agregar la palabra supera los 50 caracteres, agregar una nueva línea
            result += (result ? '\n' : '') + currentLine;
            currentLine = words[i];
        }
    }

    // Agregar la última línea
    result += (result ? '\n' : '') + currentLine;

    return result;
}

// Ejemplo de uso
/*const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const result = insertLineBreaks(text);
console.log(result);*/

export default insertLineBreaks;