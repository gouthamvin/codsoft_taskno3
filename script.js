document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));

    buttons.map(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.getAttribute('data-value');
            if (value === 'AC') {
                display.innerText = '';
            } else if (value === 'C') {
                display.innerText = display.innerText.slice(0, -1);
            } else if (value === '=') {
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error';
                }
            } else {
                display.innerText += value;
            }
        });
    });
});
