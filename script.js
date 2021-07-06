document.getElementById("run").addEventListener("click", function (){


    const day = document.getElementById("dob-day").value;
    const month = document.getElementById("dob-month").value;
    const year = document.getElementById("dob-year").value;


    function getAge(day, month, year) {
        const today = new Date(2021, 7, 6);
        const birthDate = new Date(day, month, year);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthOverlap  = today.getMonth() - birthDate.getMonth();
        if (monthOverlap < 0 || (monthOverlap === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        alert (age);
    }
    getAge(day, month, year)
    }
)