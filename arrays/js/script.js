
let student_list = []



let add_stname = () => {
    let sn = document.getElementById("sname")
    let tableBody = document.getElementById("table_body");
    student_list.push(sn.value)

    let row = document.createElement("tr")

    let col_1 = document.createElement("td")
    let col_2 = document.createElement("td")

    col_1.innerText = student_list.length
    

    col_2.innerText = student_list[student_list.length - 1]

    row.append(col_1)
    row.append(col_2)

    tableBody.append(row)
    
    sn.value = " "
}

