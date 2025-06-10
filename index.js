// Liste möglicher Fehlermeldungen mit zugehöriger Feld-ID
const errorMessages = {
  name: { message: 'Bitte geben Sie einen Vornamen ein.', fieldName: 'name' },
  nameInvalid: { message: 'Bitte geben Sie einen gültigen Vornamen ein.', fieldName: 'name' },
  surname: { message: 'Bitte geben Sie einen Nachnamen ein.', fieldName: 'surname' },
  surnameInvalid: { message: 'Bitte geben Sie einen gültigen Nachnamen ein.', fieldName: 'surname' },
  email: { message: 'Bitte geben Sie eine E-Mail-Adresse ein.', fieldName: 'email' },
  emailInvalid: { message: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.', fieldName: 'email' },
  salary: { message: 'Bitte geben Sie ein Gehalt ein.', fieldName: 'salary' },
  salaryInvalid: { message: 'Bitte geben Sie ein gültiges Gehalt ein.', fieldName: 'salary' },
  department: { message: 'Bitte geben Sie eine Abteilung ein.', fieldName: 'department' },
  departmentInvalid: { message: 'Bitte geben Sie eine gültige Abteilung ein.', fieldName: 'department' },
  position: { message: 'Bitte geben Sie eine Position ein.', fieldName: 'position' },
  positionInvalid: { message: 'Bitte geben Sie eine gültige Position ein.', fieldName: 'position' },
};
const departmentOptions = [];
// Hardcoded Array von Mitarbeitern
let fullEmployeeList = [
  {
    id: 1,
    name: 'Anna',
    surname: 'Müller',
    email: 'anna.mueller@example.com',
    salary: 45000.0,
    department: 'Marketing',
    position: 'Marketing Specialist',
  },
  {
    id: 2,
    name: 'Jonas',
    surname: 'Schmidt',
    email: 'jonas.schmidt@example.com',
    salary: 52000.0,
    department: 'Vertrieb',
    position: 'Sales Consultant',
  },
  {
    id: 3,
    name: 'Laura',
    surname: 'Fischer',
    email: 'laura.fischer@example.com',
    salary: 48000.0,
    department: 'Personalwesen',
    position: 'HR Coordinator',
  },
  {
    id: 4,
    name: 'Maximilian',
    surname: 'Becker',
    email: 'max.becker@example.com',
    salary: 60000.0,
    department: 'IT',
    position: 'Software Engineer',
  },
  {
    id: 5,
    name: 'Sophie',
    surname: 'Klein',
    email: 'sophie.klein@example.com',
    salary: 47000.0,
    department: 'Finanzen',
    position: 'Financial Analyst',
  },
  {
    id: 6,
    name: 'Tim',
    surname: 'Wagner',
    email: 'tim.wagner@example.com',
    salary: 51000.0,
    department: 'IT',
    position: 'System Administrator',
  },
  {
    id: 7,
    name: 'Lena',
    surname: 'Neumann',
    email: 'lena.neumann@example.com',
    salary: 49500.0,
    department: 'Marketing',
    position: 'Content Manager',
  },
  {
    id: 8,
    name: 'Felix',
    surname: 'Schneider',
    email: 'felix.schneider@example.com',
    salary: 53000.0,
    department: 'Vertrieb',
    position: 'Key Account Manager',
  },
  {
    id: 9,
    name: 'Mia',
    surname: 'Weber',
    email: 'mia.weber@example.com',
    salary: 47000.0,
    department: 'Finanzen',
    position: 'Budget Analyst',
  },
  {
    id: 10,
    name: 'Leon',
    surname: 'Hoffmann',
    email: 'leon.hoffmann@example.com',
    salary: 62000.0,
    department: 'IT',
    position: 'DevOps Engineer',
  },
  {
    id: 11,
    name: 'Clara',
    surname: 'Krüger',
    email: 'clara.krueger@example.com',
    salary: 49000.0,
    department: 'Personalwesen',
    position: 'Talent Acquisition Specialist',
  },
  {
    id: 12,
    name: 'Ben',
    surname: 'Mayer',
    email: 'ben.mayer@example.com',
    salary: 54000.0,
    department: 'Vertrieb',
    position: 'Sales Representative',
  },
  {
    id: 13,
    name: 'Nina',
    surname: 'Hartmann',
    email: 'nina.hartmann@example.com',
    salary: 46500.0,
    department: 'Marketing',
    position: 'Brand Strategist',
  },
  {
    id: 14,
    name: 'Tom',
    surname: 'König',
    email: 'tom.koenig@example.com',
    salary: 50500.0,
    department: 'IT',
    position: 'Frontend Developer',
  },
  {
    id: 15,
    name: 'Eva',
    surname: 'Wolf',
    email: 'eva.wolf@example.com',
    salary: 48000.0,
    department: 'Personalwesen',
    position: 'HR Generalist',
  },
  {
    id: 16,
    name: 'Julian',
    surname: 'Bauer',
    email: 'julian.bauer@example.com',
    salary: 55000.0,
    department: 'Finanzen',
    position: 'Accounting Manager',
  },
  {
    id: 17,
    name: 'Emily',
    surname: 'Scholz',
    email: 'emily.scholz@example.com',
    salary: 46000.0,
    department: 'Marketing',
    position: 'Social Media Manager',
  },
  {
    id: 18,
    name: 'Paul',
    surname: 'Lorenz',
    email: 'paul.lorenz@example.com',
    salary: 52500.0,
    department: 'Vertrieb',
    position: 'Business Development Manager',
  },
  {
    id: 19,
    name: 'Marie',
    surname: 'Franke',
    email: 'marie.franke@example.com',
    salary: 49500.0,
    department: 'Personalwesen',
    position: 'Recruiter',
  },
  {
    id: 20,
    name: 'Noah',
    surname: 'Jung',
    email: 'noah.jung@example.com',
    salary: 61000.0,
    department: 'IT',
    position: 'Backend Developer',
  },
];
let currEntries = [];
let currentFilter = '';
let sortState = {};
let pageIndex = 0;
let employeesPerPage = 10;
let messageTimeout;

document.addEventListener('DOMContentLoaded', () => {
  // Setzt alle Input Felder zurück beim initialen Laden
  document.getElementById('user-form').reset();
  clearErrors();
  clearSearchInput();
  // Lädt falls vorhanden Mitarbeiter aus LocalStorage
  fullEmployeeList = getEmployeesFromLocalStorage();
  // Initiales laden und befüllen der Tabelle
  updateTableData(fullEmployeeList);

  // Mitarbeiter hinzufügen bei Klick auf Button
  document.getElementById('user-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Handled das hinzufügen/validieren von neuen Mitarbeitern
    onSubmitNewEmployee();
    // Updated die Tabelle und befüllt diese mit vorhandenen Daten
    updateTableData(currEntries);
  });

  // Filtert die Mitarbeiterliste
  const filterElements = document.querySelectorAll('#search-con select');
  filterElements.forEach((filter) =>
    filter.addEventListener('change', () => {
      const filterType = filter.id.split('-')[1];
      filterEmployees(filterType);
      clearSearchInput();
    })
  );

  // Live Suche bei Eingabe ins Such-Feld
  document.getElementById('search').addEventListener('keyup', searchForName);
  // Löscht den Inhalt des Such-Feldes beim Fokussieren und setzt die Suche zurück
  document.getElementById('search').addEventListener('focus', (ev) => {
    clearSearchInput();
    searchForName(ev);
  });

  const dialog = document.getElementById('edit-dialog');
  // Modal Dialog Submit Button
  document.getElementById('edit-form').addEventListener('submit', editEmployee);
  // Modal Dialog Cancel Button
  document.getElementById('edit-cancel-btn').addEventListener('click', () => dialog.close());

  // Sort EventListener auf allen Tabellen-Headern
  const sortHeadings = document.querySelectorAll('thead tr th[data-header]');
  sortHeadings.forEach((header) => header.addEventListener('click', sortTable));

  // Export Button EventListener
  document.getElementById('export').addEventListener('click', exportEmployeesAsJson);
  // Import Button EventListener
  document.getElementById('import').addEventListener('change', importEmployees);
  // Table Reset Button EventListener
  document.getElementById('reset-data').addEventListener('click', resetEmployeeData);
  // LocalStorage Reset Button EventListener
  document.getElementById('reset-local-storage').addEventListener('click', clearLocalStorage);
});

