function generateHashtag(str) {
  console.log(str.length);

  if (str.length > 140 || str.length < 1) {
    return false;
  } else {
    let arr = str.split(" ");
    console.log(arr);
    arr = arr.map((st) => {
      return st[0].toUpperCase() + st.slice(1);
    });

    return `#${arr.join("")}`;
  }
}

generateHashtag("Codewars")