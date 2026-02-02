

let calc = () => {
    let date = document.getElementById("dt")
    let year = document.getElementById("years")
    let month = document.getElementById("months")
    let day = document.getElementById("days")

    let dob = new Date(date.value)
    let current_date = new Date("2026-02-01")

    if (dob.getMonth() == current_date.getMonth()) {
        if (dob.getDate() == current_date.getDate()) {
            year.innerText = current_date.getFullYear() - dob.getFullYear()
        }
        else {
            year.innerText = current_date.getFullYear() - dob.getFullYear()
        }
    }

    else if (dob.getMonth() != current_date.getMonth()) {
        if (dob.getDate() != current_date.getDate()) {
            year.innerText = current_date.getFullYear() - dob.getFullYear() - 1
            if ((current_date.getDate() - dob.getDate())<0) {
                let comp = Math.abs(current_date.getMonth() - dob.getMonth())
                month.innerText = (12 - comp)
                day.innerText = (current_date.getdate()+current_date.getDate(current_date.getMonth()) - dob.getDate())
            }



        }

    }
}