/**
 * Rendert und aktualisiert die Tabelle basierend auf dem übergebenen Datenarray
 */
function updateTableData(array) {
  document.getElementById('table-body').innerHTML = '';
  removeNoEntriesMessage();
  if (!array) {
    showNoEntriesMessage();
    console.error('Fehler: Es wurde kein Array gefunden!');
    fullEmployeeList = [];
    saveToLocalStorage();
    return;
  }
  // Zeigt eine Hinweis-Meldung an falls Array leer ist
  if (array.length === 0) {
    showNumOfPages(array);
    getFilterOptions();
    showNoEntriesMessage();
    return;
  }
  getCurrEntries(array);
  const employees = showVisibleEmployees(currEntries);

  employees.forEach((employee) => createTableRowData(employee));

  const editButtons = document.querySelectorAll('.edit-btn');
  editButtons.forEach((button) => button.addEventListener('click', openEditDialog));

  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach((button) => button.addEventListener('click', deleteEmployee));
  showNumOfPages(currEntries);
  highlightCurrentPage();
  getFilterOptions();
  saveToLocalStorage();
}

/**
 * Erstellt Tabellenelemente für übergebenen Mitarbeiter
 * @param {EmployeeObject} employee
 */
function createTableRowData(employee) {
  const tr = document.createElement('tr');
  tr.className = 'employee';
  for (const value in employee) {
    const td = document.createElement('td');
    // ID wird ignoriert
    if (value === 'id') {
      continue;
    }

    let tdValue = employee[value];

    // Gehalt wird mit Zwei Dezimalstellen und Währung formatiert
    if (value === 'salary') {
      tdValue = `${employee[value].toFixed(2)} €`;
    }
    // Standardwerte anzeigen
    td.innerText = tdValue;
    tr.appendChild(td);
  }

  // Aktions-Buttons erstellen
  const buttonsCon = document.createElement('td');
  const editDetails = document.createElement('button');
  editDetails.className = 'edit-btn';
  editDetails.setAttribute('data-id', employee.id);
  editDetails.innerText = 'Bearbeiten';
  const deleteEntry = document.createElement('button');
  deleteEntry.className = 'delete-btn';
  deleteEntry.setAttribute('data-id', employee.id);
  deleteEntry.innerText = 'Löschen';
  buttonsCon.appendChild(editDetails);
  buttonsCon.appendChild(deleteEntry);

  tr.appendChild(buttonsCon);
  document.getElementById('table-body').appendChild(tr);
}

