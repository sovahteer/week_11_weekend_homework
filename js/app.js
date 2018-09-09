document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event){
    event.preventDefault();

    const fleetRosterItem = createFleetRosterItem(event.target);
    const fleetRoster = document.querySelector('#fleet-roster');
    fleetRoster.appendChild(fleetRosterItem);

    event.target.reset();
}

const createFleetRosterItem = function (form){
    const fleetRosterItem = document.createElement('li');
    fleetRosterItem.classList.add('fleet-roster-item');

    const name = document.createElement('h2');
    name.textContent = form.name.value;
    fleetRosterItem.appendChild(name);

    const shipClass = document.createElement('p');
    shipClass.textContent = form.shipClass.value;
    fleetRosterItem.appendChild(shipClass);

    return fleetRosterItem;
}

const handleDeleteAllClick = function (event) {
    const fleetRoster = document.querySelector('#fleet-roster');
    fleetRoster.innerHTML = '';
  }
  