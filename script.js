const text = Array.from(document.querySelectorAll(".text"));
const input = Array.from(document.querySelectorAll("input"));

//* we can also use the css pseudop elements to select the checked checkbox and change the adjancent element style and add the functionality of checking/unchecking the checkboxes in javascript.

//TODO we can create a function to only add the checking function and use css for changing the style of the text.It'd be an easy way and fewer line of code.

let start;
function handleChange() {
    let end;
    if (start == undefined) {
        for (y = 0; y < input.length; y++) {
            if (input[y].checked == true) {
                start = y;
                console.log(start);
                break;
            }
        }
    }
    if (this.checked == true) {
        end = input.indexOf(this);
    }
    if (end >= start) {
        for (x = start; x <= end; x++) {
            input[x].checked = true;
            text[x].style["text-decoration"] = "line-through";
        }
    } else if (end == undefined) {
        end = start;
    } else {
        console.log(end, start);
        for (x = end; x <= start; x++) {
            input[x].checked = true;
            // text[x].style["text-decoration"] = "line-through";
        }
    }
    if (this.checked == false) {
        text[input.indexOf(this)].style["text-decoration"] = "none";
    }
    if (input.every((x) => x.checked == false)) {
        start = undefined;
    }
}
input.forEach((x) => x.addEventListener("change", handleChange));