/**
 * Verarbeitet das Absenden des Formulars zur Erstellung eines neuen Mitarbeiters
 */
function onSubmitNewEmployee() {
  clearErrors('.error-message', '#user-form input');
  let isValid = true;
  const erronousFields = [];
  const inputValues = {
    id: fullEmployeeList.length + 1,
  };

  const inputFields = document.querySelectorAll('.form-row input[data-type="add"]');

  // Speichert jedes leere/fehlerhafte Feld
  inputFields.forEach((field) => {
    const value = field.value.trim();
    if (!value) {
      isValid = false;
      erronousFields.push(field.id);
    } else {
      if (!validateInput(field.id, value)) {
        isValid = false;
        erronousFields.push(`${field.id}Invalid`);
      }
      inputValues[field.id] = value;
    }
  });

  // Erzeugt eine Fehlermeldung für jedes leere/fehlerhafte Feld
  erronousFields.forEach((field) => {
    document.getElementById(`${errorMessages[field].fieldName}-error`).innerText = errorMessages[field].message;
    document.getElementById(`${errorMessages[field].fieldName}-error`).style.visibility = 'visible';
    document.getElementById(`${errorMessages[field].fieldName}`).style.border = '1px solid red';
  });

  if (isValid) {
    inputValues.salary = sanatizeSalary(inputValues.salary);
    fullEmployeeList.push(inputValues);
    getFilterOptions();
    showSuccessMessage();
    updateTableData(fullEmployeeList);
    document.getElementById('user-form').reset();
  }
}

