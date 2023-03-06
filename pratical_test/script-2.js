function autoComplete(text) {

    const content = [
        {
            "name": "Skecther Run",
            "image": "https://m.media-amazon.com/images/I/81XUGG0K3vL._AC_UL640_FMwebp_QL65_.jpg"
        },
        {
            "name": "Skectcher Mountain",
            "image": "https://m.media-amazon.com/images/I/51InNCPY31L._AC_UL640_FMwebp_QL65_.jpg"
        },
        {
            "name": "Olympikus 215",
            "image": "https://m.media-amazon.com/images/I/51yZq9DnVeL._AC_UL640_FMwebp_QL65_.jpg"
        },
        {
            "name": "Puma Rift",
            "image": "https://m.media-amazon.com/images/I/71ZVu4lx7rL._AC_UL640_FMwebp_QL65_.jpg"
        },
        {
            "name": "Rainha",
            "image": "https://m.media-amazon.com/images/I/81iAS7P4K5L._AC_UL640_FMwebp_QL65_.jpg"
        },
        {
            "name": "Olympikus Urbex",
            "image": "https://m.media-amazon.com/images/I/51TXymbvaHL._AC_UL640_FMwebp_QL65_.jpg"
        },
        {
            "name": "Mizuno Wave",
            "image": "https://m.media-amazon.com/images/I/51Ekd-2GeyL._AC_UL640_FMwebp_QL65_.jpg"
        },

    ];

    return content.filter((value) => {
        return value.name.toLowerCase().includes(text.toLowerCase());
    })
}
const field = document.querySelector('.search-field');
const suggestions = document.querySelector('.suggestions');
const item = document.querySelector('.item');
const button = document.querySelector('.btn');

field.addEventListener('input', ({ target }) => {
    const data = target.value
    if (data.length) {
        const values = autoComplete(data)
        suggestions.innerHTML =
            `${values.map((value) => {
                return (`<li onclick="fetch(this);"><span><img width="100" src=\"${value.image}\" />${value.name}</span></li>`);
            }).join('')}`;
    } else {
        suggestions.innerHTML = "";
        return;
    }
});

button.addEventListener('click', ({ target }) => {
    alert(`Search made for ${field.value}`)
});

function fetch(target) {
    const data = target.children[0].innerText;
    field.value = data;
    suggestions.innerHTML = "";
};