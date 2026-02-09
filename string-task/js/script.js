let submit = () => {
    let uname = document.getElementById("uname")
    let un = uname.value

    let error=document.getElementById("error")

    //validation
    if (uname.value === ""){
        error.innerText="Fill The box"
        // error.style.border
        error.style.color="rgb(254, 0, 0)"
        uname.style.border="1px solid red"
        return
    }
    else{
        error.innerText=""
        
        uname.style.border="none"
        uname.style.borderBottom="1px solid white"
    }

    //length
    let len = document.getElementById("name_length")
    len.innerText = un.length

    //cap
    let caps_count = document.getElementById("caps_count")

    //samll
    let small_count = document.getElementById("small_count")

    //spl
    let spl_count = document.getElementById("spl_count")

    //num
    let num_count = document.getElementById("num_count")


    let c_count = 0
    let s_count = 0
    let sp_count = 0
    let n_count = 0

    //un=dee1Apak
    //"1"=49
    //A=65

    for (let i = 0; i < un.length; i++) {
        

        let letter = un.charCodeAt(i)

        if (letter >= 65 && letter <= 90) {
            c_count++
        }

        else if (letter >= 97 && letter <= 122) {
            s_count++
        }

        else if (letter >= 48 && letter <= 57) {
            n_count++
        }

        else {
            sp_count++
        }

    }

    //caps
    caps_count.innerText = c_count
    //small
    small_count.innerText = s_count
    //spl
    spl_count.innerText = sp_count
    //num
    num_count.innerText = n_count

    //empty
    uname.value = ""



}