/**
 * Verarbeitet das Editieren eines Mitarbeiters beim Absenden des Bearbeitungsformulars
 * @param {Event} ev
 */
function editEmployee(ev) {
  ev.preventDefault();
  clearErrors('.edit-error-message', '#edit-form input');

  const dialog = document.getElementById('edit-dialog');
  const id = parseInt(ev.target.dataset.id);
  const editIndex = fullEmployeeList.findIndex((employee) => employee.id === id);
  // Fehlerbehandlung falls Mitarbeiter nicht gefunden wird
  if (editIndex === -1) {
    showTableInfoMessage('error');
    throw new Error('Fehler: Es wurde kein Mitarbeiter mit dieser ID gefunden.');
  }

  let isValid = true;
  const erronousFields = [];
  const inputValues = { id };
  const inputEditFields = document.querySelectorAll('.form-row input[data-type="edit"]');

  // Speichert jedes leere/fehlerhafte Feld
  inputEditFields.forEach((field) => {
    // Entfernt 'edit-' vom ID-Namen
    const valueName = field.id.slice(5);
    const value = field.value.trim();

    if (!value) {
      inputValues[valueName] = fullEmployeeList[editIndex][valueName];
      return;
    } else if (!validateInput(valueName, value)) {
      isValid = false;
      erronousFields.push(`${valueName}Invalid`);
    }
    inputValues[valueName] = value;
  });

  // Erzeugt eine Fehlermeldung für jedes leere/fehlerhafte Feld
  erronousFields.forEach((field) => {
    document.getElementById(`edit-${errorMessages[field].fieldName}-error`).innerText = errorMessages[field].message;
    document.getElementById(`edit-${errorMessages[field].fieldName}-error`).style.visibility = 'visible';
    document.getElementById(`edit-${errorMessages[field].fieldName}`).style.border = '1px solid red';
  });

  if (isValid) {
    inputValues.salary = sanatizeSalary(inputValues.salary);
    fullEmployeeList[editIndex] = inputValues;
    updateTableData(fullEmployeeList);
    showTableInfoMessage('edit');
    dialog.close();
  }
}

/**
 * Löscht alle aktiven Fehlermeldungen
 * @param {String} errorSelector
 * @param {String} inputSelector
 */
function clearErrors(errorSelector, inputSelector) {
  const error = document.querySelectorAll(errorSelector);
  error.forEach((error) => {
    error.innerText = '';
    error.style.visibility = 'hidden';
  });

  const input = document.querySelectorAll(inputSelector);
  input.forEach((input) => {
    input.style.border = '1px solid #7f7f7f';
  });
}

/**
 * Zeigt bei erfolgreichem hinzufügen eines Mitarbeiters eine Nachricht für 2 Sekunden an
 */
function showSuccessMessage() {
  const successMessage = document.getElementById('add-success');
  successMessage.innerText = 'Mitarbeiter erfolgreich hinzugefügt.';
  successMessage.style.visibility = 'visible';

  setTimeout(() => {
    successMessage.style.visibility = 'hidden';
  }, 2000);
}

/**
 * Gibt ein Array aller sichtbaren Mitarbeiter zurück, basierend auf der aktuellen Seite und der Anzahl der Einträge pro Seite
 * @param {Array} array
 * @returns {Array} Mitarbeiter Array basierend auf dem Seitenindex und den Mitarbeitern pro Seite
 */
function showVisibleEmployees(array) {
  if (getNumOfPages(array) <= pageIndex / 10 && pageIndex > 0) {
    pageIndex -= 10;
  }
  return [...array].splice(pageIndex, employeesPerPage);
}

/**
 * Berechnet die Seitenanzahl basierend auf der Anzahl der Einträge pro Seite
 * @param {Array} array
 * @returns {number} Aufgerundete Anzahl an Seiten
 */
function getNumOfPages(array) {
  return Math.ceil(array.length / employeesPerPage);
}

