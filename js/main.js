
$content = document.querySelector(".content"),
    $form = document.querySelector(".form-post"),
    $template = document.getElementById("content__container-id"),
    $templateContent = document.querySelector(".content__block-text"),
    $fragment = document.createDocumentFragment();

const getAll = async () => {
    try {
        let res = await fetch("http://localhost:5000/postdb"),
            json = await res.json();

        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        console.log(json);
        json.forEach(el => {
            $templateContent.textContent = el.postcontent;
            console.log($template.content);
            $template.querySelector(".edit").dataset.id = el.id;
            $template.querySelector(".edit").dataset.postcontent = el.postcontent;
            $template.querySelector(".delete").dataset.id = el.id;

            let $clone = document.importNode($template, true);
            /* $fragment.appendChild($clone); */
            $fragment.insertBefore($clone, $fragment.firstChild);
        });

        /* $content.appendChild($fragment); */
        $content.appendChild($fragment);
    } catch (err) {
        let message = err.statusText;
        $content.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
    }
}
document.addEventListener("DOMContentLoaded", getAll);

document.addEventListener("submit", async e => {
    if (e.target === $form) {
        e.preventDefault();

        if (!e.target.id.value) {
            //Create - POST
            try {
                let options = {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json; charset=utf-8"
                    },
                    body: JSON.stringify({
                        postcontent: e.target.newpost.value
                    })
                },
                    res = await fetch("http://localhost:5000/postdb", options),
                    json = await res.json();

                if (!res.ok) throw { status: res.status, statusText: res.statusText };

                location.reload();
            } catch (err) {
                let message = err.statusText || "Error============Error";
                $form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
            }
        } else {
            //Update - PUT
            try {
                let options = {
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json; charset=utf-8"
                    },
                    body: JSON.stringify({
                        postcontent: e.target.newpost.value
                    })
                },
                    res = await fetch(`http://localhost:5000/postdb/${e.target.id.value}`, options),
                    json = await res.json();

                if (!res.ok) throw { status: res.status, statusText: res.statusText };

                location.reload();
            } catch (err) {
                let message = err.statusText || "Error---------------Error";
                $form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
            }
        }
    }
});
document.addEventListener("click", async e => {
    if (e.target.matches(".edit")) {
        $form.newpost.value = e.target.dataset.postcontent;
        $form.id.value = e.target.dataset.id;
    }

    if (e.target.matches(".delete")) {
        let isDelete = confirm(`This will remove from your timeline. ${e.target.dataset.id}?`);

        if (isDelete) {
            //Delete - DELETE
            try {
                let options = {
                    method: "DELETE",
                    headers: {
                        "Content-type": "application/json; charset=utf-8"
                    }
                },
                    res = await fetch(`http://localhost:5000/postdb/${e.target.dataset.id}`, options),
                    json = await res.json();

                if (!res.ok) throw { status: res.status, statusText: res.statusText };

                location.reload();
            } catch (err) {
                let message = err.statusText || "Error-----------------Error-";
                alert(`Error ${err.status}: ${message}`);
            }
        }
    }
})