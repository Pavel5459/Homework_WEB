const yourName = prompt(`Enter your name`, ``);
const yourAge = prompt(`Enter your age`, ``);

    if (yourAge < 18) {
        alert('You are not allowed to visit this website');
    }
    else if (yourAge >= 18 && yourAge <= 22) {
        let res = confirm('Are you sure you want to continue?');
        if (res === true) {
            alert(`Welcome ${yourName}`);
    }
        else {
            alert(`You are not allowed to visit this website`);
    }
    }
    else if (yourAge > 22) {
        alert(`Welcome ${yourName}`);
    }