/**
 * Generiert und rendert die Seitennummerierung basierend auf der Anzahl der Einträge des übergebenen Arrays
 * @param {Array} array
 */
function showNumOfPages(array) {
  const numOfPages = getNumOfPages(array);
  document.getElementById('pagination').innerHTML = '';
  for (let i = 0; i < numOfPages; i++) {
    const p = document.createElement('button');
    p.className = 'page';
    p.innerText = `${i + 1}`;
    p.setAttribute('data-id', `${i}`);
    document.getElementById('pagination').appendChild(p);
  }
  const pages = document.querySelectorAll('.page');
  pages.forEach((page) =>
    page.addEventListener('click', (ev) => {
      pageIndex = ev.target.dataset.id * 10;
      updateTableData(array);
    })
  );
}

/**
 * Hebt die Seitennummerierung der aktuellen Seite visuell hervor
 */
function highlightCurrentPage() {
  const pageId = pageIndex / 10;
  document.querySelector(`.page[data-id='${pageId}']`).style.backgroundColor = '#4caf50';
}

/**
 * Öffnet den Bearbeitungsdialog und befüllt die Felder mit den vorhandenen Daten des ausgewählten Mitarbeiters
 * @param {Event} ev
 */
function openEditDialog(ev) {
  clearErrors('.edit-error-message', '#edit-form input');
  const id = parseInt(ev.target.dataset.id);
  const form = document.getElementById('edit-form');
  const dialog = document.getElementById('edit-dialog');
  const inputValue = currEntries.find((employee) => employee.id === id);
  if (!inputValue) {
    showTableInfoMessage('error');
    throw new Error('Fehler: Es wurde kein Mitarbeiter mit dieser ID gefunden.');
  }

  const editFormChildren = document.querySelectorAll('#edit-form input');
  for (let i = 0; i < editFormChildren.length; i++) {
    const input = editFormChildren[i];
    const propName = input.id.split('-')[1];
    input.value = inputValue[propName];
  }
  form.dataset.id = id;
  dialog.showModal();
}

/**
 * Löscht einen Mitarbeiter aus der Liste und aktualisiert die Tabelle
 */
function deleteEmployee(ev) {
  const id = parseInt(ev.target.dataset.id);
  let dataToDisplay;
  const employeeData = fullEmployeeList.find((employee) => employee.id === id);
  // Error-Handling falls die ID ungültig ist
  if (!id || !employeeData) {
    showTableInfoMessage('error');
    throw new Error('Fehler: Es wurde kein Mitarbeiter mit dieser ID gefunden.');
  }
  fullEmployeeList = fullEmployeeList.filter((employee) => employee.id !== id);
  dataToDisplay = currEntries.filter((employee) => employee.id !== id);
  // Entfernt den Filter falls keine Einträge mehr mit dem aktuellen Filter vorhanden sind
  if (dataToDisplay.length === 0) {
    currentFilter = '';
    dataToDisplay = fullEmployeeList;
  }
  showTableInfoMessage('delete');
  updateTableData(dataToDisplay);
}

/**
 * Sucht nach einem Mitarbeiter basierend auf dem eingegebenen Namen und aktualisiert die Tabelle
 * @param {Event} ev
 */
function searchForName(ev) {
  pageIndex = 0;
  let dataToDisplay = fullEmployeeList;
  const cleanFullName = ev.target.value.replace(/\s|\,/g, '');
  if (cleanFullName) {
    const filteredEmployees = currEntries.filter((employee) => {
      const nameAndSurname = employee.name.toLowerCase() + employee.surname.toLowerCase();
      const surnameAndName = employee.surname.toLowerCase() + employee.name.toLowerCase();
      return nameAndSurname.includes(cleanFullName.toLowerCase()) || surnameAndName.includes(cleanFullName.toLowerCase());
    });
    dataToDisplay = filteredEmployees;
  }
  updateTableData(dataToDisplay);
}

/**
 * Validiert die Eingabe basierend auf dem Typ des Eingabefelds
 * @param {String} inputName
 * @param {String} input
 * @returns {Boolean}
 */
