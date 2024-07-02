//your JS code here. If required.
// //your JS code here. If required.
let form = document.querySelector("form");
let bookList = document.getElementById("book-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  const inertRow = document.createElement("tr");
  inertRow.innerHTML = `<td>${title}</td>
                        <td>${author}</td>
                        <td>${isbn}</td>
						<td><span class="delete btn btn-danger">X</span></td>
`;
  bookList.appendChild(inertRow);
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";

  bookList.addEventListener('click', (e)=>{
    if(e.target.classList.contains('delete')){
        e.target.parentNode.parentNode.remove()
    }
  })
});
