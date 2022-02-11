const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const header = document.createElement('div');
  const headDate = document.createElement('span');
  const headTitle = document.createElement('h1');
  const headTemp = document.createElement('span');

  header.classList.add('header');
  headDate.classList.add('date');
  headTemp.classList.add('temp');

  headDate.textContent = date;
  headTitle.textContent = title;
  headTemp.textContent = temp;

  header.appendChild(headDate);
  header.appendChild(headTitle);
  header.appendChild(headTemp);

  return header;
}

//console.log(Header());
const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const newHeader = Header('BloomTech Times', 'November 20th, 2021', "80");
  const element = document.querySelector(selector);
  element.appendChild(newHeader);
}

export { Header, headerAppender }