function validateInput(inputName, input) {
  let regex;
  if (inputName === 'email') {
    regex = /^[\w\.-]+@[\w\.-]+\.\w{2,4}$/;
  } else if (inputName === 'salary') {
    regex = /^\d+([,\.]\d{1,2})?(\s?\€)?$/;
  } else {
    regex = /^(\p{L}(\s)?)+$/gu;
  }
  return regex.test(input);
}

/**
 * Bereinigt das Gehalt, indem es Kommas durch Punkte ersetzt und es als Zahl zurückgibt
 * @param {String} salary
 * @returns {Number}
 */
function sanatizeSalary(salary) {
  const sanatizedSalary = salary.replace(/,/g, '.');
  return parseFloat(sanatizedSalary);
}

/**
 * Aktualisiert die Filteroptionen in den Dropdownmenüs basierend auf den aktuellen Daten
 */
function getFilterOptions() {
  const filterFields = document.querySelectorAll('.filter select');

  let department = ['placeholder'];
  let position = ['placeholder'];
  const filterMap = {
    department,
    position,
  };

  filterFields.forEach((filterField) => {
    // Speichert einmalig alle möglichen Filter-Optionen aller Mitarbeiter
    const filterType = filterField.dataset.type;
    fullEmployeeList.forEach((employee) => {
      if (!filterMap[filterType].includes(employee[filterType])) {
        filterMap[filterType].push(employee[filterType]);
      }
    });

    // Löscht Filter-Optionen, falls diese durch z.B. löschen eines Mitarbeiters nicht mehr vertreten werden
    [...filterField.children].forEach((child) => {
      if (!filterMap[filterType].includes(child.value)) {
        child.remove();
      }
    });

    filterMap[filterType].forEach((elem) => {
      const isExisting = document.querySelector(`option[value='${elem}']`);
      if (!isExisting) {
        const option = document.createElement('option');
        option.value = elem;
        option.innerText = elem;
        filterField.appendChild(option);
      }
    });
  });
}

/**
 * Filtert die aktuellen Daten basierend auf dem Filter Typ und aktualisiert die Tabelle
 * @param {String} filterType
 */
function filterEmployees(filterType) {
  pageIndex = 0;
  if (filterType === 'department') {
    document.getElementById('filter-position').value = 'placeholder';
  } else if (filterType === 'position') {
    document.getElementById('filter-department').value = 'placeholder';
  }
  const filterOption = document.getElementById(`filter-${filterType}`).value;

  currentFilter = filterOption;
  if (filterOption !== 'placeholder') {
    const filteredEmployees = fullEmployeeList.filter((employee) => employee[filterType] === filterOption);
    updateTableData(filteredEmployees);
    return;
  }
  updateTableData(fullEmployeeList);
}

/**
 * Gibt alle Einträge des übergebenen Arrays zurück, die auf den aktuellen Filter zutreffen
 * @param {Array} array
 */
function getCurrEntries(array) {
  if (currentFilter && currentFilter !== 'placeholder') {
    currEntries = [];
    array.filter((elem) => {
      if (elem.department === currentFilter || elem.position === currentFilter) {
        currEntries.push(elem);
      }
    });
    return;
  }
  currEntries = [...array];
}

/**
 * Sortiert die aktuellen Daten auf- oder absteigend und aktualisiert die Tabelle
 * @param {Event} ev
 */
function sortTable(ev) {
  const header = document.querySelectorAll('.table-header');
  header.forEach((elem) => elem.classList.remove('asc', 'desc'));
  const propertyName = ev.target.dataset.header;
  const isNumber = typeof currEntries[0][propertyName] === 'number';
  const order = sortState[propertyName] === 'asc' ? 'desc' : 'asc';
  sortState = { [propertyName]: order };
  ev.target.classList.add(sortState[propertyName]);

  currEntries.sort((a, b) => {
    if (isNumber) {
      return order === 'asc' ? a[propertyName] - b[propertyName] : b[propertyName] - a[propertyName];
    }

    return order === 'asc' ? a[propertyName].localeCompare(b[propertyName]) : b[propertyName].localeCompare(a[propertyName]);
  });
  updateTableData(currEntries);
}

