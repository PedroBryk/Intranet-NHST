function searchTable() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let table = document.getElementById("ramalTable");
    let rows = table.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        let setor = rows[i].getElementsByTagName("td")[0]; 
        let ramal = rows[i].getElementsByTagName("td")[1]; 

        if (setor || ramal) {
            let setorText = setor.textContent.toLowerCase();
            let ramalText = ramal.textContent.toLowerCase();

            if (setorText.includes(input) || ramalText.includes(input)) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    }
}