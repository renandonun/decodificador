
function criptografar() {
    let input = document.getElementById('container__input').value;
    let output = input.split('');

    for (let i = 0; i < output.length; i++) {
        switch (output[i]) {
            case "a":
                output[i] = "ai";
                break;
            case "e":
                output[i] = "enter";
                break;
            case "i":
                output[i] = "imes";
                break;
            case "o":
                output[i] = "ober";
                break;
            case "u":
                output[i] = "ufat";
                break;
        }
    }

    document.getElementById('container__output').value = output.join('');
    document.getElementById('container__input').value = '';

    inserirBtnCopiar();
}

function descriptografar() {
    let input = document.getElementById('container__input').value;
    let output = input;
    output = output.replaceAll("ai", "a");
    output = output.replaceAll("enter", "e");
    output = output.replaceAll("imes", "i");
    output = output.replaceAll("ober", "o");
    output = output.replaceAll("ufat", "u");

    document.getElementById('container__output').value = output;

    inserirBtnCopiar();
}

function inserirBtnCopiar() {
    const btnCopiar = document.getElementById('btnCopiar');
    const msg = document.getElementById('msg');
    btnCopiar.style.display = 'flex';
    msg.style.display = 'none';
}

function copiar() {
    let texto = document.getElementById('container__output').value;
    navigator.clipboard.writeText(texto);
    document.getElementById('container__output').value = '';
    const btnCopiar = document.getElementById('btnCopiar');
    btnCopiar.style.display = 'none';
    const msg = document.getElementById('msg');
    msg.style.display = 'block';
}