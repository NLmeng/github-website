function changePage(section, page) {
  const data = sectionsData[section];
  // Prevent invalid page numbers
  if (page < 1 || page > data.totalPages) return;

  data.currentPage = page;
  updatePaginationControls(section);
  loadSection(section, sectionsData);
  populateTOC(section, sectionsData);
}

function updatePaginationControls(section) {
  const data = sectionsData[section];
  document.getElementById("page-number").textContent = data.currentPage;
  document.getElementById("total-pages").textContent = data.totalPages;

  // Update the onclick events for the buttons
  document.getElementById("prev-page").onclick = () =>
    changePage(section, data.currentPage - 1);
  document.getElementById("next-page").onclick = () =>
    changePage(section, data.currentPage + 1);
}
