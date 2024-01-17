const totalPages = 10; // total number of pages
let currentPage = 1; // initial

// Array of content for each page
const pageContent = [
  "This is the content for the first page.",
  "This is the content for the second page.",
  "This is the content for the third page.",
  "This is the content for the fourth page.",
  "This is the content for the fiveth page.",
  "This is the content for the sixth page.",
  "This is the content for the seventh page.",
  "This is the content for the eight page.",
  "This is the content for the nineth page.",
  "This is the contnet for the last page"
];

function renderPagination() {
  // function to render the page
  const container = document.getElementById("pagination-container");
  container.innerHTML = "";

  const paginationList = document.createElement("ul");
  paginationList.className = "pagination";

  // previous button
  const prevButton = createPaginationButton("Previous", handlePageChange);
  prevButton.classList.add("pagination-button");
  paginationList.appendChild(prevButton);

  // for page numbers
  for (let i = 1; i <= totalPages; i++) {
    const pageItem = document.createElement("li");
    pageItem.className = "pagination-item";
    pageItem.textContent = i;

    // event listener to handle the page change when a page number is clicked
    pageItem.addEventListener("click", () => handlePageChange(i));

    // active class to the current page
    if (i === currentPage) {
      pageItem.classList.add("active");
    }

    // append the page number to the list
    paginationList.appendChild(pageItem);
  }

  // next button
  const nextButton = createPaginationButton("Next", handlePageChange);
  nextButton.classList.add("pagination-button");
  paginationList.appendChild(nextButton);

  // append the pagination list to the container
  container.appendChild(paginationList);

  // Display content for the current page
  const contentContainer = document.createElement("div");
  contentContainer.className = "content-container";
  const currentPageContent = pageContent[currentPage - 1];
  const paragraph = document.createElement("p");
  paragraph.textContent = currentPageContent;

  contentContainer.appendChild(paragraph);
  container.appendChild(contentContainer);
}

// function to create a pagination button
function createPaginationButton(label, onClick) {
  const button = document.createElement("li");
  button.textContent = label;

  // onclick here
  button.addEventListener("click", () => onClick(label));
  return button;
}

// function to handle page change
function handlePageChange(label) {
  if (label === "Previous" && currentPage > 1) {
    currentPage--;
  } else if (label === "Next" && currentPage < totalPages) {
    currentPage++;
  } else {
    currentPage = parseInt(label);
  }

  // re-render the pagination
  renderPagination();

  console.log(`Fetching data for page ${currentPage}`);
}

renderPagination();
