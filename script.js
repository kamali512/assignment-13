const seconds = () => {
    const value = document.getElementById("hours").value;
    //   alert(value);
    if (value == "") {
      alert("Please enter value in hours");
    } else {
      const rvalue = value * 3600;
      document.getElementById("secresult").innerText = `
   ${value} hours which is equal ${rvalue} seconds
  `;
      document.getElementById("hours").value = "";
      return rvalue;
    }
  };
  const days = () => {
    const value = document.getElementById("years").value;
    //   alert(value);
    if (value == "") {
      alert("Please enter value in years");
    } else {
      const rvalue = value * 365;
      document.getElementById("dayresult").innerText = `
     ${value} years which is equal ${rvalue} days
    `;
      document.getElementById("years").value = "";
      return rvalue;
    }
  };
  const compare = () => {
    const value1 = document.getElementById("s1").value;
    const value2 = document.getElementById("s2").value;
    //   alert(value);
    if (value1 == "" || value2 == "") {
      alert("Please enter both string values");
    } else {
      const com = (v1, v2) => {
        return v1.length === v2.length;
      };
      const result = com(value1, value2);
      // alert(result);
      document.getElementById("comresult").innerText = ` string 1 = ${value1}
       and string 2 =${value2} and result is ${result}
       `;
      document.getElementById("s1").value = "";
      document.getElementById("s2").value = "";
    }
  };
  const leap = () => {
    const value = document.getElementById("year").value;
    if (value == "") {
      alert("Enter year for checking leap year");
    } else {
      const result = checkleap(value);
      document.getElementById("leapresult").innerText = `${value} is ${result}`;
      document.getElementById("year").value = "";
    }
  };
  
  const checkleap = (v) => {
    if (v % 4 === 0) {
      return "leap year";
    } else {
      return "not a leap year";
    }
  };
  const zerocarona = () => {
    const rv = document.getElementById("re").value;
    const nv = document.getElementById("ne").value;
    const av = document.getElementById("act").value;
    if (rv == "" || nv == "" || av == "") {
      alert("all fields are required");
    } else {
      if (nv > rv) {
        alert("No of recovered should be greater than new cases");
      } else {
        const result = zero(rv, nv, av);
        document.getElementById(
          "caronaresult"
        ).innerText = `carona will be zero in ${result} days`;
        document.getElementById("re").value = "";
        document.getElementById("ne").value = "";
        document.getElementById("act").value = "";
      }
    }
  };
  const zero = (v1, v2, v3) => {
    const result = v3 / (v1 - v2);
    // alert(result);
    return Math.ceil(result);
  };
  const invert = () => {
    const ele = document.getElementById("ie").value;
    if (ele > 0) {
      const array = [ele];
      const inarr = [ele];
  
      for (let i = 0; i < ele; i++) {
        const e = i + 1;
        const v = prompt(`Enter number value for element ${e}`);
        array[i] = Number(v);
  
        inarr[i] = array[i] * -1;
      }
      document.getElementById("iresult").innerText =
        "Before invertion array = " +
        array.toString() +
        "  After invertion array = " +
        inarr.toString();
      document.getElementById("ie").value = "";
      return inarr;
    } else {
      alert("no of elements should be greater than zero");
    }
  };
  const stri = () => {
    const ele = document.getElementById("se").value;
    if (ele > 0) {
      const array = [ele];
  
      for (let i = 0; i < ele; i++) {
        const e = i + 1;
        const v = prompt(`Enter number value for element ${e}`);
        array[i] = v.toString();
      }
      document.getElementById("sresult").innerText = `${array}`;
      document.getElementById("se").value = "";
      return array;
    } else {
      alert("no of elements should be greater than zero");
    }
  };
  