/**
 * Löscht den Inhalt des Suchfelds
 */
function clearSearchInput() {
  document.getElementById('search').value = '';
}

/**
 * Zeigt eine Hinweiszeile an, solange diese noch nicht vorhanden ist
 */
function showNoEntriesMessage() {
  if (!document.querySelector('.no-entries')) {
    const parent = document.getElementById('table-body');
    const row = document.createElement('tr');
    const elem = document.createElement('td');
    elem.setAttribute('colspan', 7);
    elem.className = 'no-entries';
    elem.innerText = 'Keine Einträge vorhanden.';
    row.appendChild(elem);
    parent.appendChild(row);
  }
}

/**
 * Löscht die Hinweiszeile
 */
function removeNoEntriesMessage() {
  const message = document.querySelector('.no-entries');
  if (message) {
    document.querySelector('.no-entries').remove();
  }
}

/**
 * Speichert die aktuellen Mitarbeiterdaten im LocalStorage des Browsers
 */
function saveToLocalStorage() {
  const stringifyedList = JSON.stringify(fullEmployeeList);
  localStorage.setItem('employees', stringifyedList);
}

/**
 * Lädt die Mitarbeiterdaten aus dem LocalStorage und überschreibt die aktuellen Einträge,
 * solange Daten im LocalStorage vorhanden sind
 * @returns {JSONObject}
 */
function getEmployeesFromLocalStorage() {
  const storageList = localStorage.getItem('employees');
  if (storageList) {
    return JSON.parse(storageList);
  }
  return fullEmployeeList;
}

/**
 * Löscht alle Mitarbeiterdaten aus dem LocalStorage
 */
function clearLocalStorage() {
  localStorage.removeItem('employees');
  showTableInfoMessage('reset-localstorage');
}

/**
 * Exportiert die aktuelle Mitarbeiterliste als .json-Datei
 */
function exportEmployeesAsJson() {
  const jsonData = fullEmployeeList;
  const jsonString = JSON.stringify(jsonData, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'employees.json';
  a.click();
  URL.revokeObjectURL(url);
}

/**
 * Importiert eine .json-Datei mit Mitarbeiterdaten
 * @param {Event} ev
 */
function importEmployees(ev) {
  const file = ev.target.files[0];
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.addEventListener('load', (e) => {
    try {
      const importedData = JSON.parse(e.target.result);
      fullEmployeeList = importedData;
      updateTableData(fullEmployeeList);
    } catch (e) {
      console.error('Invalid file.', e);
    }
  });
  reader.readAsText(file);
  showTableInfoMessage('import');
}

/**
 * Löscht alle aktuellen Daten aus der Mitarbeiterliste
 */
function resetEmployeeData() {
  fullEmployeeList = [];
  showTableInfoMessage('reset-tabledata');
  updateTableData(fullEmployeeList);
  localStorage.setItem('employees', '[]');
}

/**
 * Zeigt eine Info zu verschiedenen Aktionen an
 * @param {String} type
 */
function showTableInfoMessage(type) {
  const message = document.getElementById('info-message');

  switch (type) {
    case 'delete':
      message.innerText = 'Mitarbeiter erfolgreich gelöscht.';
      break;
    case 'edit':
      message.innerText = 'Mitarbeiter erfolgreich bearbeitet.';
      break;
    case 'reset-tabledata':
      message.innerText = 'Tabellendaten erfolgreich gelöscht.';
      break;
    case 'reset-localstorage':
      message.innerText = 'Lokaler Speicher erfolgreich zurückgesetzt.';
      break;
    case 'import':
      message.innerText = 'Mitarbeiterliste erfolgreich importiert.';
      break;
    case 'error':
      message.innerText = 'Ein Fehler ist aufgetreten!';
      break;
    default:
      message.innerText = '';
      break;
  }

  // Setzt Timeout zurück, falls eine andere Nachricht noch einen Timeout besitzt
  if (messageTimeout) {
    clearTimeout(messageTimeout);
  }

  message.className = type;
  message.style.display = 'block';
  messageTimeout = setTimeout(() => {
    message.className = '';
    message.style.display = 'none';
  }, 2000);
}
